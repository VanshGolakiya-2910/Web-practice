const { default: mongoose } = require("mongoose")

const CurdSchema = mongoose.Schema({
    name: String , 
    email : String
})
module.exports = mongoose.model("mongooseCurd" , CurdSchema)