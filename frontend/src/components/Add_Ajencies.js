import React, { useState } from 'react';
import axios from 'axios';

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
            window.location = "/view"
            alert("Agencies Added Successfuly");
        }).catch(() => {
            alert("Contract Id Was Duplicated!!");
        })
    }


    return (
        <div>
            <form>
                <label>Contract Id :</label><br />
                <input type="text" id="contract_id" name="contract_id" onChange={(e) => {
                    setContract_id(e.target.value);
                }} /><br></br>

                <label>Name:</label><br />
                <input type="text" id="name" name="name" onChange={(e) => {
                    setName(e.target.value);
                }} /><br></br>

                <label>Mail Address :</label><br />
                <input type="text" id="mail_Address" name="mail_Address" onChange={(e) => {
                    setMail_Address(e.target.value);
                }} /><br></br>

                <label>Contact Number :</label><br />
                <input type="text" id="Contact" name="Contact" onChange={(e) => {
                    setMobile(e.target.value);
                }} /><br></br>

                <label>Address :</label><br />
                <input type="text" id="Address" name="Address" onChange={(e) => {
                    setAddress(e.target.value);
                }} /><br></br>

                <label>Passcode :</label><br />
                <input type="text" id="Passcode" name="Passcode" onChange={(e) => {
                    setPasscode(e.target.value);
                }} /><br></br>

                <label>Rate :</label><br />
                <input type="number" id="Rate" name="Rate" onChange={(e) => {
                    setRate(e.target.value);
                }} /><br></br>

                <input type="submit" value="Submit" onClick={sendData} />
            </form>

        </div>
    )
}

export default AddAgencies;