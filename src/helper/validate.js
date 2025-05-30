const validateSignUp=(signUpData)=>{
        const {first_name,last_name,email,password}=signUpData
        if(!first_name || !last_name || !email || !password){
            throw new Error("All fields are required")
        }
        const allowed=["first_name","last_name","email","password"]
        const allCameField=Object.keys(signUpData)
        const isValid=allCameField.every((field)=>allowed.includes(field))
        if(!isValid){
            throw new Error("Invalid Data")
        }
}


module.exports={
    validateSignUp
}