const express = require("express");
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, "public")));
  
  app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.listen(3000, function () {
      console.log("Server is running on localhost:3000");
});



const { Client } = require('pg');


// import { Client } from 'pg'

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'postgres',
    password: 'root',
    port: 5432,
});
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

client.query(`SELECT * FROM public."hsCodeChapter1"`,(err,res)=>{
    if(!err){
        console.log(res.rows)
    }
    else{
        console.log(err.message)
    }
})


const hsCode = document.getElementById("hs-code")
console.log("heofishof")
const hsDesciption = document.getElementById("hs-description")
const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")
const codeResult = document.getElementById("result-1")
const descriptionResult = document.getElementById("result-2")


button1.addEventListener("click",function(event){
    event.preventDefault()
    let hsCodeValue = hsCode.value
    console.log(hsCodeValue)
    if(hsCodeValue!=""){
        codeResult.innerHTML = `the code : ${hsCodeValue}`
    }
})

button2.addEventListener("click",function(event){
    event.preventDefault()
    let hsDescriptionValue = hsDesciption.value
    console.log(hsDescriptionValue)
    if(hsDescriptionValue!=""){
        descriptionResult.innerHTML = `the description : ${hsDescriptionValue}`
    }
})
