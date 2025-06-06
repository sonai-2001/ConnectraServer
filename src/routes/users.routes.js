const express=require('express')
const userAuth = require('../middleware/userAuth')
const {  userAllConnectionsController, userAllRequestsSendController, userAllRequestsGetController } = require('../controllers/users.controller')
const usersRoute=express.Router()
usersRoute.use(userAuth)

usersRoute.get("/connections",userAllConnectionsController)
usersRoute.get("/requests-send",userAllRequestsSendController)
usersRoute.get("/requests-get",userAllRequestsGetController)



module.exports=usersRoute