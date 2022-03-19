import axios from "axios";

const  URL = "http://localhost:8000";

export const addPost = async (data)=>{
    try{

        return await axios.post(`${URL}/addPost`,data);

    }catch(error){

        console.log(`Error While calling addUser api `,error);

    }
}

export const getPosts = async ()=>{
    try{
        return await axios.get(`${URL}/getPostsArray`);
    }
    catch(error){
        console.log(`Error While calling getUsers Api`,error);
    }
}