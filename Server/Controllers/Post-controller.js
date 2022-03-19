import Post from "../models/Posts.js";

export const newPost = async (request,response) =>{

    try{

        const name = request.body.data.name;
        const description = request.body.data.description;
        const question = request.body.data.question;

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