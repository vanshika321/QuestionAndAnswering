const { Router } = require("express")
const Questions= require("../model/questionModel")

exports.getAllQuestions=async(req,res)=>{
    try{
    const questions=await Questions.find().populate(
        {
            path:'answers',
            model:'Answer',
            select:'descrption'
        }
        .populate({
            path:'postedBy',
            model:'User',
            select:'name'

        })
    )
    res.status(200).json({
        status:"success",
        questions
    })
    }
    catch(err){
        res.status(401).json({
            message:err.message
        })
    }

}

exports.getAllQuestions=async(req,res)=>{
    try{
    const question=await Questions.findById(req.params.findById).populate(
        {
            path:'answers',
            model:'Answer',
            select:'descrption'
        }
        .populate({
            path:'postedBy',
            model:'User',
            select:'name'

        })
    )
        res.status(200).status({
            message:"success",
            question
        })
    }
    catch(err){
        res.status(401).json({
            
            message:"failed"
        })
    }

}

exports.postQuestion=async (req,res)=>{
    try{
        const Question= await Questions.save(req.body)
        res.status(201).json({
            message:"success",
            Question
        })
    }
    catch{
        res.status(400).json({
            message:"failed"
        }
        )
    }

    

}
exports.updateQuestion=async (req,res)=>{
    
    const quest=await Questions.findById(req.params.id)
    if(req.body.id!==quest.postedBy._id)
    {
        res.status(501).json({
            message:"Unauthourised",
            status:"failed"
        })
    }
    else{
        await Questions.findByIdAndUpdate(req.params.id)
    }
}

