const { usersAllConnectionsService, userAllRequestsSendService, userAllRequestsGetService } = require("../services/users.service")

const userAllConnectionsController=async(req,res)=>{
       try {
        const userId=req.user.userId
          const allConnections=  await usersAllConnectionsService(userId)
          res.status(200).json({
            success:true,
            message:"All connections fetched successfully",
            data:allConnections
          })
            
       } catch (error) {
           res.status(400).json({
            success:false,
            message:error.message
           }    
        )
       }
}


const userAllRequestsSendController=async(req,res)=>{
    try {
     const userId=req.user.userId
     const allRequestsSend=await userAllRequestsSendService(userId)
     res.status(200).json({
        success:true,
        message:"All requests send fetched successfully",
        data:allRequestsSend
     })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}


const userAllRequestsGetController=async(req,res)=>{
     try {
         const userId=req.user.userId
         const allRquestGet=await userAllRequestsGetService(userId)
         res.status(200).json({
            success:true,
            message:"All requests get fetched successfully",
            data:allRquestGet
         })
     } catch (error) {
           res.status(400).json({
            success:false,
            message:error.message
           })
     }
}
module.exports={
    userAllConnectionsController,
    userAllRequestsSendController,
    userAllRequestsGetController
}