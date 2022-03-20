import { createContext, useState} from "react";


export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {

    const [account, setAccount] = useState();
    const [selectedPost, setselectedPost] = useState();

    return (
       < AccountContext.Provider
       value={{

        account,
        setAccount,
        selectedPost,
        setselectedPost
       }} >
           {children}
       </AccountContext.Provider>

    )
}

export default AccountProvider;