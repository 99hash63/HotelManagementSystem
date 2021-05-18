import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../context/AuthContext'


const Cuslogout = () => {
    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function logout(){
        await axios.get("http://localhost:5000/customer/logout");
        await getLoggedIn();
        history.push("/");
        
    }
    return ( 
       <div>
           <button onClick={logout}>Log Out</button>
           <button>Cancel</button>
       </div>
     );
}
 
export default Cuslogout;