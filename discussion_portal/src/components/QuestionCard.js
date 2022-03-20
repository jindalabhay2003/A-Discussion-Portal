import {
  Box,
  Card,
  makeStyles,
  Typography,
  Button,
  Input,
} from "@material-ui/core";
import React, { useState } from "react";

import { useContext,useEffect } from "react";
import { AccountContext } from "../context/AccountProvider";
import { setReply } from "./service/api";
import { getPosts } from "./service/api";
import { getSelectedPost } from "./service/api";

const usestyles = makeStyles({
  card: {
    margin: "10px",
    padding: "10px",
    border: "1px solid black",
  },
  button: {
    marginRight: "10px",
  },
});

const QuestionCard = (props) => {

  const {account,selectedPost,setselectedPost} = useContext(AccountContext);
  const [userReply,setUserReply] = useState("");
  const [isreply,setIsreply] = useState(true);
  const [reps,setreps] = useState([]);
  
  

  const replyButtonClick =  (event)=>{
    event.preventDefault();
    const data = {
      postid: selectedPost._id,
      name: account.name,
      message: userReply
    }
    let temp = {
      name: account.name,
      message: userReply
    }
    console.log(temp);
    setReply(data);


    selectedPost.replies.push(temp);
    console.log(selectedPost.replies);

    setIsreply(!isreply);
    
      
  }

  useEffect(()=>{ 

  },[isreply]);


  const classes = usestyles();
  return (
    <Box>
      {
       selectedPost && <Card className={classes.card} elevation={0}>
        <Typography variant="h5" color="primary">
          {/* Description of Question */}{selectedPost.description}
        </Typography>
        <Typography variant="h6">{"By " + selectedPost.name}</Typography>
        <Typography variant="p">
          {selectedPost.question}
        </Typography>
        <Card
          className={classes.card}
          style={{ display: "flex", alignItems: "center" }}
          elevation={0}
        >
          <Button variant="contained" className={classes.button}>
            Upvote
          </Button>
          <Button variant="contained" className={classes.button}>
            Downvote
          </Button>
          <form>
          <input
            type="text"
            placeholder="Reply..."
            style={{ width: "50%" }}
            disableUnderline
            multiline
            fullWidth
            onChange={(e)=>{e.preventDefault();setUserReply(e.target.value)}}
          />
          <Button onClick={replyButtonClick} type="submit" variant="contained" style={{marginLeft:'10px'}} className={classes.button}>
            Send
          </Button>
          
          </form>
        </Card>
        <Card
          className={classes.card}
          style={{ maxHeight: "300px", overflow: "scroll" }}
          elevation={0}
        >
            {selectedPost.replies.map((reply)=>(
              <Box>
             <Typography variant="h6" color="primary">
              Reply By {reply.name}
            </Typography>
            <Typography variant="p">
              {reply.message}
            </Typography>
            </Box>
            ))
            }
            {/* <Box>
            <Typography variant="h6" color="primary">
              Reply by Chirag Jindal
            </Typography>
            <Typography variant="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only
            </Typography>
          </Box> */}
          {/* <Box>
            <Typography variant="h6" color="primary">
              Reply by Chirag Jindal
            </Typography>
            <Typography variant="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="primary">
              Reply by Chirag Jindal
            </Typography>
            <Typography variant="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="primary">
              Reply by Chirag Jindal
            </Typography>
            <Typography variant="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only
            </Typography>
          </Box> */}
        </Card>
      
      </Card>
      }
    </Box>
  );
};

export default QuestionCard;
