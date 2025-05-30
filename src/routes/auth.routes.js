const express =require('express')
const authRoute=express.Router()





authRoute.post("/signUp",(req,res)=>{
    res.send("signup")
})

authRoute.post("/signIn",(req,res)=>{
    res.send("signup")
})

module.exports=authRoute