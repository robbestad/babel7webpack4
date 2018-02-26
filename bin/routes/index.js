import Router from "koa-router"
import send from "koa-send"
import path from "path"

const router = new Router()

function wrapper(config) {
	return router.get("/", async ctx => {
		console.log(console.log(`${path.join("dist")}`))
		await send(ctx, `${path.join("/dist/index.html")}`)
	})
}

export default wrapper
