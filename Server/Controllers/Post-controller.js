import Post from "../models/Posts.js";

export const newPost = async (request,response) =>{

    try{

        const name = request.body.name;
        const description = request.body.description;
        const question = request.body.question;
        const email = request.body.email;
        console.log("Bacend",request.body);

        const newpost = new Post({
            name: name,
            description: description,
            question: question,
            Blacklist: false,
            Vote: 0,
            Blocked: false,
            email: email
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

export const createBlacklist = async (request,response)=>{
    try{

        const ide = request.body._id;
        const check = request.body.Blacklist;


        await Post.findOneAndUpdate({_id: ide},{Blacklist: !check});

    }
    catch(error){
        response.status(500).json(error);
    }
}

export const createBlocklist = async (request,response)=>{
    try{

        const ide = request.body._id;
        const check = request.body.Blocked;

        await Post.findOneAndUpdate({_id: ide},{Blocked: !check});

    }
    catch(error){
        response.status(500).json(error);
    }
}