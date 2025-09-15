const mongoose=require('mongoose');

async function connectDB(dbURL){
    try{
    await mongoose.connect(dbURL)
    console.log('DB connected')
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports=connectDB