import './App.css';
import Body from './components/body';
import Footer from './components/Footer';
import Header from './components/Header';
import CusHeader from './components/customer/CusHeader'
import axios from 'axios'
import {AuthContextProvider} from "./context/AuthContext"
import LoginButtonHeader from './components/customer/LoginButtonHeader'
import CusBody from './components/customer/CusBody';
import React, {useState} from 'react';


axios.defaults.withCredentials = true;

function App() {

  const [active, setActive] = useState("customer");

  return (
    <div>
     
      <AuthContextProvider>
        {active === "customer" && <CusHeader/>}
        {active === "customer" && <CusBody/>}
        {/* {active === "customer" &&  <LoginButtonHeader/>} */}
        {active === "employee" && <Header />}
        {active === "employee" && <Body />}
      
        <Footer />
        <button onClick={()=>setActive("employee")} style={ 
            {  position: "absolute", 
               marginLeft: "1216px", 
               marginTop: "221px",
               backgroundColor: 'rgb(15, 15, 15)',
               color: 'rgb(173, 173, 173)'
            }
            }>Click employee</button>
      </AuthContextProvider>
    </div>



  );
}

export default App;
