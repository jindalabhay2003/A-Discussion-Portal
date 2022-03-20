import mongoose from "mongoose";

const newPostsSchema = new mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    Blocked: {
        type: Boolean
    },
    description: {
        type: String
    },
    question: {
        type: String
    },
    replies:{
        type: Array
    },
    Blacklist:{
        type: Boolean
    },
    Vote:{
        type: Number
    }},
    {
        timestamps: true
    }

);

const Post = mongoose.model("post",newPostsSchema);

export default Post;