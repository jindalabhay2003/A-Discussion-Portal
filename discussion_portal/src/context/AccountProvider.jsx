import { createContext, useState} from "react";


export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {

    const [account, setAccount] = useState();
    const [selectedPost, setselectedPost] = useState();
    const [isAdmin,setIsAdmin] = useState(false);

    return (
       < AccountContext.Provider
       value={{

        account,
        setAccount,
        selectedPost,
        setselectedPost,
        isAdmin,
        setIsAdmin
       }} >
           {children}
       </AccountContext.Provider>

    )
}

export default AccountProvider;