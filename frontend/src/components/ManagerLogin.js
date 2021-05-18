import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch,Link, Redirect } from 'react-router-dom'
import './ManagerLogin.css'
import './Header.css'



const ManagerLogin = () => {
    return (<div>
        
            <head>
                <title>Manager Login</title>
            </head>

        <div className="ManagerLoginBoxPAGE" id="ManagerLoginBoxPAGE">


        <div className="ManagerLoginBoxPAGE-title">
            <img src="/images/logo.png" alt="" />
            <span id="manager-login-text">Manager Login</span>
        </div>
        <div className="ManagerLoginBox">
            <Link to="/front-office-manager" className="ManagerLoginBox-a ManagerLoginBoxBTN"  >
                <i className="fas"><img src="https://img.icons8.com/color/144/000000/front-desk.png" /></i><br />
                <span id="manager-text">Front Office Manager</span>
            </Link>
            <Link to="/inventory-manager" className="ManagerLoginBox-b ManagerLoginBoxBTN">
                <i className="fas"><img src="https://img.icons8.com/color/144/000000/new-product--v1.png" /></i><br />
                <span id="manager-text">Inventory Manager</span>
            </Link>
            <Link to="/room-manager" className="ManagerLoginBox-c ManagerLoginBoxBTN">
                <i className="fas"><img src="https://img.icons8.com/color/144/000000/room.png" /></i><br />
                <span id="manager-text">Room Manager</span>
            </Link>
            <Link className="ManagerLoginBox-d ManagerLoginBoxBTN">
                <i className="fas"><img src="https://img.icons8.com/color/144/000000/food.png" /></i><br />
                <span id="manager-text">Food Manager</span>
            </Link>
            <Link to={"/emp-manager"} className="ManagerLoginBox-e ManagerLoginBoxBTN">
                <i className="fas"><img src="https://img.icons8.com/color/144/000000/commercial-development-management.png" /></i><br />
                <span id="manager-text">Employee Manager</span>
            </Link>
            <Link to="/" className="ManagerLoginBox-f ManagerLoginBoxBTN">
                <i className="fas"><img src="https://img.icons8.com/color/144/000000/home.png" /></i><br />
                <span id="manager-text">Home Page</span>
            </Link>
            <Link to="/bar-manager" className="ManagerLoginBox-g ManagerLoginBoxBTN">
                <i className="fas"><img src="https://img.icons8.com/color/144/000000/bar.png" /></i><br />
                <span id="manager-text">Bar Manager</span>
            </Link>
            <Link to="/hall-manager" className="ManagerLoginBox-h ManagerLoginBoxBTN">
                <i className="fas"><img src="https://img.icons8.com/color/144/000000/corridor.png" /></i><br />
                <span id="manager-text">Reception Hall Manager</span>
            </Link>
        </div>





    </div> 
    
    </div>);
    
}

export default ManagerLogin;