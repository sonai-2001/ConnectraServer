const { getProfileData } = require("../services/profile.services")

const profileGet=async(req,res)=>{
         const id=req.user.userId 
         try {
              const user= await getProfileData(id)
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


module.exports={
    profileGet
}