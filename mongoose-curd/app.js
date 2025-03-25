const express =require("express")
const app = express()
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/practice")
.then(console.log("Connection established")
)
.catch((error) => {
    console.log(error);
})
const MC = require("./model/mongooseCurd")
app.set("view engine" , "ejs")
app.get("/" ,async (req , res) => {
    const data = await MC.find()
    res.render("index" , {data})
})
app.get("/submitForm" ,async (req , res)=> {
    const data = req.query
    console.log(data)
    await MC.create(data)
    res.redirect("/")
})
app.get("/deleteData" , async(req , res)=>{
    const id = req.query.delete
    await MC.
    res.redirect("/")
})
app.get("/editData" , async(req, res)=>{
    const id = req.query.edit
    const data = MC.findById(id)
    console.log(data);
    
})
app.listen("3000")