const mongoose= require("mongoose")
const questionSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    },
    date:{
        type:Date
    },
    answered:Boolean,
    answers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]

})
const Question=mongoose.model("Question",questionSchema)
module.exports=Question
