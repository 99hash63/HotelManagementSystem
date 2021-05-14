import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import './ManagerLogin.css'

const ManagerLogin = () => {


    return (<div className="ManagerLoginBoxPAGE">

        <div className="ManagerLoginBoxPAGE-title">
        <img src="/images/logo.png" alt="" />
        <span id="manager-login-text">Manager Login</span>
        </div>
    
        <div className="ManagerLoginBox">
            <div className="ManagerLoginBox-a ManagerLoginBoxBTN">
            <i className="fas fa-warehouse"></i><br />
            <span  id="manager-text">Inventory Manager</span>
            </div>
            <div className="ManagerLoginBox-b ManagerLoginBoxBTN">
            <i className="fas fa-warehouse"></i><br />
            <span  id="manager-text">Inventory Manager</span>
            </div>
            <div className="ManagerLoginBox-c ManagerLoginBoxBTN">
            <i className="fas fa-warehouse"></i><br />
            <span  id="manager-text">Inventory Manager</span>
            </div>
            <div className="ManagerLoginBox-d ManagerLoginBoxBTN">
            <i className="fas fa-warehouse"></i><br />
            <span  id="manager-text">Inventory Manager</span>
            </div>
            <div className="ManagerLoginBox-e ManagerLoginBoxBTN">
            <i className="fas fa-warehouse"></i><br />
            <span  id="manager-text">Inventory Manager</span>
            </div>
            <div className="ManagerLoginBox-f ManagerLoginBoxBTN">
            <i className="fas fa-warehouse"></i><br />
            <span  id="manager-text">Inventory Manager</span>
            </div>
            <div className="ManagerLoginBox-g ManagerLoginBoxBTN">
            <i className="fas fa-warehouse"></i><br />
            <span  id="manager-text">Inventory Manager</span>
            </div>
            <div className="ManagerLoginBox-h ManagerLoginBoxBTN">
            <i className="fas fa-warehouse"></i><br />
            <span  id="manager-text">Inventory Manager</span>
            </div>
        </div>



       

    </div>);
}

export default ManagerLogin;