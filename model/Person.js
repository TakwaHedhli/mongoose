
const mongoose=require('mongoose')
const personSchema=new mongoose.Schema({

   name:{
       type:String
   },
   age:{
       type:Number
   },
   favoriteFood:{
       type:[String]
   }


}) 
const Person=new mongoose.model('person',personSchema)
module.exports=Person



