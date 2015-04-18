'use strict'

const port =process.env.PORT || 8080
const http=require('http')

const server= http.createServer();
server.listen(port)

server.on('request',onRequest)
server.on('listening',onListening)

function onRequest(req,res){
  res.end('Hola io.js')
}

function onListening(){
  console.log('Server running on port' +port)
}
