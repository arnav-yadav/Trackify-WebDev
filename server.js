const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors");
const {connectDB}=require('./config/db.js')
const userRouter = require("./routes/userRoutes.js")
const taskRoute = require("./routes/taskRoutes.js")

dotenv.config()
connectDB(process.env.dbURL)

const app=express()
app.use(express.json())
app.use(cors())
app.use("/auth", userRouter)
app.use('/tasks',taskRoute)

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(3000,()=>{
    console.log('Listening on 3000')
})