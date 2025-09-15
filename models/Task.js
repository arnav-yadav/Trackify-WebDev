const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ObjectId=Schema.ObjectId

const TaskSchema=new Schema({
  userId:{
    type: ObjectId,
    ref: "User",
    required: true
  },
  title:{
    type: String,
    required: true
  },
  description:{
    type: String
  },
  category:{
    type: String,
    required: true,
  },
  isDone:{
    type: Boolean,
    default: false,
  }
},{timestamps:true})

const TaskModel=mongoose.model("Task", TaskSchema)

module.exports=TaskModel