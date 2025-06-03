const validateSignUp=(signUpData)=>{
    console.log(signUpData)
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

const validateSignIn=(data)=>{
     const {email,password}=data
     if(!email || !password){
        throw new Error("All fields are required")
     }
     const allowed=['email','password']

     const camedDataFields=Object.keys(data)
      const isValid=camedDataFields.every(field=>allowed.includes(field))
      if(!isValid){
        throw new Error("Invalid Data")
      }
}


const validateUpdateProfile=(data)=>{
    const allowed = [
        "profileImage",
        "bannerImage",
        "proffession",
        "address",
        "phone",
        "about",
        "website",
        "github",
        "linkedin",
        "isNewUser",
        "skills",
        "education",
        "experience"
      ];

      const camedDataFields=Object.keys(data)
      const isValid=camedDataFields.every(field=>allowed.includes(field))
      if(!isValid){
        throw new Error("Invalid Data")
      }
      
}




module.exports={
    validateSignUp,
    validateSignIn,
    validateUpdateProfile
}