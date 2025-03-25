const express = require('express')
const app = express()
app.set("view engine" , "ejs")
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const client = new MongoClient("mongodb://localhost:27017/")
client.connect()
.then(
    console.log("Connection established")
)
.catch((error) => {
    console.log(error);
})
const db = client.db("practice")
const collection = db.collection("crud")
app.get('/', async (req , res) => {
    const data = await collection.find().toArray()
    
    res.render("index" , {data ,editData : null})
})
app.get("/submitForm" , async(req , res) => {
    const data = req.query
   
    if (data.id != "")
        {
            await collection.updateOne({_id:new ObjectId(data.id)}  , {$set:data} )
        }
        else
        {
            await collection.insertOne(data)
        }
    res.redirect("/")
})
app.get("/deleteData"  , async(req , res ) => {
    const objectid = req.query.delete
    await collection.deleteOne({_id: new ObjectId(objectid)})
    res.redirect("/")
})
app.get("/editData" ,async(req, res)=>{
    const objectid = req.query.edit
    const data = await collection.find().toArray()
    const editData = await collection.findOne({_id : new ObjectId(objectid)})
    res.render("index" , {editData , data})
})
app.listen(3000)