const express = require('express');


require('../crud_in _postman/config')

const app = express() 

const port = process.env.port || 3000;

const book = require('./book')

const jwt = require('jsonwebtoken')

const secretKey = 'secretKey'

app.use(express.json())


app.post('/create', async (req,res)=>{

    const {book_name, author} = req.body;

    if (!book_name || !author){
        res.send("both fields are required")
    }
    
    let data = new book(req.body)
    let result = await data.save();
    // console.log();
    res.send(result)

})


app.get('/list', async(req,res)=>{
    let data = await book.find();
    res.send(data)
})

app.put('/update/:_id', async (req,res)=>{
    console.log(req.params);

    let data = await book.updateOne(
        req.params,
        {$set: req.body}
        )

        res.send(data)
})


app.delete('/delete/:_id', async (req,res)=>{
    // console.log(req.params);
    let data = await book.deleteOne(req.params);
    res.send(data)
})



app.post('/gt',(req,res)=>{

    const {book_name, author} = req.body;

    if (!book_name || !author){
        res.send("both fields are required")
    }
    
    let data = new book(req.body);
    jwt.sign({data},secretKey,(err,token)=>{
        res.json({token:token});
    })






})


app.post('/profile', verifyToken, (req, res) => {
    // Your code for handling the '/profile' route here
    // This code will only execute if the token is verified successfully.
    res.send("user successfully login")
  });
  
  function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
  
    if (typeof bearerHeader !== 'undefined') {
      // Extract the token from the 'Authorization' header
      const token = bearerHeader.split(' ')[1];
    //   console.log(token);
      
      try {
        // Verify the token here using your secret key (e.g., 'your-secret-key')
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next(); // Call next() to proceed with the request
      } catch (ex) {
        res.status(401).json({ message: 'Token is invalid' });
      }
    } else {
      res.status(401).json({ message: 'Access denied. No token provided.' });
    }
  }
  


app.listen(port, ()=>{
    console.log(`this port is listen at http://localhost:${port}`);
})