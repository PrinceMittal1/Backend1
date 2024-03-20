import mongoose from 'mongoose';
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("mongo db connect ")

    }catch(e){
        console.log("new error is ",e)
        process.exit(1);
    }
}

export default connectDB;