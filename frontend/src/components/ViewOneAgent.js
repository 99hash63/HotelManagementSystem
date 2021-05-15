import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AddAgent.css'
import { useHistory } from "react-router-dom";
// import './Suppliers.css'


function ViewOne() {
    const history = useHistory();
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
            axios.put(`http://localhost:5000/Travel_Agency/update/${id}`, newAgencies).then((res) => {
                alert("Update Success")
               
            }).catch(() => {
                alert("User Id Duplicated!!!!");
            })
        }
    }



    return (
        // <div className="display-box">
        //     <div className="header-box-sup"> Update Agent</div>
        //     <div className="supplier-list"  >

        //         <form id="supform" >

        //         <div className="form1-l" >
        //             <label>Contract Id :</label><br />
        //             <input type="text" defaultValue={agentOne.contract_id} onChange={(e) => {
        //                 setContract_id(e.target.value)
        //             }} /><br></br>

        //             <label>Name:</label><br />
        //             <input type="text" defaultValue={agentOne.name} onChange={(e) => {
        //                 setName(e.target.value)
        //             }} /><br></br>

        //             <label>Mail Address :</label><br />
        //             <input type="text" defaultValue={agentOne.mail_Address} onChange={(e) => {
        //                 setMail_Address(e.target.value);
        //             }} /><br></br>

        //             <label>Contact Number :</label><br />
        //             <input type="text" defaultValue={agentOne.mobile} onChange={(e) => {
        //                 setMobile(e.target.value);
        //             }} /><br></br>

        //             </div>

        //             <div className="form2">

        //             <label>Address :</label><br />
        //             <input type="text" defaultValue={agentOne.address} onChange={(e) => {
        //                 setAddress(e.target.value);
        //             }} /><br></br>

        //             <label>Passcode :</label><br />
        //             <input type="text" defaultValue={agentOne.passcode} onChange={(e) => {
        //                 setPasscode(e.target.value);
        //             }} /><br></br>

        //             <label>Rate :</label><br />
        //             <input type="text" defaultValue={agentOne.rate} onChange={(e) => {
        //                 setRate(e.target.value);
        //             }} /><br></br>


        //             <button onClick={e => updat(agentOne._id)}>Update</button><br></br>
        //             <Link class="link" to={"/deleteAgent/" + agentOne._id}> Delete </Link><br></br>
        //             {/* <button onClick={e => Delet(agentOne._id)}>Delete</button><br></br> */}
        //             <Link to={"/viewAllAgencies"}>Back</Link><br></br>

        //             </div>

        //         </form>
        //     </div>

        // </div>
        <div className="display-box">
            <div className="header-box">Add Agencies

            <button id="checkoutHistory-window-btn" onClick={() => { history.goBack(); }} >Back</button>

            </div>

            <div className="content-box">
                <form>
                    <div className="form1">
                        <label className="custom-field">
                            <input type="text" id="contract_id" name="contract_id" defaultValue={agentOne.contract_id} onChange={(e) => {
                                setContract_id(e.target.value);
                            }} />
                            <span className="placeholder">Contract Id</span>
                        </label><br />

                        <label className="custom-field">
                            <input type="text" name="name" defaultValue={agentOne.name} onChange={(e) => {
                                setName(e.target.value);
                            }} />
                            <span className="placeholder">Name</span>
                        </label><br />

                        <label label className="custom-field">
                            <input type="text" id="mail_Address" name="mail_Address" defaultValue={agentOne.mail_Address} onChange={(e) => {
                                setMail_Address(e.target.value);
                            }} />
                            <span className="placeholder">Mail Address </span>
                        </label><br />

                        <label label className="custom-field">
                            <input type="text" id="Contact" name="Contact" defaultValue={agentOne.mobile} onChange={(e) => {
                                setMobile(e.target.value);
                            }} />
                            <span className="placeholder">Contact Number</span>
                        </label><br />
                    </div>

                    <div className="form2">
                        <div className="form2-content">

                            <label label className="custom-field">
                                <input type="text" id="Address" name="Address" defaultValue={agentOne.address} onChange={(e) => {
                                    setAddress(e.target.value);
                                }} />
                                <span className="placeholder">Address</span>
                            </label><br />

                            <label label className="custom-field">
                                <input type="text" id="Passcode" name="Passcode" defaultValue={agentOne.passcode} onChange={(e) => {
                                    setPasscode(e.target.value);
                                }} />
                                <span className="placeholder">Passcode</span>
                            </label><br />

                            <label label className="custom-field">
                                <input type="number" id="Rate" name="Rate" defaultValue={agentOne.rate} onChange={(e) => {
                                    setRate(e.target.value);
                                }} />
                                <span className="placeholder">Rate</span>
                            </label><br />

                            {/* <button onClick={(e) => updateData(e)} className="edit-sup btnq">Update</button> */}


                            {/* <div className="form2-btn"> */}
                            <button onClick={e => updat(agentOne._id)} style={{

                                border: "1px solid rgb(124, 124, 124)",
                                borderRadius: "90px",
                                width: "110px",
                                height: "35px",
                                marginTop: "20px",
                                background: "white",
                                color: "black",
                                marginright: "20px",
                                fontSize: "15px",
                                backgroundcolor: "white",
                                padding: "4px 8px 4px 8px",
                                outline: "none"
                            }

                            } >Update</button>
                            <Link class="link" to={"/front-office-manager/deleteAgent/" + agentOne._id}
                                style={{

                                    border: "1px solid rgb(124, 124, 124)",
                                    borderRadius: "90px",
                                    width: "110px",
                                    textDecoration: "none",
                                    fontSize: "15px",
                                    height: "35px",
                                    marginLeft: "5px",
                                    marginTop: "20px",
                                    padding: "6px 22px 6px 22px",
                                    background: "white",
                                    color: "black",
                                    marginright: "20px",
                                    backgroundcolor: "white",
                                    outline: "none"
                                }

                                }
                            > Delete </Link>
                            {/* </div> */}
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ViewOne;



