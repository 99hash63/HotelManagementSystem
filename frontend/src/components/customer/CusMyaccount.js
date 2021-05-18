import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import jspdf from 'jspdf'
import "jspdf-autotable"
import './CusMyaccount.css'


const MyAccount = () => {
    const [myAccount, setMyAccount] = useState([]);
    // const [fname, setFname] = useState("");
    // const [lname, setLname] = useState("");
    // const [address, setAddress] = useState("");
    // const [NIC, setNIC] = useState("");
    // const [nationality, setNationality] = useState("");
    // const [passportNo, setPassportNo] = useState("");
    // const [email, setEmail] = useState("");
    // const [contact, setContact] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordVerify, setPasswordVerify] = useState("");

    async function getMyAccount(){
        const myAccountRes = await axios.get("http://localhost:5000/customer/get");
        
        setMyAccount(myAccountRes.data);
        // setFname(myAccountRes.data.fname);
        // setLname(myAccountRes.data.lname);
        // setAddress(myAccountRes.data.address);
        // setNIC(myAccountRes.data.NIC);
        // setNationality(myAccountRes.data.nationality);
        // setPassportNo(myAccountRes.data.passportNo);
        // setEmail(myAccountRes.data.email);
        // setContact(myAccountRes.data.contact);
        // setPassword(myAccountRes.data.password);
        // setPasswordVerify(myAccountRes.data.passwordVerify);
    }
    useEffect(() => {
        getMyAccount();
        
    }, []);

    function renderAccount(){
        return myAccount.map((myAccount) => {
            return (
                <div >
                    <h3>First Name  : {myAccount.fname}</h3>
                    <h3>Last Name   : {myAccount.lname}</h3>
                    {/* <h3>Address     : {myAccount.address}</h3>
                    <h3>NIC         : {myAccount.NIC}</h3>
                    <h3>Nationality : {myAccount.nationality}</h3>
                    <h3>PassportNo  : {myAccount.passportNo}</h3> */}
                    <h3>Email       : {myAccount.email}</h3>
                    <h3>Contact     : {myAccount.contact}</h3>
                    
                </div>
            )   
        })
    }

    return ( 
        <div className="myAccount" >       
        <div className="container contact">
        <div className="row">
        <div className="col-md-8 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4">
             <ul>
                {renderAccount()}
                <a href="cusUpdateAccount"><button className="btn btn-block btn-outline-primary">EDIT</button></a>
                
            </ul>
        </div>
        </div>
        </div>
        </div>
         </div>
     );
     
}
 
export default MyAccount; 