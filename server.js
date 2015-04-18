'use strict'

const fs=require('fs')
const path=require('path')
const port =process.env.PORT || 8080
const http=require('http')

const server= http.createServer();
server.listen(port)

server.on('request',onRequest)
server.on('listening',onListening)

function onRequest(req,res){
  let uri =req.url
  
  if(uri.startsWith('/index') || uri ==='/'){
    return serverIndex(res)
  }
  
  if(uri ==='/app.js'){
    return serverApp(res)
  }

  res.statusCode=404
  res.end(`404 not found: ${uri}`)
}

function serverIndex(res){
  let index=path.join(__dirname,'public','index.html')
  //define a read stream
  let rs=fs.createReadStream(index)
  //set the header's content type
  res.setHeader('Content-Type','text/html')

  //pass the read stream through the response stream
  rs.pipe(res)

  //define and error listener on the read stream
  rs.on('error',function(err){
      res.end(err.message)
  })
}

function serverApp(res){

  let app=path.join(__dirname,'public','app.js')
  //define a read stream
  let rs=fs.createReadStream(app)

  //set the content type
  res.setHeader('Content-Type','text/html')

  //pass the read stream through the response stream
  rs.pipe(res)

  //define and error listener on the read stream
  rs.on('error',function(err){
      res.end(err.message)
  })
}

function onListening(){
  console.log(`Server running on port ${port}`)
}
