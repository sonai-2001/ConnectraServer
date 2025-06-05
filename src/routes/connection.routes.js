const express=require('express')
const { connectionSendController, connectionAcceptController } = require('../controllers/connection.controller')
const userAuth = require('../middleware/userAuth')
const connectionRoute=express.Router()

connectionRoute.use(userAuth)
connectionRoute.post("/send/:reciverId",connectionSendController)
connectionRoute.post("/accepted/:senderId",connectionAcceptController)


module.exports=connectionRoute
