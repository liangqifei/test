const express = require('express')
// const httpProxy = require('http-proxy');
const server = express()
server.use(express.static(__dirname +'/prod'))
server.listen(8888, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:8888')
})