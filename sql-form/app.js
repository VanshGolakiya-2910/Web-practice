const express = require("express");
const app = express();

const mysql = require("mysql");
const sql = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "demo"
})
sql.connect((error) => {
  if(error) throw error
  console.log("connection success");
  
})
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  var qry = "SELECT * FROM register"
  sql.query(qry , (error , data) => {
    if(error) throw error
    console.log(data);
   
      res.render("index" , {data , editdata : null})
    })
});
app.get("/submitForm", (req, res) => {
  const data = req.query;
  const {id , name , email} = data
  // console.log(data);
  var qry = ''
  if(id != null)
  {
    qry = `UPDATE register SET name='${name}' , email='${email}' WHERE id='${id}'`
  }
  else
  {
    qry = `INSERT INTO register (name , email) VALUES ('${name}' , '${email}')`
  }
  sql.query(qry , (error) => {
    if(error) throw error
    console.log("data success");
  })
  res.redirect("/");
});
app.get("/delete/:id", (req, res) => {
  const id = req.params.id
  var qry = `DELETE FROM register WHERE id = ${id}`
  sql.query(qry , (error) => {
    if(error) throw error
    console.log("data delete");
    
  })
  res.redirect("/");
});
app.get("/edit/:id", (req, res) => {
  const id = req.params.id
  var qry = `SELECT * FROM register WHERE id = ${id}`
  sql.query(qry , (error , editdata) => {
    console.log(editdata);
    
     var qry1 = "SELECT * FROM register"
     sql.query(qry1 , (error  , data) => {
       if(error) throw error
       res.render("index" , {editdata : editdata[0] , data})
     })
  })
});
app.listen(3000);