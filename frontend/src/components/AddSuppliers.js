import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Suppliers.css'

const AddSuppliers = ({ supPOP }) => {

    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [contact, setcontact] = useState("");
    const [email, setemail] = useState("");
    const [location, setlocation] = useState("");


    function sendData(e) {
        e.preventDefault();
        //sending new supplier values to the DB
        const newSupplier = {
            name, description, contact, email, location
        }

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) {

            alert("Incorrect Email Address")
        }
        else {

            axios.post(" http://localhost:5000/supplier/add", newSupplier).then(() => {

                window.location = "/inventory-manager/suppliers"

            }).catch((e) => {
                alert("error");
            })
        }

    }


    return (
        <div>
            {/* for backgroung blur */}
            <dir className="blur-s">


                <div className="content-box-s">
                    <div className="add-sup-head">
                        <div className="title">Add Supplier</div>
                        <button className="btnn" onClick={supPOP}>&times;</button>
                    </div>

                    <hr />


                    <form onSubmit={sendData}>

                        <div className="form1">

                            <label className="custom-field-s">
                                <input type="text" className="form-input" id="name-s" maxLength="50" onChange={(e) => {
                                    setname(e.target.value)
                                }} required />
                                <span className="placeholder">name</span>
                            </label>
                            <br />
                            <label className="custom-field-s">
                                <textarea name="description" className="form-input" id="description-s" cols="0" rows="10" maxLength="200" onChange={(e) => {
                                    setdescription(e.target.value)
                                }} ></textarea>
                                <span className="placeholder">description</span>
                            </label>
                            <br />

                            <label className="custom-field-s">
                                <input type="number" className="form-input" id="contact-s" min="1" onChange={(e) => {
                                    setcontact(e.target.value)
                                }} />
                                <span className="placeholder">contact</span>
                            </label>
                            <br />
                            <label className="custom-field-s">
                                <input type="text" className="form-input" id="email-s" onChange={(e) => {
                                    setemail(e.target.value)
                                }} required />
                                <span className="placeholder">email</span>
                            </label>
                            <br />
                            <label className="custom-field-s">
                                <input type="text" className="form-input" id="location-s" onChange={(e) => {
                                    setlocation(e.target.value)
                                }} required />
                                <span className="placeholder">location</span>
                            </label>
                            <br />

                        </div>
                        <button className="add-sup-btn">Add</button>
                    </form>

                </div>

            </dir>
        </div>
    );
}

export default AddSuppliers;