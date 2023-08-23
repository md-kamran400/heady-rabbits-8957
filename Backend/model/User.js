const mongoose=require("mongoose")



const newschema=mongoose.Schema({
    username : String,
    email : String,
    password : String,
},
{
    versionKey:false
})

const User= new mongoose.model("user",newschema)
module.exports={User}