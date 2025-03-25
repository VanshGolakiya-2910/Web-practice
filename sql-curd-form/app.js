const express = require("express");
const app = express();
const mysql = require("mysql");
const sql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"",
  database:"demo"
});
sql.connect((err) => {
    if(err) throw(err)
    console.log("Connection Success")
})
app.set("view engine" , "ejs")
app.get("/" , (req , res) => {
    const qry = `SELECT * FROM register`
    sql.query(qry , (error ,data)=> {
        if(error) throw error
        res.render("index", {data})
    })
})
app.get("/submitForm" , (req,res) => {
   const data= req.query
   const {name , email} = data
    const qry = `INSERT INTO register (name , email) values ('${name}' ,'${email}')`
    sql.query(qry ,(error) => {
        if (error) throw error; 
        console.log("Data Inserted")
    } )
    res.redirect("/")
})

app.listen(3000);
