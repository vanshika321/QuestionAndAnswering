const answerModel = require("../model/answerModel")
const user =require("../model/userModel")
const question =require("../model/questionModel")
exports.postAnswer=async(req,res)=>{
    const questionName=await question.findById(req.body.questionId)

    if(!questionName){
        res.status(400).json({
            message:"Can't post answer without question"
        })
    }
   if(!req.body.descrption){
    res.status(400).json({
        message:"Cant provide empty answer"
    })
   }
   try{
        res.status(201).json({
            message:"success", 

        })
   }
   catch(err){
     res.status(400).json({
        message:"Server Error" 
     })  
   }
}

exports.updateAnswer = (req,res)=>{
    const User =await user.findById(req.body.userId)
    const answer= answerModel.findById(req.body.id)
    if(User._id!=answer.postedBy._id){
        res.status(501).json({
            message:"Unauthourised to update the answer"
        })
    }

}
