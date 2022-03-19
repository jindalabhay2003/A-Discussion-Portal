import { Box, makeStyles, Card, Typography,Button } from "@material-ui/core";
import { textAlign } from "@mui/system";
import { useState, useContext } from "react";

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

const BlogPost = ()=>{
    const classes = useStyles();
    return (
        <Box className={classes.container} >
            <Box style={{width: '100%'}} >
                <Button style={{width: "90%",margin:"5% 5% 0 5% "}} variant="contained" color="primary" >Create New Post</Button>
            </Box>
            <Box className={classes.Recent} >
               <h4>Timeline</h4>  
            </Box>
            <Box>
                <Card className={classes.card} >
                    <Typography style={{fontWeight:"700"}}>Dhananjay Singh</Typography>
                    <Typography variant="p"> How to Center a div tag </Typography>
                    <Button variant="contained" color="primary" className={classes.button}>Enter Discussion</Button>
                </Card>
            </Box>
            <Box>
                <Card className={classes.card} >
                    <Typography style={{fontWeight:"700"}}>Dhananjay Singh</Typography>
                    <Typography variant="p" > How to Center a div..... </Typography>
                    <Button variant="contained" color="primary" className={classes.button}>Enter Discussion</Button>
                </Card>
            </Box>
        </Box>
    )
}

export default BlogPost;