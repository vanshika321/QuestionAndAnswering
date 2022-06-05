const mongoose =require("nongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 6,
      },
      password:{
          type:String
      },
      questions:[{
          type:mongoose.Schema.Types.ObjectId,
          ref:'Question'
      }]
})
module.exports=mongoose.model("User",userSchema)