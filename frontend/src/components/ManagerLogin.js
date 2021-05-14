import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import './ManagerLogin.css'

const ManagerLogin = () => {


    return (<div className="ManagerLoginBoxPAGE">

        <div className="ManagerLoginBoxPAGE-title">
        <img src="/images/logo.png" alt="" />
        <span id="manager-login-text">Manager Login</span>
        </div>
    
        <div className="ManagerLoginBox">
            <a href="/inventory-manager" className="ManagerLoginBox-a ManagerLoginBoxBTN">
            
            <i className="fas"><img src="https://img.icons8.com/color/144/000000/front-desk.png"/></i><br />
            <span  id="manager-text">Front Office Manager</span>
            </a>
            <div className="ManagerLoginBox-b ManagerLoginBoxBTN">
            <i className="fas"><img src="https://img.icons8.com/color/144/000000/new-product--v1.png"/></i><br />
            <span  id="manager-text">Inventory Manager</span>
            </div>
            <div className="ManagerLoginBox-c ManagerLoginBoxBTN">
            <i className="fas"><img src="https://img.icons8.com/color/144/000000/room.png"/></i><br />
            <span  id="manager-text">Room Manager</span>
            </div>
            <div className="ManagerLoginBox-d ManagerLoginBoxBTN">
            <i className="fas"><img src="https://img.icons8.com/color/144/000000/food.png"/></i><br />
            <span  id="manager-text">Food Manager</span>
            </div>
            <div className="ManagerLoginBox-e ManagerLoginBoxBTN">
            <i className="fas"><img src="https://img.icons8.com/color/144/000000/commercial-development-management.png"/></i><br />
            <span  id="manager-text">Employee Manager</span>
            </div>
            <div className="ManagerLoginBox-f ManagerLoginBoxBTN">
            <i className="fas"><img src="https://img.icons8.com/color/144/000000/home.png"/></i><br />
            <span  id="manager-text">Home Page</span>
            </div>
            <div className="ManagerLoginBox-g ManagerLoginBoxBTN">
            <i className="fas"><img src="https://img.icons8.com/color/144/000000/bar.png"/></i><br />
            <span  id="manager-text">Bar Manager</span>
            </div>
            <div className="ManagerLoginBox-h ManagerLoginBoxBTN">
            <i className="fas"><img src="https://img.icons8.com/color/144/000000/corridor.png"/></i><br />
            <span  id="manager-text">Reception Hall Manager</span>
            </div>
        </div>



       

    </div>);
}

export default ManagerLogin;