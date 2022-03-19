import { Box, makeStyles, Card, Typography,Button } from "@material-ui/core";
import { textAlign } from "@material-ui/core";
import { useState, useEffect ,useContext } from "react";
import { getPosts } from "../service/api";

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
    }

})

const BlogPost = ({setOpenform})=>{

    const [postArray, setpostArray] = useState([]);
    const classes = useStyles();

    useEffect(()=>{

        const getPostsArray = async ()=>{
            const val = await getPosts();
            setpostArray(val.data);
        }
        getPostsArray();

    },[]);

    return (
        <Box className={classes.container} >
            <Box style={{width: '100%'}} >
                <Button style={{width: "90%",margin:"5%"}} variant="contained" color="primary" onClick={()=>{setOpenform(true)}} >Create New Post</Button>
            </Box>
            <Box className={classes.Recent} >
               <h4>Timeline</h4>  
            </Box>
            <Box>
                {
                    postArray && postArray.map((post)=>(
                    <Card className={classes.card} >
                    <Typography style={{fontWeight:"700"}}>{post.name}</Typography>
                    <Typography variant="p"> {post.description} </Typography>
                    <Button variant="contained" color="primary" className={classes.button}>Enter Discussion</Button>
                   </Card>
                    ))
                }
            </Box>
        </Box>
    )
}

export default BlogPost;