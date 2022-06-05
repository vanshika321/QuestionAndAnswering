const dotenv=require("dotenv")
const express =require("express")
const app=express()


dotenv.config({path:"./process.env"})
const DB=process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
)

mongoose.connect(DB,
    {
   
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true
    })
    .then(console.log("DB connection successfull"))
    .catch(err => console.log("the err is", err ));

    app.listen(5000,()=>{
        console.log("The server is")
    })