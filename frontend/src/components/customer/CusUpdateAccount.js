import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import jspdf from 'jspdf'
import "jspdf-autotable"

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
            window.location = "/cusMyaccount"
        }).catch((e) => {
            alert(e);
        })

    }

    //delete account button funtion
    var timesClicked =0;
    const delete_account = () => {
        timesClicked++;
        
        if (timesClicked > 1) {
            axios.delete(`http://localhost:5000/customer/delete`).then(() => {
                window.location = "/"
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
                <div>

                    <div>
                        <button id="edit_btn" onClick={UpAccount}>Update</button>
                        <button id="delete_btn" onClick={delete_account} >Delete</button>
                    </div>

                    <li>First Name <input type="text" defaultValue={myAccount.fname} onChange={(e) => {
                                setFname(e.target.value)
                                }} required /></li>
                    <li>Last Name <input type="text" defaultValue={myAccount.lname} onChange={(e) => {
                                setLname(e.target.value)
                                }} required /></li>
                    <li>Address <input type="text" defaultValue={myAccount.address} onChange={(e) => {
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
                                }} required /></li>
                    <li>Email <input type="text" defaultValue={myAccount.email} onChange={(e) => {
                                setEmail(e.target.value)
                                }} required /></li>
                    <li>Contact <input type="text" defaultValue={myAccount.contact} onChange={(e) => {
                                setContact(e.target.value)
                                }} required /></li>
                    <li>Password <input type="text" onChange={(e) => {
                                setPassword(e.target.value)
                                }} required /></li>
                    <li>PasswordVerify <input type="text" onChange={(e) => {
                                setPasswordVerify(e.target.value)
                                }} required /></li>
                </div>
            )   
        })
    }

    return ( 
        <div style={{background: "#ffffff",borderRadius: "20px"}}>
            <ul>
                {renderAccount()}
            </ul>
        
        </div>
     );
     
}
 
export default UpdateAccount; 