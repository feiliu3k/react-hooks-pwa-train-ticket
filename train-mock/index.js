const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')
const Router = require('@koa/router')
const router = new Router()

app.use(koaBody())

router.get('/rest', (ctx, next) => {
	ctx.body = {
		result: 1,
		msg: 'hello koa',
	}
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3001, () => {
	console.log('serve is running at http://localhost:3001')
})
