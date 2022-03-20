import Post from "../models/Posts.js";

export const newReply = async (request,response) =>{

    try{

        const data = request.body;

        const tosetData = {
            name: data.name,
            message: data.message
        }
      const postid = data.postid;

       await Post.findOneAndUpdate(
           {
               _id: postid
           }
           ,{
            $push: {replies: tosetData}
           });   

    }
    catch(error){
        response.status(500).json(error);
    }
}