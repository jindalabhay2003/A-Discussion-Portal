import axios from "axios";

const  URL = "http://localhost:8000";

export const addPost = async (data)=>{
    try{

        return await axios.post(`${URL}/addPost`,data);

    }catch(error){

        console.log(`Error While calling addUser api `,error);

    }
}