import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn(){
        const loggedInRes = await axios.get("http://localhost:5000/customer/loggedIn");
        setLoggedIn(loggedInRes.data);
    }

    //Check wheter the component has started
    useEffect(() => {
        getLoggedIn();
    }, []);

    return ( 
        <AuthContext.Provider value={{loggedIn, getLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContext;
export {AuthContextProvider};