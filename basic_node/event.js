const express = require('express')

const EventEmitter = require('events') // first letter capital matlab class hai ye

const app = express();


const event = new EventEmitter();

let count = 0

// countAPI event call ho raha hai
event.on('countAPI', ()=>{
    count++
    console.log('event called', count);
})


app.get('/',(req,res)=>{
    res.send("api called")
    event.emit("countAPI") // event ko generate karna
})

app.get('/search', (req,res)=>{
    res.send("search api called")
})


app.get("/update", (req,res)=>{
    res.send("update api called")
})

app.listen(3000)