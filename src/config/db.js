const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected")
    } catch (error) {
       throw new Error(error)
    }
}

module.exports=connectDB