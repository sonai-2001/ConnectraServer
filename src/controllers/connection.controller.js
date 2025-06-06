const UserModel = require("../module/User")
const ConnectionModel = require("../module/Connection")
const { connectionRequestService, connectionAcceptService, connectionRejectservice, connectionWidthrawalService } = require("../services/connection.service")
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
   
//    logged in user is reciver
    try {
    const loggedInUserId=req.user.userId
   const connectionId=req.params.connectionId
   const updatedConnection=await connectionAcceptService(loggedInUserId,connectionId)
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
const connectionRejectController=async(req,res)=>{
    try {
        const loggedInUserId=req.user.userId
        const connectionId=req.params.connectionId
        const updatedConnection=await connectionRejectservice(loggedInUserId,connectionId)
        res.status(200).json({
            success:true,
            message:"Connection rejected successfully",
            data:updatedConnection
        })
    } catch (error) {
         res.status(400).json({
            success:false,
            message:error.message
         })
    }
    
 }
 const connectionWidhrawiController=async(req,res)=>{
      try {
        const loggedInUserId=req.user.userId
      const connectionId=req.params.connectionId 
      await connectionWidthrawalService(loggedInUserId,connectionId)
      res.status(200).json({
        success:true,
        message:"Connection widthrawal successfully"
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
    connectionAcceptController,
    connectionRejectController,
    connectionWidhrawiController
}