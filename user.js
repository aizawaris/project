var mongoose=require("mongoose")
var userSchema=mongoose.Schema
(
    {
        firstname:String,
        lastname:String,
        email:String,
        password:String,
        confirmpassword:String,
        phone:String
        
    }
)
module.exports =mongoose.model("users",userSchema)