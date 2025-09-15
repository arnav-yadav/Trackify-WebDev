const express=require("express")
const {createTask, getTasks, updateTask, deleteTask}=require('../controllers/taskController.js')
const taskRoute=express.Router()
const auth=require('../middleware/auth.js')

taskRoute.post('/', auth, createTask)
taskRoute.get('/', auth, getTasks)
taskRoute.patch('/:id', auth, updateTask)
taskRoute.delete('/:id', auth, deleteTask)

module.exports=taskRoute;