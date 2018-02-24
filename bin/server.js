import Koa from "koa"
import Router from "koa-router"
import config from "./config"
import logger from "koa-logger"

const publicRouter = new Router()
const routes= require('./routes/index')
const app = new Koa()
  .use(bodyParser({jsonLimit: '50mb'}))
  .use(async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = err.status || 500
      ctx.body = err.message
      ctx.app.emit('error', err, ctx)
      throw err
    }
  })

  .use(logger())
  .use(routes.allowedMethods())
  .use(routes.routes())
  .use(async (ctx) => {
    await send(ctx, '../src/index.html')
  })

  .listen(config.app.serverPort)



