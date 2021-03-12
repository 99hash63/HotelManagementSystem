import React, { useState, useEffect } from 'react';
import './Suppliers.css'
import axios from 'axios'
import AddSuppliers from './AddSuppliers';

const Suppliers = () => {

    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [contact, setcontact] = useState("");
    const [email, setemail] = useState("");
    const [location, setlocation] = useState("");
    const [supID, setsupID] = useState("");



    const [suppliers, setsuppliers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/supplier/").then((res) => {
            if (res.data.length > 0) {
                setsuppliers(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    }, [])



    function addSupplierPOP() {
        const x = document.getElementById("add-new-sup").style.display;
        if (x == "none") {
            document.getElementById('add-new-sup').style.display = "block";
        }
        else {
            document.getElementById('add-new-sup').style.display = "none ";
        }
    }

    function updateData(e) {
        e.preventDefault();

        const newSupplier = {
            name, description, contact, email, location
        }

        axios.put(" http://localhost:5000/supplier/update/", newSupplier).then(() => {

            // window.location = "/inventory"

        }).catch((e) => {
            alert("error");
        })

    }

    function deleteData(e) {

        // axios.delete(`http://localhost:5000/inventory/delete/${id}`).then(() => {
        //     window.location = "/inventory"
        // }).catch((e) => {
        //     alert("error");
        // })
        
    }


    return (
        <div className="display-box">
            <div className="header-box-sup"> Suppliers
            <button id="add-new-sup-btn" onClick={addSupplierPOP} style={{ display: "block" }}>Add Supplier</button>
            </div>

            <div id="add-new-sup" style={{ display: "none" }}>  <AddSuppliers supPOP={addSupplierPOP} /> </div>

            <div className="supplier-list">


                {
                    suppliers.map(function (sup) {
                        return <form onSubmit={updateData}>

                            <div className="form1-l">

                                <label className="custom-field-s">
                                    <input defaultValue ={sup._id} type="text" className="form-input" id="name-s" onChange={(e) => {
                                        setname(e.target.value)
                                    }} required />
                                    <span className="placeholder">name</span>
                                </label>
                                <br />
                                <label className="custom-field-s">
                                    <textarea defaultValue ={sup.description} name="description" className="form-input" id="description-s" cols="0" rows="10" maxLength="500" onChange={(e) => {
                                        setdescription(e.target.value)
                                    }} ></textarea>
                                    <span className="placeholder">description</span>
                                </label>
                                <br />
                            </div>
                            <div className="form2">

                                <label className="custom-field-s">
                                    <input defaultValue ={sup.contact} type="text" className="form-input" id="contact-s" onChange={(e) => {
                                        setcontact(e.target.value)
                                    }} />
                                    <span className="placeholder">contact</span>
                                </label>
                                <br />
                                <label className="custom-field-s">
                                    <input defaultValue ={sup.email} type="text" className="form-input" id="email-s" onChange={(e) => {
                                        setemail(e.target.value)
                                    }} required />
                                    <span className="placeholder">email</span>
                                </label>
                                <br />
                                <label className="custom-field-s">
                                    <input defaultValue ={sup.location} type="text" className="form-input" id="location-s" onChange={(e) => {
                                        setlocation(e.target.value)
                                    }} required />
                                    <span className="placeholder">location</span>
                                </label>
                                <br />

                                <button onClick={updateData} className="edit-sup btnq">Edit</button>
                                <button onClick={deleteData} className="delete-sup btnq">Delete</button>
                            </div>

                        </form>
                    })
                }

            </div>
        </div>
    );
}

export default Suppliers;