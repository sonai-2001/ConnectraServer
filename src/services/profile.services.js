const UserModel= require("../module/User")
const getProfileData=async(id)=>{
      const user= await UserModel.find({_id:id})
      if(!user){
        throw new Error("User not found")
      }
      return user
}


module.exports={
    getProfileData
}