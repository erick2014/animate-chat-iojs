'use strict'

const port =process.env.PORT || 8080
const http=require('http')

const server= http.createServer(onRequest);
server.listen(port,onListening)

function onRequest(req,res){
  res.end('Hola io.js')
}

function onListening(){
  console.log('Server running on port' +port)
}
