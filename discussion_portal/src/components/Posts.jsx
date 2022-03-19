import { Box,makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    form: {
        height: '100vh',
        backgroundColor: "#CDCDCD"
    }
});

const Posts = ()=>{

    const classes = useStyles();

    return (
        <Box className={classes.form}>
            Hello
        </Box>
    )
}

export default Posts;