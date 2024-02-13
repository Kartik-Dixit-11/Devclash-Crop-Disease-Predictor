const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/predictions',
    createProxyMiddleware({
      target: 'http://localhost:7000',
      changeOrigin: true,
    })
  ),

  app.use(
    '/signUp',
    createProxyMiddleware({
      target: 'http://localhost:3500/api/v1',
      changeOrigin: true,
    })
  ),

  app.use(
    '/login',
    createProxyMiddleware({
      target: 'http://localhost:3500/api/v1',
      changeOrigin: true,
    })
  )
};