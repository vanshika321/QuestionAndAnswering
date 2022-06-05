const User=require("../model/userModel")
const jwt=require("jwt")

exports.Signup=async(req,res)=>{
    try{
        const user=await User.create(req.body)
        jwt.sign(user._id)

    }
    catch(err){
        
    }
}

exports.login=(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email ||!password)
            res.status(401).json({
                message:"Email or password was not entered"
            })
        const user= User.findOne(email)
        if(!user){
            res.status(401).json({
                message:"Email or password was not entered"
            })
        }
    }
}