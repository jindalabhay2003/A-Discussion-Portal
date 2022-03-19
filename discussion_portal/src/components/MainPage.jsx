import { Box } from "@material-ui/core";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

const MainPage = ()=>{

    const {account} = useContext(AccountContext);

    return(
        <p>{account.name}</p>
    )
}

export default MainPage;