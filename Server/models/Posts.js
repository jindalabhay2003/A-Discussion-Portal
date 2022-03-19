import mongoose from "mongoose";

const newPostsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    }},
    {
        timestamps: true
    }

);

const Post = mongoose.model("post",newPostsSchema);

export default Post;