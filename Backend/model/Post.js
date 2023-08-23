const mongoose=require("mongoose")



const newschema=mongoose.Schema({
    title: String,
    date :String,
rating : String,
no_of_comments : Number,
price:Number,
image:String,
publisher:String
},
{
    versionKey:false
})

const Post=new mongoose.model("post",newschema)
module.exports={Post}