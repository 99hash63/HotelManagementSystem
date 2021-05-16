import './App.css';
import Body from './components/body';
import Footer from './components/Footer';
import Header from './components/Header';
<<<<<<< HEAD
import CusHeader from './components/cusHeader'

=======
import CusHeader from './components/customer/CusHeader'
import axios from 'axios'
import {AuthContextProvider} from "./context/AuthContext"
import LoginButtonHeader from './components/customer/LoginButtonHeader'
import CusBody from './components/customer/CusBody';
import React, {useState} from 'react';
>>>>>>> af5d08b8e1e062f40f5d24f18275ddf63ad0bf5b


axios.defaults.withCredentials = true;

function App() {

  const [active, setActive] = useState("customer");

  return (
    <div>
<<<<<<< HEAD
      <CusHeader></CusHeader> 
      
      {/* <Header /> */}
      <Body />
      <Footer />
=======
     
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
>>>>>>> af5d08b8e1e062f40f5d24f18275ddf63ad0bf5b
    </div>



  );
}

export default App;
