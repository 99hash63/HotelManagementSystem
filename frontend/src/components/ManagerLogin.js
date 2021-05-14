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
            <i class="fas fa-warehouse"></i>
            </div>
            <div className="ManagerLoginBox-b ManagerLoginBoxBTN"></div>
            <div className="ManagerLoginBox-c ManagerLoginBoxBTN"></div>
            <div className="ManagerLoginBox-d ManagerLoginBoxBTN"></div>
            <div className="ManagerLoginBox-e ManagerLoginBoxBTN"></div>
            <div className="ManagerLoginBox-f ManagerLoginBoxBTN"></div>
            <div className="ManagerLoginBox-g ManagerLoginBoxBTN"></div>
            <div className="ManagerLoginBox-h ManagerLoginBoxBTN"></div>
        </div>



       

    </div>);
}

export default ManagerLogin;