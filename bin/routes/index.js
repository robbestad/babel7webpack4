import Router from "koa-router"
import send from "koa-send"
import path from "path"

const router = new Router()

function wrapper(config) {
	return router.get("/", async ctx => {
		await send(ctx, `${path.join("/src/index.html")}`)
	})
}

export default wrapper
