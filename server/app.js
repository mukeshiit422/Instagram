const express=require('express');
const  mongoose = require('mongoose');
require('./model/user')
//require('./db/connection')
const {mongoUrl}=require('./key/keys')
const app=express();
const PORT=3100;


const customMiddleWare=(req,res,next)=>{
  console.log("middleWare>>");
  next();
}

//app.use(customMiddleWare); // will be used for all routes

// app.get('/',customMiddleWare,(req,res)=>{ // custom middleware for a particular function 
//   console.log("home")
//   res.send('send data');
// })

// app.get('/about',(req,res)=>{
//   console.log("about")
//   res.send('send about');
// })

mongoose.connect(mongoUrl)
mongoose.connection.on('connected',()=>{
  console.log('connected yeah');
})

mongoose.connection.on('error',()=>{
  console.log('error');
})

app.listen(PORT,()=>{
  console.log('server is running')
})