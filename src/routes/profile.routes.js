const express=require('express')
const profileRoutes= express.Router()
const userAuth =require('../middleware/userAuth')
const { getProfileController, updateProfileController } = require('../controllers/profile.controller')

profileRoutes.get("/",userAuth,getProfileController)
profileRoutes.patch("/",userAuth,updateProfileController)

module.exports=profileRoutes