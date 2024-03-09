const express = require('express')
const path = require('path')

const app = express();

const dirpath = path.join(__dirname,'public');

app.use(express.static(dirpath))

app.set('view engine','ejs')



// app.get('',(req,res)=>{
//     // console.log('this is a home page');;
//     // console.log("your query is ");
  
//     res.send(`<h1>this is a home page </h1>
//     <a href = '/about'>redirect to about page</a>`)
// })

// app.get('/about',(req,res)=>{
//     // console.log('this is about page');
//     res.send(`
//     <input type = "text" placeholder = "enter a value" value = ${req.query.name}>
//     <a href = "/">go to home </a>`)
//     // res.send("this is about")
// })

// app.get('',(req,res)=>{
//     res.sendFile(`${dirpath}/home.html`)
// })

app.get('',(req,res)=>{
    const user = {
        name : "ajay",
        subject: "chemistery",
        skills:["c++","javascript","node","c"]
    }
    res.render('home', {user})

})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/about',(req,res)=>{
    res.sendFile(`${dirpath}/about.html`)
})

app.get('*',(req,res)=>{
    res.status(404).send("not found")
})









app.listen(3000, ()=>{
    console.log(`this run at at http://localhost:${3000}`);
})