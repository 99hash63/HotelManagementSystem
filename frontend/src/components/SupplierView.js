import React, { useState, useEffect } from 'react';
import './Suppliers.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const SuppliersView = () => {
    const history = useHistory();
    const { id } = useParams();
 
    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [contact, setcontact] = useState("");
    const [email, setemail] = useState("");
    const [location, setlocation] = useState("");
    

    const [suppliers, setsuppliers] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:5000/supplier/get/${id}`).then((res) => {
           
                setsuppliers(res.data.supplier)

                setname(res.data.supplier.name)
                setdescription(res.data.supplier.description)
                setcontact(res.data.supplier.contact)
                setemail(res.data.supplier.email)
                setlocation(res.data.supplier.location)

            
        }).catch((e) => {
            console.log(e);
            console.log(id);
        })

    },[])



    function updateData(e) {
        e.preventDefault();


        const newSupplier = {
            name, description, contact, email, location
        }

        axios.put(`http://localhost:5000/supplier/update/${id}`, newSupplier).then(() => {

            window.location = "/suppliers"

        }).catch((e) => {
            alert("error");
        })

    }
    var timesClicked =0;
    const deleteData = (e) => {
        e.preventDefault();
        timesClicked++;
        
        if (timesClicked > 1) {

            axios.delete(`http://localhost:5000/supplier/delete/${id}`).then(() => {
                window.location = "/suppliers"
            }).catch((e) => {
    
                alert("error");
    
            })

        } else {
            document.getElementById('delete-sup btnq').innerHTML = "Confirm Delete"
            document.getElementById("delete-sup btnq").style.color = "white";
            document.getElementById("delete-sup btnq").style.backgroundColor ="rgb(255, 0, 55)"
            document.getElementById("delete-sup btnq").style.borderColor ="rgb(255, 0, 55)"
        }

    }




    return (
        <div className="display-box">
             <i  onClick={() => { history.goBack();}} class="fas fa-chevron-circle-left"></i>
            <div className="header-box-sup"> Suppliers
            </div>

            <div className="supplier-list" >

            <form  id="supform" >

                            <div className="form1-l" >

                                <label className="custom-field-s">
                                    <input defaultValue={suppliers.name} type="text" className="form-input" id="name-s" onChange={(e) => {
                                        setname(e.target.value)
                                    }} required />
                                    <span className="placeholder">name</span>
                                </label>
                                <br />
                                <label className="custom-field-s">
                                    <textarea defaultValue={suppliers.description} name="description" className="form-input" id="description-s" cols="0" rows="10" maxLength="500" onChange={(e) => {
                                        setdescription(e.target.value)
                                    }} ></textarea>
                                    <span className="placeholder">description</span>
                                </label>
                                <br />
                            </div>
                            <div className="form2">

                                <label className="custom-field-s">
                                    <input defaultValue={suppliers.contact} type="text" className="form-input" id="contact-s" onChange={(e) => {
                                        setcontact(e.target.value)
                                    }} />
                                    <span className="placeholder">contact</span>
                                </label>
                                <br />
                                <label className="custom-field-s">
                                    <input defaultValue={suppliers.email} type="text" className="form-input" id="email-s" onChange={(e) => {
                                        setemail(e.target.value)
                                    }} required />
                                    <span className="placeholder">email</span>
                                </label>
                                <br />
                                <label className="custom-field-s">
                                    <input defaultValue={suppliers.location} type="text" className="form-input" id="location-s" onChange={(e) => {
                                        setlocation(e.target.value)
                                    }} required />
                                    <span className="placeholder">location</span>
                                </label>
                                <br />

                                <button onClick={(e) => updateData(e)} className="edit-sup btnq">Update</button>
                                <button id="delete-sup btnq" onClick={(e) => deleteData(e)} className="delete-sup btnq">Delete</button>
                            </div>

                        </form>
                  
                
                
            
            </div>
        </div>
    );
}

export default SuppliersView;