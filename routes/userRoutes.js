const express=require('express')
const{registerUser, getUsers, loginUser}=require('../controllers/userController.js')
const userRouter=express.Router()

userRouter.post('/register', registerUser)
userRouter.get('/users', getUsers)
userRouter.post('/login', loginUser)

module.exports=userRouter