import mongoose from "mongoose";

const newBlackSchema = new mongoose.Schema({

    email:{
        type: String
    }}

);

const BlockedUser = mongoose.model("BlockedUser",newBlackSchema);

export default BlockedUser;