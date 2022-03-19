import { Box, makeStyles, Card, Typography,Button } from "@material-ui/core";
import { useState, useContext } from "react";

const useStyles = makeStyles({
    container:{
        backgroundColor: '#dce9fa91',
        height: '100%'
    },
    Recent:{
        fontFamily: 'verdana',
        padding: '12px 12px',
        fontWeight: '500',
        color: 'black',
        fontSize: '18px'
    },
    card: {
        padding: '10px',
        margin: '10px 0px'
    }

})

const BlogPost = ()=>{
    const classes = useStyles();
    return (
        <Box className={classes.container} >
            <Box style={{width: '100%'}} >
                <Button style={{width: "100%"}} variant="contained" color="primary" >Create New Post</Button>
            </Box>
            <Box className={classes.Recent} >
                Recent Actions: 
            </Box>
            <Box>
                <Card className={classes.card} >
                    <Typography  >Dhananjay Singh</Typography>
                    <Typography variant="p" > How to Center a div tag </Typography>
                </Card>
            </Box>
            <Box>
                <Card className={classes.card} >
                    <Typography  >Dhananjay Singh</Typography>
                    <Typography variant="p" > How to Center a div..... </Typography>
                </Card>
            </Box>
        </Box>
    )
}

export default BlogPost;