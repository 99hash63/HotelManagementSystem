import React, { useState } from 'react';
import axios from 'axios';
import './AddAgent.css'
import validation from 'validator'



function AddAgencies() {
    var [contract_id, setContract_id] = useState("");
    var [name, setName] = useState("");
    var [mail_Address, setMail_Address] = useState("");
    var [mobile, setMobile] = useState("");
    var [address, setAddress] = useState("");
    var [passcode, setPasscode] = useState("");
    var [rate, setRate] = useState("");


    function sendData(e) {
        e.preventDefault();  

        if(contract_id.length == 0){
            document.getElementById('mail_error1').style.display = "none";
            document.getElementById('id_error').style.display = "block";
            document.getElementById('name_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('mobile_error').style.display = "none";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('rate_error').style.display = "none";

        }else if(name.length == 0){
            document.getElementById('mail_error1').style.display = "none";
            document.getElementById('name_error').style.display = "block";
            document.getElementById('id_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('mobile_error').style.display = "none";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('rate_error').style.display = "none";


        }else if(mail_Address.length==0){
            document.getElementById('mail_error1').style.display = "none";
            document.getElementById('name_error').style.display = "none";
            document.getElementById('mail_error').style.display = "block";
            document.getElementById('id_error').style.display = "none";
            document.getElementById('mobile_error').style.display = "none";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('rate_error').style.display = "none";

        }else if(!validation.isEmail(mail_Address)){

         
            document.getElementById('rate_error').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('mobile_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('id_error').style.display = "none";
            document.getElementById('name_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('mail_error1').style.display = "block";
        }else if(mobile.length==0){

  
            document.getElementById('mail_error1').style.display = "none";
            document.getElementById('rate_error').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('id_error').style.display = "none";
            document.getElementById('name_error').style.display = "none";
            document.getElementById('mobile_error').style.display = "block";
        }else if(address.length == 0){

            document.getElementById('mail_error1').style.display = "none";
            document.getElementById('rate_error').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('mobile_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('id_error').style.display = "none";
            document.getElementById('name_error').style.display = "none";
            document.getElementById('address_error').style.display = "block";
        }else if(passcode.length == 0){

            document.getElementById('mail_error1').style.display = "none";
            document.getElementById('rate_error').style.display = "none";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('mobile_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('id_error').style.display = "none";
            document.getElementById('name_error').style.display = "none";
            document.getElementById('password_error').style.display = "block";
        }else if(rate.length==0){

            document.getElementById('mail_error1').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('mobile_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('id_error').style.display = "none";
            document.getElementById('name_error').style.display = "none";
            document.getElementById('rate_error').style.display = "block";
        }else{
        
        const newAgencies = {
            contract_id,
            name,
            mail_Address,
            mobile,
            address,
            passcode,
            rate

        }

        axios.post("http://localhost:5000/Travel_Agency/add", newAgencies).then(() => {
            window.location = "/front-office-manager/viewAllAgencies"
            alert("Agencies Added Successfuly");
        }).catch((err) => {
            alert("Contract Id Was Duplicated!!");
        })
    }
    }


    return (
        <div className="display-box">
            <div className="header-box">Add agency</div>

            <div className="content-box">
            <form>
            <div className="form1">
            <label className="custom-field">
                <input type="text" required id="contract_id" name="contract_id" onChange={(e) => {
                    setContract_id(e.target.value);
                }} required/>
                <span className="placeholder">Contract Id</span>
                
                </label><div id="id_error" style={{ display: "none", color:"red", marginLeft:20,marginTop:-12 }}>contract is required</div><br />

                <label className="custom-field">
                <input type="text" required name="name" onChange={(e) => {
                    setName(e.target.value);
                }} />
                <span className="placeholder">Name</span>
                </label><div id="name_error" style={{ display: "none", color:"red", marginLeft:20,marginTop:-12 }}>name is required</div><br />

                <label label className="custom-field">
                <input type="email"  id="mail_Address" name="mail_Address" onChange={(e) => {
                    setMail_Address(e.target.value);
                }} />
                <span className="placeholder">Mail Address </span>
                </label><div id="mail_error" style={{ display: "none", color:"red", marginLeft:20,marginTop:-12 }}>mail is required</div>
                <div id="mail_error1" style={{ display: "none", color:"red", marginLeft:20,marginTop:-12 }}>please enter valid mail</div><br />

                <label label className="custom-field">
                <input type="number" required id="Contact" name="Contact" onChange={(e) => {
                    setMobile(e.target.value);
                }} />
                <span className="placeholder">Contact Number</span>
                </label><div id="mobile_error" style={{ display: "none", color:"red", marginLeft:20,marginTop:-12 }}>phone is required</div><br />
                </div>
                
                <div className="form2">
                <div className="form2-content">

                <label label className="custom-field">
                <input type="text" required id="Address" name="Address" onChange={(e) => {
                    setAddress(e.target.value);
                }} />
                <span className="placeholder">Address</span>
                </label><div id="address_error" style={{ display: "none", color:"red", marginLeft:20,marginTop:-12 }}>address is required</div><br />

                <label label className="custom-field">
                <input type="text" required id="Passcode" name="Passcode" onChange={(e) => {
                    setPasscode(e.target.value);
                }} />
                <span className="placeholder">Passcode</span>
                </label><div id="password_error" style={{ display: "none", color:"red", marginLeft:20,marginTop:-12 }}>passcode is required</div><br />

                <label label className="custom-field">
                <input type="number" required id="Rate" name="Rate" onChange={(e) => {
                    setRate(e.target.value);
                }} />
                <span className="placeholder">Rate</span>
                </label><div id="rate_error" style={{ display: "none", color:"red", marginLeft:20,marginTop:-12 }}>rate is required</div><br />

                {/* <div className="form2-btn"> */}
                <input className="addinventory-btn" type="submit" value="Submit" onClick={sendData} />
                {/* </div> */}
                </div>
                </div>
            </form>
            </div>

        </div>
    )
}

export default AddAgencies;