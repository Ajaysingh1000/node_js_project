module.exports = reqFilter = (req,res,next)=>{
    if (!req.query.age){
        res.send("Provide your age")
    }
    else if (req.query.age<18){
        res.send("you cannot access this page")
    }

    else{
        next();
    }
    
    // next();
}