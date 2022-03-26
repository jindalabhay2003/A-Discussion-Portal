import { Box, makeStyles } from "@material-ui/core";
import { useContext, useState } from "react";
import { AccountContext } from "../context/AccountProvider";
import React from 'react';

// components
import Panel from "./Panel";
import Postsform from "./Postform";
import QuestionCard from "./QuestionCard";
import { maxWidth } from "@material-ui/core";

const useStyles = makeStyles({

    container: {
        display: 'flex'
    },
    leftComponent: {
        width: '30%',
        height: '100vh'
    },
    rightComponent: {
        width: '70%',
        height: '100vh',
        borderLeft: '1px solid black'
    }

})


const MainPage = ()=>{

    const {account} = useContext(AccountContext);
    const [openform ,setOpenform] = useState(false);
    const [open,setopen] = useState(false);
    const classes = useStyles();

    return(
        <Box className={classes.container} >
            <Box className={classes.leftComponent} >
                <Panel open={open} setopen={setopen} setOpenform={setOpenform} />
            </Box>
            <Box className={classes.rightComponent} >
                {
                    openform?<Postsform open={open} setopen={setopen} setOpenform={setOpenform} />:<QuestionCard />
                }
            </Box>
        </Box>
    )
}

export default MainPage;