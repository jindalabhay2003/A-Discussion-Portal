import mongoose from "mongoose";

const newPostsSchema = new mongoose.Schema({

    name: {
        type: String
    },
    description: {
        type: String
    },
    question: {
        type: String
    }},
    {
        timestamps: true
    }

);

const Post = mongoose.model("post",newPostsSchema);

export default Post;