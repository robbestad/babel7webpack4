import Koa from "koa"
import Router from "koa-router"
import config from "./config"
import logger from "koa-logger"
import bodyParser from "koa-body"
import staticCache from "koa-static-cache"
import convert from "koa-convert"
import path from "path"

// Add routes
import catchAllRouter from './routes/index'

const app = new Koa()
.use(convert(staticCache(path.join(__dirname, "../dist"), { maxAge: 365 * 24 * 60 * 60 })))
.use(bodyParser())
.use(logger())
.use(catchAllRouter(config).routes())
.use(catchAllRouter(config).allowedMethods())
app.listen(config.serverPort, err => {
	if (err) return console.error("server", err)
	console.log(`==> Listening on http://0.0.0.0:${config.serverPort}/ 🚀 `)
})



