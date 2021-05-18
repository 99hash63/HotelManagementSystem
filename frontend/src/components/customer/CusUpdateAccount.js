import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import jspdf from 'jspdf'
import "jspdf-autotable"
import './CusUpdateAccount.css'
import './CusSideComponents.css'
import Hero from './subComponents/Hero'
import PageBottom from './PageBottom';


const UpdateAccount = () => {
    const [myAccount, setMyAccount] = useState([]);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [NIC, setNIC] = useState("");
    const [nationality, setNationality] = useState("");
    const [passportNo, setPassportNo] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    
    

    //updating funtion
    function UpAccount(e) {
        e.preventDefault();

        const updateAccount = {
            fname, lname, address, NIC, nationality, passportNo, email, contact, password, passwordVerify
        }

        axios.post(`http://localhost:5000/customer/update`, updateAccount).then(() => {
            window.location = "/CusSideNav/cusMyaccount"
        }).catch((e) => {
            alert("Please Verify Your Password");
        })

    }

    //delete account button funtion
    var timesClicked =0;
    const delete_account = () => {
        timesClicked++;
        
        if (timesClicked > 1) {
            axios.delete(`http://localhost:5000/customer/delete`).then(() => {
                window.location = "/CusSideNav/cusLogout"
                timesClicked=0
            }).catch((e) => {
                alert("error");
            })
        } else {
            document.getElementById('delete_btn').innerHTML = "Confirm Delete"
            document.getElementById("delete_btn").style.color = "white";
            document.getElementById("delete_btn").style.backgroundColor ="rgb(255, 0, 55)"
            document.getElementById("delete_btn").style.borderColor ="rgb(255, 0, 55)"
        }

    }


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
                <div className="myAccountUpdate" >       
                        {/* <div className="container contact">
                            <div className="row">
                                <div className="col-md-8 col-12 mx-auto"> */}
                                    <div className="card shadow-lg border-0 p-4">                                   
                                        {/* <div className="form-group my-5"> */}
                                            <div className="row">
                                                <div className="col-md-6 col-12 mx-auto my-2">    
                                                    <label>First Name</label>     
                                                    <li><input size="2" type="text" className="form-control-lg" defaultValue={myAccount.fname} onChange={(e) => {
                                                        setFname(e.target.value)
                                                        }} required /></li>
                                                </div>
                                                <div className="col-md-6 col-12 mx-auto my-2">
                                                    <label>Last Name </label>    
                                                    <li><input type="text" className="form-control-lg" defaultValue={myAccount.lname} onChange={(e) => {
                                                        setLname(e.target.value)

                                                        setAddress("null")
                                                        setNIC("null")
                                                        setNationality("null")
                                                        setPassportNo("null")
                                                        }} required /></li>
                                                </div>          
                                            </div>
                                        {/* </div>     */}
                                
                                        {/* <div className="form-group my-5"> */}
                                            <div className="row">      
                                                <div className="col-md-6 col-12 mx-auto my-2">
                                                    <label>Email</label>    
                                                    <li> <input type="text" className="form-control-lg" defaultValue={myAccount.email} onChange={(e) => {
                                                        setEmail(e.target.value)
                                                        }} required /></li>
                                                </div>                                
                                                <div className="col-md-6 col-12 mx-auto my-2">
                                                    <label>Contact</label>    
                                                    <li> <input type="text" className="form-control-lg" defaultValue={myAccount.contact} onChange={(e) => {
                                                        setContact(e.target.value)
                                                        }} required /></li>
                                                </div>                                
                                            </div>
                                        {/* </div> */}

                                        {/* <div className="form-group my-5"> */}
                                            <div className="row">
                                                <div className="col-md-6 col-12 mx-auto my-2">     
                                                    <label>Password</label>                         
                                                    <li><input type="password" className="form-control-lg" onChange={(e) => {
                                                        setPassword(e.target.value)
                                                        }} required /></li>
                                                </div>                                
                                                <div className="col-md-6 col-12 mx-auto my-2">
                                                    <label>PasswordVerify</label>                                  
                                                    <li><input type="password" className="form-control-lg" onChange={(e) => {
                                                        setPasswordVerify(e.target.value)
                                                        }} required /></li>
                                                </div>
                                            </div>
                                        {/* </div> */}

                                        <div style={{paddingBottom: "120px"}}>
                                            <button className="btn btn-block btn-outline-primary" id="edit_btn" onClick={UpAccount}>Update</button>
                                            <button className="btn btn-block btn-outline-primary" id="delete_btn" onClick={delete_account} >Delete</button>
                                        </div>            
                                    </div>
                                {/* </div>
                            </div>
                        </div> */}
                    </div>
            )   
        })
    }

    return ( 
        <div>
            <Hero hero="behindHero"></Hero>

            <div  className="updateAcc">
                <ul>
                    {renderAccount()}
                </ul>
            </div>

        </div>
    );
     
}
 
export default UpdateAccount; 



  {/* <li>Address <input type="text" defaultValue={myAccount.address} onChange={(e) => {
                                setAddress(e.target.value)
                                }} required /></li>
                    <li>NIC <input type="text" defaultValue={myAccount.NIC} onChange={(e) => {
                                setNIC(e.target.value)
                                }} required /></li>
                    <li>Nationality <input type="text" defaultValue={myAccount.nationality} onChange={(e) => {
                                setNationality(e.target.value)
                                }} required /></li>
                    <li>PassportNo <input type="text" defaultValue={myAccount.passportNo} onChange={(e) => {
                                setPassportNo(e.target.value)
                                }} required /></li> */}