const Task=require('./models/Task.js')

const createTask = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (!title || !category) {
      return res
        .status(400)
        .json({ message: "title and category required" });
    }

    const task = new Task({
      userId: req.user.id, 
      title,
      description,
      category,
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getTasks=async (req, res)=>{
    try{
        const {category}=req.query;
        let filter={userId:req.user.id};
        if(category){
            filter.category=category;
        }

        const tasks=await Task.find(filter).populate("userId","name email");
        res.json(tasks);
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

const updateTask=async (req,res)=>{
    try{
        const {id}=req.params;
        const updates=req.body;

        const task=await Task.findByIdAndUpdate(id, updates, {new:true});
        if(!task) return res.status(404).json({message: "Task not found"});

        res.json(task);
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

const deleteTask=async (req, res)=>{
    try{
        const {id}=req.params;

        const task=await Task.findByIdAndDelete(id);
        if(!task) return res.status(404).json({message: "Task not found"});

        res.json({message: "Task deleted successfully!"});
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

module.exports={createTask, getTasks, updateTask, deleteTask}