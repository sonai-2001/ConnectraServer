const { validateSignUp } = require("../helper/validate")
const { registerUser } = require("../services/auth.services")

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
const  signIn=(req,res)=>{
         console.log('hi')
         res.send("by")
}

module.exports={
    signUp,
    signIn
}