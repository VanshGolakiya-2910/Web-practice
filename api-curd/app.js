const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UC  = require("./controller/UserController");
const bodyParser = require("body-parser");
mongoose
  .connect("mongodb://localhost:27017/practice")
  .then(console.log("Connection Sucessfull"))
  .catch((error) => {
    console.log(error);
  });
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.get("/" , UC.viewData)
app.post("/" , UC.addData)
app.listen(3000, () => {
  try {
    console.log("Server started on port 3000");
  } catch (error) {
    console.log(error);
  }
});
