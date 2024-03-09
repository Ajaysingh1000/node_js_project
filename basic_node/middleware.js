const express = require('express')

const reqFilter = require('./middle_ware')

const route = express.Router()

const app = express();

route.use(reqFilter)


// const reqFilter = (req,res,next)=>{
//     if (!req.query.age){
//         res.send("Provide your age")
//     }
    // console.log('reqFilter');  //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // at new NodeError (node:internal/errors:405:5)
//     next();
// }

//  to resolve error of cannot set headers we move next into else part
// const reqFilter = (req,res,next)=>{
//     if (!req.query.age){
//         res.send("Provide your age")
//     }
//     else if (req.query.age<18){
//         res.send("you cannot access this page")
//     }

//     else{
//         next();
//     }
    
//     // next();
// }

// app.use(reqFilter) when use for all routes

// app.get('/',reqFilter,(req,res)=>{
//     res.send("this is a home page")
// })


app.get('/',(req,res)=>{
    res.send("this is a home page")
})


route.get('/about',(req,res)=>{
    res.send("this is a about page")
})


route.get('/service',(req,res)=>{
    res.send("this is a service page")
})

app.use('/',route)




app.listen(3000)