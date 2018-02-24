import Router from "koa-router"
import send from "koa-send"
const router = new Router()
const BASE_URL = '/'

router.get(`${BASE_URL}/`, async ctx => {
  ctx.body = await send("../src/index.html")
})

export default router
