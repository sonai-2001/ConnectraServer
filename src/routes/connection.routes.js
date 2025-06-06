const express=require('express')
const { connectionSendController, connectionAcceptController, connectionRejectController, connectionWidhrawiController } = require('../controllers/connection.controller')
const userAuth = require('../middleware/userAuth')
const connectionRoute=express.Router()

connectionRoute.use(userAuth)
connectionRoute.post("/send/:reciverId",connectionSendController)
connectionRoute.post("/accepted/:connectionId",connectionAcceptController)
connectionRoute.post("/rejected/:connectionId",connectionRejectController)
connectionRoute.post("/withdrawl/:connectionId",connectionWidhrawiController)




module.exports=connectionRoute
