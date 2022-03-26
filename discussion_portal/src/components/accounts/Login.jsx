import { Dialog, withStyles,Box,Typography,makeStyles,List,ListItem } from "@material-ui/core";
import {GoogleLogin} from 'react-google-login';
import { useContext,useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import {GetBlocked} from "../service/api.js"

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

const getUsers = async (setUsers)=>{
    
    let val = await GetBlocked();
    // setBlockedUsers(data.data);
    // console.log("Hi",data.data);
    // console.log("Chiragh");
    setUsers(val.data)

}

const Login = ({classes}) =>{

    const [users,setUsers] = useState(null);
    getUsers(setUsers);

    users && users.map(user=>(
        console.log(user.email)
    ))

    
    
    const className = useStyles();
    const clientID = '1032742189652-sodupvqpblrb8i8rcsu4f19ro5et1sg9.apps.googleusercontent.com';

    const {account, setAccount,isAdmin,setIsAdmin} = useContext(AccountContext);

    const [isBlocked,setBlocked] = useState(false);
    let isBlock = false;

    // users && users.map(user=>(
    //     isBlock =  account.email===user.email?true:false
    // ))
    // for(var i=0;i<users.length;i++){
    //     if(users[i].email === account.email){
    //         isBlock = true;
    //         break;
    //     }
    // }
    // console.log(users);
    // users && users.map((user)=>(
    //     account.email==user.email?setBlocked(true):true
    // ));


    // This will called when google authentication is succesfully done
    const onLoginSuccess = async (res) =>{
        // Google provides us this res object which contains some data about us 
        // console.log("Login Succesful", res.profileObj);
        // setAccount(res.profileObj);
        // console.log(res.profileObj);

        const email = res.profileObj.email;
        const length  = parseInt(email.length);

        if(isBlock){
            alert("You are Blocked, Try to contact admin");
        }
        else if(email === "abhayjindal408@gmail.com"){
            setAccount(res.profileObj);
            setIsAdmin(true);
        }
        else if(length> 12 && email.slice(length-12,length) === "iitbbs.ac.in"){
            setAccount(res.profileObj);
            setIsAdmin(false);
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