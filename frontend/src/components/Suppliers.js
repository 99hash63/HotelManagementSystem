import React, { useState, useEffect } from 'react';
import './Suppliers.css'
import axios from 'axios'
import AddSuppliers from './AddSuppliers';
import { Link } from 'react-router-dom'

const Suppliers = () => {

    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [contact, setcontact] = useState("");
    const [email, setemail] = useState("");
    const [location, setlocation] = useState("");


    const [suppliers, setsuppliers] = useState([])

    useEffect(() => {
        //fetiching all supplier data from the database
        axios.get("http://localhost:5000/supplier/").then((res) => {
            if (res.data.length > 0) {
                setsuppliers(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })

    }, [deleteData, updateData])



    function addSupplierPOP() { //to display and hiding ADD SUPPLIER component
        const x = document.getElementById("add-new-sup").style.display;
        if (x == "none") {
            document.getElementById('add-new-sup').style.display = "block";
        }
        else {
            document.getElementById('add-new-sup').style.display = "none ";
        }
    }

    function updateData(sup, e) { //update supplier
        e.preventDefault();
        const newSupplier = {
            name, description, contact, email, location
        }

        axios.put(`http://localhost:5000/supplier/update/${sup._id}`, newSupplier).then(() => {

            // window.location = "/inventory"

        }).catch((e) => {
            alert("error");
        })

    }

    function deleteData(id, e) { //delete supplier
        e.preventDefault();
        axios.delete(`http://localhost:5000/supplier/delete/${id}`).then(() => {
            // window.location = "/inventory"
        }).catch((e) => {

            alert("error");

        })

    }


    return (
        <div className="display-box">
            <div className="header-box-sup"> Suppliers
            <button id="add-new-sup-btn" onClick={addSupplierPOP} style={{ display: "block" }}>Add Supplier</button>
            </div>

            <div id="add-new-sup" style={{ display: "none" }}>  <AddSuppliers supPOP={addSupplierPOP} /> </div>

            <div className="supplier-list" >

                <table >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            suppliers.slice(0).reverse().map(function (f) {
                                return <tr>

                                    <td >{f.name}</td>
                                    <td >{f.description} </td>
                                    <td >{f.contact} </td>
                                    <td >{f.email} </td>
                                    <td >{f.location} </td>
                                    <td > <Link to={"/inventory-manager/supplierview/" + f._id} ><i class="far fa-edit"></i></Link></td>

                                </tr>

                            })
                        }
                    </tbody>
                </table>




            </div>
        </div>
    );
}

export default Suppliers;