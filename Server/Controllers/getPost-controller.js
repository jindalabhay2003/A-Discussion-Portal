import Post from "../models/Posts.js";

export const getPosts = async (request,response) =>{

    try{

     const posts =  await Post.find({});

      response.status(200).json(posts);

    }
    catch(error){
        response.status(500).json(error);
    }
}