const questionContoller=require("../controller/questionController")
const express = require("express")

const router= express.Router()

router.
route("/")
.get(questionContoller.getAllQuestions)
.post(questionContoller.postQuestion)
.update(questionContoller.updateQuestion)
