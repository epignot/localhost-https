const httpProxy =  require('http-proxy')
const fs =  require('fs')

const SOURCE_PORT=5002
const TARGET_PORT=8009

const proxy = httpProxy.createServer({
    target: {
      host: 'localhost',
      port: SOURCE_PORT
    },
    ssl: {
      key: fs.readFileSync('.cert/key.pem', 'utf8'),
      cert: fs.readFileSync('.cert/cert.pem', 'utf8')
    }
  }).listen(TARGET_PORT);

proxy.on('proxyReq', function(proxyReq, req, res, options) {
    proxyReq.setHeader('X-Forwarded-Proto', 'https');
});