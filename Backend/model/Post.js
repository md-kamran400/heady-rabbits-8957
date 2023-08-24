const mongoose=require("mongoose")



const newschema=mongoose.Schema({
title: String,
date :String,
rating : String,
comments : Number,
price:Number,
image:String,
publisher:String,
category:String
},
{
    versionKey:false
})

const Post=new mongoose.model("post",newschema)
module.exports={Post}