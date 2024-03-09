const express = require('express')

const multer = require('multer')

const port = process.env.port || 3000


const app = express()

const upload = multer({
    storage : multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'uploads') // yaha uploads wale folder me file upload hogi
        },
        filename(req,file,cb){
            cb(null,file.fieldname + "-" + Date.now() + ".png"); // jo mere file ka name hai
        }
    })
}).single("user_file")

app.post('/upload',upload , (req,res)=>{
    res.send("upload")
})



app.listen(port, ()=>{
    console.log(`this port is listen at http://localhost:${port}`);
})