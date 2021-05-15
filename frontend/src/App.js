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


axios.defaults.withCredentials = true;

function App() {


  return (
    <div>

      <AuthContextProvider>
        <Router>
          <Switch>

            <Route exact path="/" component={CusBody} />
            <Route exact path="/managerLogin" component={ManagerLogin} />
            <Route exact path="/front-office-manager" component={frontOfficeComp} />
            <Route exact path="/inventory-manager" component={inventoryComp} />
            <Route exact path="/404" component={Page404} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </AuthContextProvider>



    </div>
  );
}

export default App;
