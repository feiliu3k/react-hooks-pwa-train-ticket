const Koa = require("koa")
const app = new Koa()
const koaBody = require("koa-body")
const Router = require("@koa/router")
const router = new Router()
const Mock = require("mockjs")
const fs = require("fs")
const pyfl = require("pyfl").default

app.use(koaBody())
// let cityData = fs.readFileSync('./json/cityData.json')
// cityData = JSON.parse(cityData.toString())
router.get("/rest/cities", (ctx, next) => {
  let cityDataJSON = fs.readFileSync("./json/cityData.json")
  cityDataJSON = JSON.parse(cityDataJSON.toString())
  let cityData = cityDataJSON.reduce((cityData, prop) => {
    let { citys } = prop
    citys.forEach((item) => {
      const chartCodePy = pyfl(item.citysName).charAt(0)
      let findData = cityData.find((fp) => chartCodePy === fp.title)
      if (!findData) {
        cityData.push({ title: chartCodePy, cities: [item.citysName] })
      } else {
        findData.cities.push(item.citysName)
      }
    })
    return cityData
  }, [])
  //   按照首字母排序
  cityData.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
  cityData.forEach((prop) => {
    prop.cities.sort(
      (a, b) =>
        pyfl(a.charAt(1)).charCodeAt(0) - pyfl(b.charAt(1)).charCodeAt(0)
    )
  })
  ctx.body = {
    isSuccess: true,
    data: cityData,
  }
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3001, () => {
  console.log("serve is running at http://localhost:3001")
})
