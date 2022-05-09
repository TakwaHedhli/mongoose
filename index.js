const express = require("express")
 const app = express()
require('dotenv').config()
const mongoose= require('mongoose')
const Person= require('./model/Person')

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
.then(() =>console.log('data base connecté'))
.catch((err)=>console.log(err))

//ceration
let test = Person.create({
    name:"takwa",
    age:"26",
    favoriteFood:["kafteji","pizza"]
},async(err,data)=>{
    if(err)throw err
    await console.log(data)
})
//create Many

let arrayOfPeople = [
  {name: "hedhli hiba", age: 22, favoriteFoods: ["makrouna"]},
  {name: "omrani ahmed", age: 18, favoriteFoods: ["pizza"]},
  {name: "mekni ala", age: 24, favoriteFoods: ["Kafteji"]},
  {name: "hedhli ons", age: 30, favoriteFoods: ["Kosksi"]}
];
 let teste = Person.create(arrayOfPeople, async (err, data) => {
  if (err){console.log(err)}
  await console.log(data)

} )
    //find

       let testee=Person.find({"name": "hedhli hiba"}, async(err,data)=>{
       if(err) throw console.log(err)
        await console.log(data)
          })  
        
      //find one  
      
         let one =Person.findOne({ favoriteFood: "pizza" }, async(err, data) => {
          if (err) throw console.log(err);
         await console.log (data);
       });
        //findbyid

        let id="6276cd6b16f5f221d3050943"
        let ff = Person.findById({_id: id }, async(err,data)=>{
         if(err)throw err
          await console.log(data)
       })
        //modifier 
        const foodToAdd = "hamborger";
  Person.findById({_id:id}, async(err, data) => {
    if (err) throw (err);
    await data.favoriteFood.push(foodToAdd);
    data.save(async(err, data) =>
       err
        ? console.error("error saving data: ", err.message)
        : await console.log(data)
   );
  })
  //update age
  const ageToSet = 20;

  let age =  Person.findOneAndUpdate(
    { "name": "olfa" },
    { $set: { "age": ageToSet } },
    { new: true },
    async(err, data) => (err ? async(err, data) : console.log(data))
 );      
      //delete
      let dd ="6276cca1ea684c6a5bdb62e3"
       let sup = Person.findByIdAndRemove({_id:dd}, async(err, data) =>
      err ? async(err, data) : await console.log(data)
    ); 
//removemany

const nameRemove = "mary ";
  let rem = Person.remove({ name: nameRemove }, async(err, data) =>
    err ? async(err, data) : await console.log (data)
  );




 app.listen(PORT , ()=>{
     console.log('server is running')
 })
