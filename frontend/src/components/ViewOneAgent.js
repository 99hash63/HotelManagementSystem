import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ViewOne() {
    const { id } = useParams();
    const [agentOne, setOneAgent] = useState([]);

    const [contract_id, setContract_id] = useState("");
    const [name, setName] = useState("");
    const [mail_Address, setMail_Address] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [passcode, setPasscode] = useState(0);
    const [rate, setRate] = useState(0);



    useEffect(() => {
        axios.get(`http://localhost:5000/Travel_Agency/find/${id}`).then((res) => {
            setOneAgent(res.data);
            setContract_id(res.data.contract_id);
            setName(res.data.name);
            setMail_Address(res.data.mail_Address);
            setMobile(res.data.mobile);
            setAddress(res.data.address);
            setPasscode(res.data.passcode);
            setRate(res.data.rate);

        }).catch((err) => {
            alert(err);
        })

    }, [])




    function updat(id) {
        const newAgencies = {
            contract_id,
            name,
            mail_Address,
            mobile,
            address,
            passcode,
            rate

        }

        const result = window.confirm("Confirm?");
        if (result == true) {
            axios.put(`http://localhost:5000/Travel_Agency/update/${id}`, newAgencies).then(() => {

            }).catch(() => {
                alert("User Id Duplicated!!!!");
            })
        }
    }


    return (
        <div>
            <h1>View One</h1>
            <form  >
                <label>Contract Id :</label><br />
                <input type="text" defaultValue={agentOne.contract_id} onChange={(e) => {
                    setContract_id(e.target.value)
                }} /><br></br>

                <label>Name:</label><br />
                <input type="text" defaultValue={agentOne.name} onChange={(e) => {
                    setName(e.target.value)
                }} /><br></br>

                <label>Mail Address :</label><br />
                <input type="text" defaultValue={agentOne.mail_Address} onChange={(e) => {
                    setMail_Address(e.target.value);
                }} /><br></br>

                <label>Contact Number :</label><br />
                <input type="text" defaultValue={agentOne.mobile} onChange={(e) => {
                    setMobile(e.target.value);
                }} /><br></br>

                <label>Address :</label><br />
                <input type="text" defaultValue={agentOne.address} onChange={(e) => {
                    setAddress(e.target.value);
                }} /><br></br>

                <label>Passcode :</label><br />
                <input type="text" defaultValue={agentOne.passcode} onChange={(e) => {
                    setPasscode(e.target.value);
                }} /><br></br>

                <label>Rate :</label><br />
                <input type="text" defaultValue={agentOne.rate} onChange={(e) => {
                    setRate(e.target.value);
                }} /><br></br>


                <button onClick={e => updat(agentOne._id)}>Update</button><br></br>
                <Link to={"/deleteAgent/" + agentOne._id}> Delete </Link><br></br>
                <Link to={"/viewAllAgencies"}>Back</Link><br></br>

            </form>

        </div>
    )
}

export default ViewOne;