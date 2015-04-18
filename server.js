'use strict'

const fs=require('fs')
const port =process.env.PORT || 8080
const http=require('http')

const server= http.createServer();
server.listen(port)

server.on('request',onRequest)
server.on('listening',onListening)

function onRequest(req,res){
  fs.readFile('public/index.html',function(err,file){
  	if(err){
  		return res.end(err.message)
  	}
  	res.end(file)
  })
}

function onListening(){
  console.log('Server running on port' +port)
}
