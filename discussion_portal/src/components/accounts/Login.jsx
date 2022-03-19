import { Dialog, withStyles,Box,Typography,makeStyles,List,ListItem } from "@material-ui/core";
import {GoogleLogin} from 'react-google-login';
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
    Component: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    leftComponent: {
        padding: '56px 0px 56px 56px'
    },
    title: {
        fontSize: '26px',
        marginBottom: 25,
        fontWeight: 300,
        fontFamily: 'Arial, Helvetica, sans-serif'
    },
    GoogleLogin: {
        backgroundColor: 'red !important',
        color: 'white !important'
    }
})

//Making height and Width of dialog box large

const Style = {
    dialogpaper: {
        height: '55%',
        width: '65%',
        marginTop: '1%',
        boxShadow: 'none',
        borderRadius: '34px',
        maxHeight: '100%',
        maxWidth: '100%'
    }
}


const Login = ({classes}) =>{

    const className = useStyles();
    const clientID = '1032742189652-sodupvqpblrb8i8rcsu4f19ro5et1sg9.apps.googleusercontent.com';

    const {account, setAccount} = useContext(AccountContext);

    // This will called when google authentication is succesfully done
    const onLoginSuccess = async (res) =>{
        // Google provides us this res object which contains some data about us 
        // console.log("Login Succesful", res.profileObj);
        // setAccount(res.profileObj);
        console.log(res.profileObj);

        const email = res.profileObj.email;
        const length  = parseInt(email.length);
        if(length> 12 && email.slice(length-12,length) === "iitbbs.ac.in"){
            setAccount(res.profileObj);
        }
        else{
            alert("Please Log in with your IITBBS email Id");
        }

    }

    const onLoginFailure = () => {
        console.log("Login Failure");
    }

    return(
        <Dialog
        open={true}
        // we are adding our css(dialogpaper) in paper class of material UI(identified by dev tools)
        classes={{ paper: classes.dialogpaper}}
        BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
          <Box className={className.Component}>
              <Box className={className.leftComponent}>
                  <Typography className={className.title}>Sign in With Your IITBBS Email Id: </Typography>
                  <GoogleLogin
                buttonText="Click here to Sign in with IITBBS Email ID"         
                clientId= {clientID}
                isSignedIn={true}
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}
                className={className.GoogleLogin}
                ></GoogleLogin>
                 
              </Box>
          </Box>
        </Dialog>
    )
}

// we have to cover our Login page for applying our own css Style
export default withStyles(Style)(Login);