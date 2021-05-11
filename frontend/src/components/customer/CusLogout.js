import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../context/AuthContext'
import "./CusUpdateAccount.css"


const Cuslogout = () => {
    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();



    async function logout(){
        await axios.get("http://localhost:5000/customer/logout");
        await getLoggedIn();
        history.push("/");
        
    }
    return ( 
       <div style={{background: "#ffffff",borderRadius: "20px"}} className = "myAcc">
           <h1 style={{marginLeft: "170px", marginTop: "50px"}}>Are you sure?</h1>
           <button style={{marginLeft: "50px"}} onClick={logout}>Log Out</button><br></br>
           <button style={{marginLeft: "50px"}} className="cancelbtn" onClick={() => { history.goBack();}}>Cancel</button>
       </div>
     );
}
 
export default Cuslogout;