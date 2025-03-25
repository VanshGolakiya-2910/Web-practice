const { default: mongoose } = require('mongoose')
const Users = mongoose.Schema(
    {
        name : String,
        email : String
    }
)
module.exports = mongoose.model("ExpGenUser" ,  Users)