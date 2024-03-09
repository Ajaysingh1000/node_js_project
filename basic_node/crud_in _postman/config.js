const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/e-comm').then(()=>{
    console.log("successfully connected");
}).catch((err)=>{
    console.log("error in connection");
})