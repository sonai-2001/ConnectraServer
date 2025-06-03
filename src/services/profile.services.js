const UserModel= require("../module/User")
const getProfileService=async(id)=>{
      const user= await UserModel.find({_id:id})
      if(!user){
        throw new Error("User not found")
      }
      return user
}

const updateProfileService=async(id,data)=>{
         const updatedUser=await UserModel.findOneAndUpdate({_id:id},data,{new:true},{runValidators:true}).select("-password")
         if(!updatedUser){
            throw new Error("User not found")
         }
         return updatedUser
}


module.exports={
  getProfileService,
  updateProfileService
}