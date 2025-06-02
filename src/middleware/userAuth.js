const jwt= require('jsonwebtoken')
const userAuth=(req,res,next)=>{
       const token = req.cookies.token
       if(!token){
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        })
       }
      try{
           const decoded=jwt.verify(token,process.env.jwt_secret)
           req.user=decoded
           next()
      }
      catch(err){
           res.status(401).json({
            success:false,
            message:'Unauthorized: Invalid token'
           })
      }      
       


       

}


module.exports=userAuth