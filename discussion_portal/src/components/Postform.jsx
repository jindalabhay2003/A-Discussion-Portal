import { Box, makeStyles } from "@material-ui/core"
import { useState } from "react";
import { addPost } from "./service/api";

const useStyles = makeStyles({
    form: {
        height: '100vh',
    }
});

const Postsform = () => {

    const classes = useStyles();
    const [name, setName] = useState("");
    const [description,setDescription] = useState("");
    const [question,setQuestion] = useState("");

    const formSubmitHandler = async (event)=>{
        event.preventDefault();
        const data= {
            name: name,
            description: description,
            question: question
        }
        await addPost(data);
    }
    return (
        <Box className={classes.form}>
            <form onSubmit={formSubmitHandler} >
                <div className={'mb-3'}>
                    <label  className={'form-label'}>Name</label>
                    <input type="text" className={'form-control'} placeholder="Your Name" onChange={(e)=>{setName(e.target.value)}} />
                </div>
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