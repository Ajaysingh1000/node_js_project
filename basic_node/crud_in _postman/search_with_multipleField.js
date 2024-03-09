const express = require('express');
require("./config");
const Product = require('./product');
const app = express();

app.use(express.json());

const port = process.env.port || 3000;




app.get("/search/:key",async (req,resp)=>{
    let data = await Product.find(
        {
            "$or":[
                {name:{$regex:req.params.key}},
                {brand:{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);

})












app.listen(port, ()=>{
    console.log(`this port is listen at http://localhost:${port}`);
})