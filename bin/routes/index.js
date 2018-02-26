import Router from "koa-router"
import send from "koa-send"
import path from "path"

const router = new Router()

function wrapper(config, logger) {
	const log = logger.child({component: "routes"})

	return router.get("/", async ctx => {
		log.debug("/")
		await send(ctx, `${path.join("/src/index.html")}`)
	})
}

export default wrapper
