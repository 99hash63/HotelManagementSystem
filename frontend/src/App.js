import './App.css';
import Body from './components/body';
import Footer from './components/Footer';
import Header from './components/Header';
import CusHeader from './components/customer/CusHeader'
import ManagerLogin from './components/ManagerLogin';
import axios from 'axios'
import { AuthContextProvider } from "./context/AuthContext"
import LoginButtonHeader from './components/customer/LoginButtonHeader'
import CusBody from './components/customer/CusBody';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import frontOfficeComp from './components/bodyComponents/frontOfficeComp'
import inventoryComp from './components/bodyComponents/inventoryComp'


axios.defaults.withCredentials = true;

function App() {


  return (
    <div>

      {/* <AuthContextProvider>
        {active === "customer" && <CusHeader/>}
        {active === "customer" && <CusBody/>}
        {active === "customer" && <Footer/>}
        {active === "employee" && <ManagerLogin />}
        {active === "customer" &&
        <button onClick={()=>setActive("employee")} style={ 
            {  position: "absolute", 
               marginLeft: "1216px", 
               marginTop: "221px",
               backgroundColor: 'rgb(15, 15, 15)',
               color: 'rgb(173, 173, 173)'
            }
            }>Click employee</button>}
      </AuthContextProvider> */}

      <Router>
        <Switch>
       
          <Route exact path="/managerLogin" component={ManagerLogin} />
          <Route exact path="/front-office-manager" component={frontOfficeComp} />
          <Route exact path="/inventory-manager" component={inventoryComp} />
          
          <AuthContextProvider>
          <Route exact path="/" component={CusBody} />
          </AuthContextProvider>

        </Switch>
      </Router>



    </div>
  );
}

export default App;
