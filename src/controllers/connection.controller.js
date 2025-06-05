const UserModel = require("../module/User")
const ConnectionModel = require("../module/Connection")
const { connectionRequestService, connectionAcceptService } = require("../services/connection.service")
const connectionSendController=async (req,res)=>{
    try {
    const loggedInUserId=req.user.userId
    const reciverId=req.params.reciverId
    

   const connection= await connectionRequestService(loggedInUserId,reciverId)

    res.json({
        success:true,
        message:"Connection send successfully",
        data:connection
    })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}


const connectionAcceptController=async(req,res)=>{
   try {
    const reciverId=req.user.userId
   const senderId=req.params.senderId
   const updatedConnection=await connectionAcceptService(senderId,reciverId)
   res.status(200).json({
    success:true,
    message:"Connection accepted successfully",
    data:updatedConnection
   })

   } catch (error) {
      res.status(400).json({
        success:false,
        message:error.message
      })
   }
   
}

module.exports={
    connectionSendController,
    connectionAcceptController
}