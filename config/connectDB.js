//1 require mongoose
const mongoose = require ("mongoose")



//2 connect DB
const connectDB=async()=>{
    try{
        // first step
        mongoose.set("strictQuery",false);
        await mongoose.connect(process.env.DB_URI,{useNewUrlParser : true});
        //second step
        console.log("DATABASE CONNECTED")
    }catch(error){
        console.loge ("DATABASE IS NOT CONNECTED, error",error)
    }
}
 module.exports = connectDB