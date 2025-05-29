// console.log("hello")
const express= require('express') 
const cookieParser= require('cookie-parser')

const app= express();
// for  read the req body
app.use(express.json())
// it is for read the cookie from the request other wiese req object is nothing to work with
app.use(cookieParser())


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})