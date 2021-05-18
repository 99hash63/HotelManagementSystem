import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../context/AuthContext'
import "./CusUpdateAccount.css"
import './CusSideComponents.css'
import Hero from './subComponents/Hero'
import PageBottom from './PageBottom';



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
        <div>
             <Hero hero="behindHero">
        </Hero>

        <div className="cusSideComp" >
       {/* <div style={{background: "#ffffff",borderRadius: "20px"}} className = "myAcc"> */}
           <h1 style={{marginLeft: "170px", marginTop: "50px"}}>Are you sure?</h1><br/><br/>
           <button className="btn btn-block btn-outline-primary" style={{marginLeft: "70px", width: "40%"}} onClick={logout}>Log Out</button><br></br>
           <button className="btn btn-block btn-outline-primary" style={{marginLeft: "70px", width: "40%"}} onClick={() => { history.goBack();}}>Cancel</button><br/><br/><br/><br/>
       </div>

       </div>

<PageBottom/>
</div>
     );
}
 
export default Cuslogout;