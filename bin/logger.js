import bunyan from "bunyan"
import path from "path"
import PrettyStream from "bunyan-prettystream"

const isDev = config => {
	return config.env === "development"
}

function prettyFormat() {
	const prettyStdOut = new PrettyStream()
	prettyStdOut.pipe(process.stdout)
	return prettyStdOut
}

function configureStreams(config) {
	const streams = []
	if (isDev(config)) {
		streams.push({
			level:  "debug",
			type:   "raw",
			stream: prettyFormat()
		})
		return streams
	} else {
		streams.push({
			level:  "info",
			stream: prettyFormat()
		})
		return streams
	}
}

export default {
	create(config) {
		return bunyan.createLogger({
			name:        config.title,
			serializers: bunyan.stdSerializers,
			streams:     configureStreams(config)
		})
	}
}
