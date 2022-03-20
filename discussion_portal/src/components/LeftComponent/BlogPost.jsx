import { Box, makeStyles, Card, Typography,Button } from "@material-ui/core";
import { textAlign } from "@material-ui/core";
import { useState, useEffect ,useContext } from "react";
import { getPosts,addBlacklist,addBlocklist } from "../service/api";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
    container:{
        backgroundColor: '#dce9fa91',
        height: '100%'
    },
    Recent:{
        fontFamily: 'verdana',
        padding: '0 12px',
        fontWeight: '500',
        color: 'black',
        fontSize: '18px',
        textAlign:"center"
    },
    card: {
        padding: '10px',
        margin: '10px 10px',
        display: "flex",
        flexDirection:"column"
    },
    button: {
        margin: "10px"
    },
    block:{
        maxHeight: '500px',
        overflow: 'scroll'
    }

})

const BlogPost = ({setOpenform})=>{

    const [postArray, setpostArray] = useState([]);
    const classes = useStyles();
    const {selectedPost,setselectedPost,isAdmin} = useContext(AccountContext);

    useEffect(()=>{

        const getPostsArray = async ()=>{
            const val = await getPosts();
            setpostArray(val.data);
        }
        getPostsArray();

    },[]);

    const newdiscussionClickHandler = (event,post)=>{
        event.preventDefault();
        setOpenform(false);
        console.log("Hi",post);
        setselectedPost(post);
    }

    return (
        <Box className={classes.container} >
            <Box style={{width: '100%'}} >
                <Button style={{width: "90%",margin:"5%"}} variant="contained" color="primary" onClick={()=>{setOpenform(true)}} >Create New Post</Button>
            </Box>
            <Box className={classes.Recent} >
               <h4>Timeline</h4>  
            </Box>
            <Box className={classes.block} >
                {
                    postArray && postArray.map((post)=>(
                     post.Blacklist&&!isAdmin?null:   
                    <Card className={classes.card} >
                    <Typography style={{fontWeight:"700"}}>{post.name}</Typography>
                    <Typography variant="p"> {post.description} </Typography>
                    <Button variant="contained" color="primary" className={classes.button} onClick={(e)=>{e.preventDefault();setselectedPost(post);setOpenform(false)}} >Enter Discussion</Button>
                    {isAdmin?<Button variant="contained" color="primary" className={classes.button} onClick={async(e)=>{e.preventDefault(); await addBlacklist(post);}
                    } >{post.Blacklist?"Whitelist":"Blacklist"}</Button>:null}
                    {isAdmin?<Button variant="contained" color="primary" className={classes.button} onClick={async(e)=>{e.preventDefault(); await addBlocklist(post);}
                    } >{post.Blocked?"UnBlock":"Block"}</Button>:null}
                   </Card>
                    
                    ))
                }
            </Box>
        </Box>
    )
}

export default BlogPost;