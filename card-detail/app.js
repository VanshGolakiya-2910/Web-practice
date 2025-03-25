const express = require('express')
const app = express()
const fs = require('fs')
app.set("view engine", "ejs");
let data = fs.readFileSync('data.json' ,'utf-8' );
app.get("/", (req, res) => {
  res.render("index" ,{data});
});
data = JSON.parse(data)
console.log(data[0].images)
app.get("/detail", (req, res) => {
  const index = req.query.id;
  const data = data[index]; 
  console.log(data)
  res.render("product" , {data});
} );
app.listen(3000)