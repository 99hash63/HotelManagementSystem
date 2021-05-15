import './App.css';
import ManagerLogin from './components/ManagerLogin';
import axios from 'axios'
import CusBody from './components/customer/CusBody';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import frontOfficeComp from './components/bodyComponents/frontOfficeComp'
import inventoryComp from './components/bodyComponents/inventoryComp'
import Page404 from './components/404';
import { AuthContextProvider } from './context/AuthContext';


import DisplayInventory from './components/DisplayInventory';
import Suppliers from './components/Suppliers';
import SuppliersView from './components/SupplierView';
import ReStock from './components/ReStock';
import InventoryCheckout from './components/InventoryCheckout';
import AddInventory from './components/AddInventory';
import InventoryList from './components/InventoryList';


axios.defaults.withCredentials = true;

function App() {


  return (
    <div>
<<<<<<< HEAD
      {/* <CusHeader></CusHeader>  */}
      <Header />
      <Body />
      <Footer />
     
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
=======
>>>>>>> ManagerLogin

        <Router>
          <Switch>
         
            <Route exact path="/managerLogin" component={ManagerLogin} />
            <Route  path="/front-office-manager" component={frontOfficeComp} />
            <Route  path="/inventory-manager" component={inventoryComp} />
            <Route exact path="/404" component={Page404} />

          
            <AuthContextProvider >
            <Route path="/" component={CusBody} />
            </AuthContextProvider>

            <Redirect to="/404" />
         
          </Switch>
        </Router>
 



    </div>
  );
}

export default App;
