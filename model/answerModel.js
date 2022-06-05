const mongoose= require("mongoose")

const answerSchema=mongoose.Schema({
    descrption:{
        type:String,
        required:true
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question"

    },
    answereedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Answer =mongoose.model("Answer",answerSchema)
module.exports=Answer