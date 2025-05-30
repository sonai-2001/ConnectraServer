require('dotenv').config()
const app= require('./app')
const connectDB= require('./config/db')
console.log("hi")
connectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("server is running on port 3001")
    })
})

