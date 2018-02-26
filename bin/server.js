// Add imports
import Koa from "koa"
import Router from "koa-router"
import bodyParser from "koa-body"
import staticCache from "koa-static-cache"
import convert from "koa-convert"
import path from "path"

// Add config
import config from "./config"

// Configure logger
import createLogger from "./logger"
const logger = createLogger.create(config)
const log = logger.child({component: "server"})

// Add routes
import catchAllRouter from './routes/index'

const app = new Koa()
.use(convert(staticCache(path.join(__dirname, "../dist"), {maxAge: 365 * 24 * 60 * 60})))
.use(bodyParser())
.use(catchAllRouter(config,logger).routes())
.use(catchAllRouter(config,logger).allowedMethods())
.listen(config.serverPort, err => {
	if (err) return log.error("server", err)
	log.debug(`==> Listening on http://0.0.0.0:${config.serverPort}/ 🚀 `)
})
