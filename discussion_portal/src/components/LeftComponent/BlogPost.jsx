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

const BlogPost = ({open,setopen,setOpenform})=>{

    const [postArray, setpostArray] = useState([]);
    const classes = useStyles();
    const {selectedPost,setselectedPost,isAdmin} = useContext(AccountContext);

    useEffect(()=>{

        const getPostsArray = async ()=>{
            const val = await getPosts();
            setpostArray(val.data);
        }
        getPostsArray();

    },[open]);

    const newdiscussionClickHandler = (event,post)=>{
        event.preventDefault();
        setOpenform(false);
        console.log("Hi",post);
        setselectedPost(post);
    }

    
    var result = Object.keys(postArray).map((key) => [postArray[key]]);

    var result2 = [];
    result.forEach(item =>{
        result2.push(item[0]);
        var date  = new Date(item[0].updatedAt);
        console.log(date.getTime());
    });

    // Bubble sort = O(N*2)
    for(var i=0;i<result2.length;i++){
        for(var j= i+1;j<result2.length;j++){
            var a = new Date(result2[i].updatedAt);
            a = a.getTime();
            var b = new Date(result2[j].updatedAt);
            b = b.getTime();

            if(b>a){
                [result2[i],result2[j]] = [result2[j],result2[i]];
            }
        }
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
                    result2 && result2.map((post)=>(
                     post.Blacklist&&!isAdmin?<></>:   
                    <Card className={classes.card} >
                    <Typography style={{fontWeight:"700"}}>{post.name}</Typography>
                    <Typography variant="p"> {post.description} </Typography>
                    <Button variant="contained" color="primary" className={classes.button} onClick={(e)=>{e.preventDefault();setselectedPost(post);setOpenform(false)}} >Enter Discussion</Button>
                    {isAdmin?<Button variant="contained" color="primary" className={classes.button} onClick={async(e)=>{e.preventDefault(); await addBlacklist(post)}} >{post.Blacklist?"Whitelist":"Blacklist"}</Button>:null}
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