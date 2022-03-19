import {AppBar,Toolbar, makeStyles,Box} from '@material-ui/core'
import React, {useContext} from 'react';
import { AccountContext } from '../context/AccountProvider';

// Components
import Login from './accounts/Login'
import MainPage from './MainPage';

const useStyles = makeStyles({
    container: {
        backgroundImage: `linear-gradient(to right top, #cb8bb5, #f88595, #ff925e, #e3b31f, #91d61f)`,
        height: '100vh',
        padding: '10px',
        margin: 0
    },
    loginHeader : {
        height: 200,
        background: '#00bfa5',
        boxShadow: 'none'
    },
    Header : {
        height: 115,
        background: '#128C7E',
        boxShadow: 'none'
    }
})

const Blogs = () => {

    const classes = useStyles();
    const {account} = useContext(AccountContext);

    return (
        <Box>
            {
                account?<MainPage />:
           
        <Box className={classes.container}>
        <Login />
        </Box>
        }
        </Box>

    )
}

export default Blogs;