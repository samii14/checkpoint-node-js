
// //core modules
// let fs =require("fs")
//  fs.readFile("hello.js",{encoding:"utf-8"},(err,data)=>{if(err){

//     console.log(err)
//  }
//  else{
//     console.log(data)
//  }


// })
//third party

const uuid = require("uuid")
let users=[{
    id:uuid.v4(),
   name:"rayen",
    address:"sousse"




},
{
    id:uuid.v4(),
    name:"sami",
    address:"sousse"




},
{
    id:uuid.v4(),
    name:"folla",
    address:"sousse"




}]
console.log(users)
//local modules
let myfunction = require("./myfunction")
console.log(myfunction)
console.log("my sum is",myfunction.sum(5,10))