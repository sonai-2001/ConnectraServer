const { validateSignUp, validateSignIn } = require("../helper/validate")
const { registerUser, loginUser } = require("../services/auth.services")

const  signUp=async (req,res)=>{
        try {
             const data= req.body
             validateSignUp(data)
             
            await  registerUser(data)
         
         res.json({
             success:true,
             message:"User created successfully",
             data:data
         })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
}
const  signIn=async(req,res)=>{
        try {
             const data= req.body
         validateSignIn(data)
        const token= await loginUser(data)
        res.cookie("token",token)
        res.json({
            success:true,
            message:"User logged in successfully"
        })
          
        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
}

module.exports={
    signUp,
    signIn
}