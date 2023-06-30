const express = require("express");
const app = express();
const path = require('path');
const XLSX = require("xlsx");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public"), {
  setHeaders: (res, filePath) => {
    const mimeType = mime.getType(filePath);
    res.setHeader("Content-Type", mimeType);
  },
}));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, function () {
    console.log("Server is running on localhost:3000");
});

console.log("hello")
const workbook = XLSX.readFile("hscode_data.xlsx");
const worksheet = workbook.Sheets["chapter1"];
const arrChapter1 = XLSX.utils.sheet_to_json(worksheet)
let objectEnt = Object.entries(arrChapter1)

console.log(objectEnt[0][1]);

// app.js

// Get the necessary elements from the DOM


// const section1 = document.getElementById("section-1");
// const section2 = document.getElementById("section-2");
// const section1Button = document.getElementById("button-1");
// const section2Button = document.getElementById("button-2");

// console.log(section1)

// section1Button.addEventListener("click",function(event){
//   event.preventDefault();
//   console.log("clicked")
// })
// section2Button.addEventListener("click",function(event){
//   event.preventDefault();
//   console.log("clicked")
// })