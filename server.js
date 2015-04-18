'use strict'

const port =process.env.PORT || 8080
const http=require('http')
const server= http.createServer()

server.listen(port)