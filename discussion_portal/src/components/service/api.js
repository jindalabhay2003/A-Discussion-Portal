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

export const setReply = async (data)=>{
    try{
        return await axios.post(`${URL}/setReply`,data);
    }
    catch(error){
        console.log(`Error While calling setReply Api `,error);
    }
}

export const getSelectedPost = async (data)=>{
    try{
        return await axios.post(`${URL}/getSelectedPost`,data);
    }
    catch(error){
        console.log(`Error While calling getSelectedPost Api `,error);
    }
}

export const addBlacklist = async(data)=>{
    try{
        return await axios.post(`${URL}/addBlacklist`,data);
    }
    catch(error){
        console.log(`Error While calling addBlacklist Api`,error);
    }
}

export const addBlocklist = async(data)=>{
    try{
        return await axios.post(`${URL}/addBlocklist`,data);
    }
    catch(error){
        console.log(`Error While calling addBlocklist Api`,error);
    }
}

export const GetBlocked  = async ()=>{
    try{
        return await axios.get(`${URL}/GetBlocked`);
    }
    catch(error){
        console.log(`Error While calling GetBlocked Api`,error);
    }
}

