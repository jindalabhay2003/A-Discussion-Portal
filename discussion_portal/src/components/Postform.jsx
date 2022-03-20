import { Box, makeStyles, Typography } from "@material-ui/core"
import { useState,useContext } from "react";
import { addPost } from "./service/api.js";
import { AccountContext } from "../context/AccountProvider.jsx";

const useStyles = makeStyles({
    form: {
        height: '100vh',
        padding:"10px",
    }
});

const Postsform =  ({setOpenform}) => {

    const classes = useStyles();
    const [name, setName] = useState("");
    const [description,setDescription] = useState("");
    const [question,setQuestion] = useState("");
    const {account} = useContext(AccountContext);

    const formSubmitHandler = async (event)=>{
        event.preventDefault();
        const data= {
            name: account.name,
            description: description,
            question: question,
            email: account.email
        }
        console.log(data);
        await addPost(data);
        alert("Your Question has been successfully added");
        setOpenform(false);
    }
    return (
        <Box className={classes.form}>
            <form onSubmit={formSubmitHandler} >
                <Typography variant="h4" align="center">Post your doubt</Typography>
                {/* <div className={'mb-3'}>
                    <label  className={'form-label'}>Name</label>
                    <input type="text" className={'form-control'} placeholder="Your Name" onChange={(e)=>{setName(e.target.value)}} />
                </div> */}
                <div className={'mb-3'}>
                    <label className={'form-label'}>Description</label>
                    <input type="text" className={'form-control'} required placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}} />
                </div>
                <div className={'mb-3'}>
                    <label className={'form-label'}>Your Question</label>
                    <textarea rows="6" type="text" className={'form-control'} required placeholder="Question" onChange={(e)=>{setQuestion(e.target.value)}}/>
                </div>
                <button type="submit" className={"btn btn-primary"}>Submit</button>
            </form>
        </Box>
    )
}

export default Postsform;