import { Box, makeStyles } from "@material-ui/core";
import { useState, useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Button } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";

const useStyles = makeStyles({

    header: {
        height: "35px",
        background: '#ededed',
        padding: "30px 16px",
        display: "flex",
        alignItems: "center",
    },
    imaclass: {
        height: "37px",
        width: "37px",
        borderRadius: "50%"
    },
    Icons: {
        marginLeft: "auto",
    },
    google:{
        boxShadow: 'none !important',
        backgroundColor: 'rgb(250, 221, 206) !important',
        color: 'rgb(26, 21, 21) !important'
    }

})

const Header = () => {

    const classes = useStyles();
    const clientID = "1032742189652-sodupvqpblrb8i8rcsu4f19ro5et1sg9.apps.googleusercontent.com";

    const { account,setAccount } = useContext(AccountContext);

    const onLogoutSuccess= ()=> {
        alert("You have been logged out successfully");
        console.clear();
        setAccount('');
    }

    return (
        <>
            <Box className={classes.header}>
                <img className={classes.imaclass} src={account.imageUrl} />
                <Box className={classes.Icons} >
                {/* <Button variant="contained" size="small" color="secondary" className={classes.margin}>LogOut</Button> */}
                <GoogleLogout
                className={classes.google}
                    clientId={clientID}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                    ></GoogleLogout>
            </Box>
            </Box>
            
        </>
    )
}

export default Header;