const express = require('express')

const app = express();
const mongoDB = require('mongodb')
const dbconnect = require('./mongoDB')

app.use(express.json());


app.get('/',async (req,res)=>{
    let data = await dbconnect();
    let val = await data.find().toArray();
    // console.log(val);
    res.send(val)
})

app.post('/', async (req,res)=>{
    // console.log({name:"ajay"});
    // console.log(req.body.name);
    // res.send({name:"ajay"})
    let data = await dbconnect();

    let val = await data.insertOne(req.body);

    res.send(val);



})

app.put('/:name',async (req,res)=>{

    let data = await dbconnect();
    let value = await data.updateOne({'name':req.params.name}, {$set: req.body})
    // let value = await data.updateOne({'name':req.body.name}, {$set: req.body})

    // res.send(value)
    // console.log(req.body);

    res.send({result:"updated"})


})


app.delete('/:id',async (req,res)=>{

    let data = await dbconnect();
    let value = await data.deleteOne({_id: new mongoDB.ObjectId(req.params.id)})
    // console.log(req.params.id);

    res.send(value)


})


app.listen(3000, ()=>{
    console.log("this port is listen at http://localhost:3000");
})