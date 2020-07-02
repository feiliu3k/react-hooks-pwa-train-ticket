const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(createProxyMiddleware('/rest', { target: 'http://localhost:3001', changeOrigin: true, pathRewrite: { '^/rest': '' } }))
}
