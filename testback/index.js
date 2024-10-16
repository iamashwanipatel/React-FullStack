const express = require("express");

const app = express();

const port = 4000
const admin =(req, res )=> { return res.send('this is admin2 ')}
app.get('/login',(req , res )=>res.send('hello world')) 
const isAdmin =(req,res, next)=>{console.log("isAdmin is running");
    next();
}
app.get('/admin',isAdmin,admin) 

app.listen(port, ()=>{
    console.log('server is up and running ')
})


// app.listen(port,()=> console.log(`Example  app listening on port 3000`))
