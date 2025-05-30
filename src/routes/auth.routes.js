const express =require('express')
const authRoute=express.Router()
const {signUp,signIn}=require("../controllers/auth.controller")





authRoute.post("/signUp",signUp)
authRoute.post("/signIn",signIn)

authRoute.post("/signIn",(req,res)=>{
    res.send("signup")
})

module.exports=authRoute