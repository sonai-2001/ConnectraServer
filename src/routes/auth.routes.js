const express =require('express')
const authRoute=express.Router()
const {signUp,signIn, logOut}=require("../controllers/auth.controller")
const userAuth = require('../middleware/userAuth')





authRoute.post("/signup",signUp)
authRoute.post("/signin",signIn)
authRoute.get("/logout",userAuth,logOut)


module.exports=authRoute