const express = require('express')
const cookieParser = require('cookie-parser')
const authRoute =require("./routes/auth.routes")
const profileRoute =require("./routes/profile.routes")
const connectionRoute = require('./routes/connection.routes')
const usersRoute = require('./routes/users.routes')


const app = express()

module.exports = app

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth",authRoute)
app.use("/api/profile",profileRoute)
app.use("/api/connection",connectionRoute)
app.use("/api/users",usersRoute)


app.use("/",(req,res)=>{
       res.status(404).json({
        success:false,
        message:"Route not found"
       })
})