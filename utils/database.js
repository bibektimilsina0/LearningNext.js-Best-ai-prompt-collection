import mongoose from 'mongoose'

let isconneected=false;

const connectToDB=async()=>{
    mongoose.set('strictQuery',true)
    if(isconneected){
        console.log('mongodb is already connnected')
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isconneected=true;
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
    
}
export default connectToDB;