const UserModule = require("../module/User")
const registerUser=async (data)=>{
        try {
            const user=new UserModule({
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password
        })
        await user.save()
        } catch (error) {
              throw new Error(error)
        }
}


module.exports={
    registerUser
}