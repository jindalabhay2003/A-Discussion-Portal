import mongoose from "mongoose";

const Connection = async (username,password)=> {

    const URL = `mongodb+srv://${username}:${password}@cluster0.entzo.mongodb.net/Cluster0?retryWrites=true&w=majority`

    try{
       await mongoose.connect(URL , { useUnifiedTopology: true, useNewUrlParser: true });
       console.log("Database Connected SuccesFully");
    }catch(error){
        console.log("Error While Connecting to Mongo DB", error);
    }

}

export default Connection;