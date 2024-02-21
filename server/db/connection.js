const mongoose=require('mongoose');
const {mongoUrl}=require('../key/keys')
mongoose.connect(mongoUrl)
mongoose.connection.on('connected',()=>{
  console.log('connected yeah');
})

mongoose.connection.on('error',(err)=>{
  console.log('connection error',err);
})