const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect("")
  .then(console.log("Connection Sucessfull"))
  .catch((error) => {
    console.log(error);
  });
app.listen(3000, () => {
  try {
    console.log("Server started on port 3000");
  } catch (error) {
    console.log(error);
  }
});
