const UserModule = require("../module/User")
const bcrypt = require("bcrypt")
const jwt= require("jsonwebtoken")
const registerUser=async (data)=>{
        try {
            const existingUser=  await UserModule.findOne({email:data.email})
           if(existingUser){
            throw new Error("User already exists")
           }
           const hashedPassword= await bcrypt.hash(data.password,10)
            const user=new UserModule({
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:hashedPassword
        })
        await user.save()
        } catch (error) {
              throw new Error(error)
        }
}
       
const loginUser=async(data)=>{
     const user= await  UserModule.findOne({email:data.email})
     if(!user){
        throw new Error("Invalid Credential")
     }
     const passwordMatch=await bcrypt.compare(data.password,user.password)
     if(!passwordMatch){
        throw new Error("Invalid Credential")
     }

     const token=await jwt.sign({userId:user._id},process.env.jwt_secret)
     return token
     
     }   



module.exports={
    registerUser,
    loginUser
}