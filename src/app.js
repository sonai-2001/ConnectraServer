const express = require('express')
const cookieParser = require('cookie-parser')
const authRoute =require("./routes/auth.routes")

const app = express()

module.exports = app

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth",authRoute)


app.use("/",(req,res)=>{
       res.status(404).json({
        success:false,
        message:"Route not found"
       })
})