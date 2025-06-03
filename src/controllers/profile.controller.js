const { validateUpdateProfile } = require("../helper/validate")
const {  getProfileService, updateProfileService } = require("../services/profile.services")

const getProfileController=async(req,res)=>{
         const id=req.user.userId 
         try {
              const user= await getProfileService(id)
               res.json({
                    success:true,
                    message:"Profile data fetched successfully",
                    data:user
               })
         } catch (error) {
               res.status(400).json({
                    success:false,
                    message:error.message
               })
         }
         
}
const updateProfileController=async(req,res)=>{
       try {
          validateUpdateProfile(req.body)
           const id=req.user.userId
           const data=req.body
         const updatedUser= await  updateProfileService(id,data)
         res.status(200).json({
            success:true,
            message:"Profile updated successfully",
            data:updatedUser
         })

       } catch (error) {
           res.status(400).json({
            success:false,
            message:error.message
           })
       }
}


module.exports={
     getProfileController,
     updateProfileController
}