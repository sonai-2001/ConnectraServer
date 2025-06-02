const express=require('express')
const profileRoutes= express.Router()
const userAuth =require('../middleware/userAuth')
const { profileGet } = require('../controllers/profile.controller')

profileRoutes.get("/",userAuth,profileGet)
// profileRoutes.patch("/")

module.exports=profileRoutes