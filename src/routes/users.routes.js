const express=require('express')
const userAuth = require('../middleware/userAuth')
const {  userAllConnectionsController, userAllRequestsSendController, userAllRequestsGetController, useAllSuggetionsController } = require('../controllers/users.controller')
const usersRoute=express.Router()
usersRoute.use(userAuth)

usersRoute.get("/connections",userAllConnectionsController)
usersRoute.get("/requests-send",userAllRequestsSendController)
usersRoute.get("/requests-get",userAllRequestsGetController)
usersRoute.get("/suggetions",useAllSuggetionsController)




module.exports=usersRoute