const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api.php',
        createProxyMiddleware({
            target: 'http://localhost:8888',
            changeOrigin: true,
        })
    );
};
