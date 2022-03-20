import Post from "../models/Posts.js";

export const newPost = async (request,response) =>{

    try{

        const name = request.body.name;
        const description = request.body.description;
        const question = request.body.question;

        const newpost = new Post({
            name: name,
            description: description,
            question: question
        });

    await newpost.save();
    response.status(200).json("post has been saved succesfully");

    }
    catch(error){
        response.status(500).json(error);
    }
}

export const newSelectedPost = async (request,response)=>{

    try{
        const id  = request.body;

        const post =  await Post.findOne({_id: id});

        response.status(200).json(post);
    }
    catch(error){
        response.status(500).json(error);
    }
}