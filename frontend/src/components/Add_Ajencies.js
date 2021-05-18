import React, { useState } from 'react';
import axios from 'axios';
import './AddAgent.css'


function AddAgencies() {
    var [contract_id, setContract_id] = useState("");
    var [name, setName] = useState("");
    var [mail_Address, setMail_Address] = useState("");
    var [mobile, setMobile] = useState("");
    var [address, setAddress] = useState("");
    var [passcode, setPasscode] = useState(0);
    var [rate, setRate] = useState(0);


    function sendData(e) {
        e.preventDefault();

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
                </label><br />

                <label className="custom-field">
                <input type="text" required name="name" onChange={(e) => {
                    setName(e.target.value);
                }} />
                <span className="placeholder">Name</span>
                </label><br />

                <label label className="custom-field">
                <input type="text" required id="mail_Address" name="mail_Address" onChange={(e) => {
                    setMail_Address(e.target.value);
                }} />
                <span className="placeholder">Mail Address </span>
                </label><br />

                <label label className="custom-field">
                <input type="text" required id="Contact" name="Contact" onChange={(e) => {
                    setMobile(e.target.value);
                }} />
                <span className="placeholder">Contact Number</span>
                </label><br />
                </div>
                
                <div className="form2">
                <div className="form2-content">

                <label label className="custom-field">
                <input type="text" required id="Address" name="Address" onChange={(e) => {
                    setAddress(e.target.value);
                }} />
                <span className="placeholder">Address</span>
                </label><br />

                <label label className="custom-field">
                <input type="text" required id="Passcode" name="Passcode" onChange={(e) => {
                    setPasscode(e.target.value);
                }} />
                <span className="placeholder">Passcode</span>
                </label><br />

                <label label className="custom-field">
                <input type="number" required id="Rate" name="Rate" onChange={(e) => {
                    setRate(e.target.value);
                }} />
                <span className="placeholder">Rate</span>
                </label><br />

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