const http = require('http')

const data = require('./index1')
const { text } = require('express')

// function serve(req,res){
//     res.write("hello how are you")
//     res.end()

// }

// http.createServer((req,res)=>{
//     res.write("<h1>hello how are you</h1>")
//     res.end()
// }).listen(3000, ()=>{
//     console.log(`this port is run at http://localhost:${3000}`);
// })

// http.createServer((req,res)=>{
//     res.writeHead(400,{'Content-Type' : 'application/json'})
//     res.write(JSON.stringify(data))
//     res.end();
// }).listen(3000, ()=>{
//     console.log(`port is run at http://localhost:${3000}`);
// })

http.createServer((req,res)=>{
    // res.writeHead(400,{'Content-Type' : 'application/json'})
    res.setHeader('Content-Type','application/json')
    res.write(JSON.stringify(data))
    res.end();
}).listen(3000, ()=>{
    console.log(`port is run at http://localhost:${3000}`);
})