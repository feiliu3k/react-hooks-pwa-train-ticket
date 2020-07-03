const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')
const Router = require('@koa/router')
const router = new Router()
const Mock = require('mockjs')
const fs = require('fs')
const pyfl = require('pyfl').default

app.use(koaBody())
// let cityData = fs.readFileSync('./json/cityData.json')
// cityData = JSON.parse(cityData.toString())
router.get('/rest/cities', (ctx, next) => {
	let cityDataJSON = fs.readFileSync('./json/cityData.json')
	cityDataJSON = JSON.parse(cityDataJSON.toString())
	let cityData = cityDataJSON.reduce((cityData, prop) => {
		console.log(prop)
		let { citys } = prop
	}, [])
	ctx.body = {
		isSuccess: true,
		data: cityData,
	}
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3001, () => {
	console.log('serve is running at http://localhost:3001')
})
