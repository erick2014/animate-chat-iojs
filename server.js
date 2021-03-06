'use strict'

const fs=require('fs')
const path=require('path')
const http=require('http')
const router=require('./router')

const port =process.env.PORT || 8080
const server= http.createServer();

server.on('request',router)
server.on('listening',onListening)

server.listen(port)

function onListening(){
  console.log(`Server running on port ${port}`)
}
