import { Box, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import React from 'react';

// components
import Panel from "./Panel";
import Posts from "./Posts";

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
    const classes = useStyles();

    return(
        <Box className={classes.container} >
            <Box className={classes.leftComponent} >
                <Panel />
            </Box>
            <Box className={classes.rightComponent} >
                <Posts />
            </Box>
        </Box>
    )
}

export default MainPage;