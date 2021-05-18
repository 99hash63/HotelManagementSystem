import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const DisplayInventory = () => {
    const history = useHistory();
    const { id } = useParams();

    const [name, setname] = useState("");
    const [model, setmodel] = useState("");
    const [sku, setsku] = useState("");
    const [category, setcategory] = useState("");
    const [supplier, setsupplier] = useState("");
    const [description, setdescription] = useState("");
    const [mesurement, setunit] = useState("");
    const [quantity, setquantity] = useState("");
    const [restock_level, setrestock] = useState("");
    const [original_price, setoprice] = useState("");
    const [date, setdate] = useState("");

    //storing the data that fetched from the DB
    const [getInventory, setgetInventory] = useState([]);
    const [getCategory, setgetCategory] = useState([]);
    const [getSupplier, setgetSupplier] = useState([]);



    useEffect(() => {
        //fetching category data from DB
        axios.get("http://localhost:5000/category/").then((res) => {
            if (res.data.length > 0) {
                setgetCategory(res.data.map(category => category.name))
            }
        }).catch((e) => {
            console.log(e);
        })
        //fetching supplier data from DB
        axios.get("http://localhost:5000/supplier/").then((res) => {
            if (res.data.length > 0) {
                setgetSupplier(res.data.map(supplier => supplier.name))
            }
        }).catch((e) => {
            console.log(e);
        })
        //fetching inventory data from DB
        axios.get(`http://localhost:5000/inventory/get/${id}`).then(res => {
            setgetInventory(res.data.item)
            //setting the data that is fetched from the database 
            setname(res.data.item.name)
            setmodel(res.data.item.model)
            setsku(res.data.item.sku)
            setdescription(res.data.item.description)
            setcategory(res.data.item.category)
            setsupplier(res.data.item.supplier)
            setunit(res.data.item.mesurement)
            setquantity(res.data.item.quantity)
            setrestock(res.data.item.restock_level)
            setoprice(res.data.item.original_price)
            setdate(res.data.item.date)

        }).catch((e) => {
            console.log(e);
        })


    }, [])

    //updating funtion
    function updateData(e) {
        e.preventDefault();

        const newItem = {
            name, model, sku, category, supplier, description, mesurement, quantity, restock_level, original_price, date
        }

        axios.put(`http://localhost:5000/inventory/update/${id}`, newItem).then(() => {

            document.getElementById('update_successful').style.display = "block ";
          

        }).catch((e) => {
            alert("error");
        })

    }
    //enable edit button funtion
    const enable_edit = () => {
        document.getElementById('fs').removeAttribute("disabled");
        document.getElementById('edit_btn').remove();
        document.getElementById('update_inventory').style.display = "block ";
        document.getElementById('edit-title').innerHTML = "Edit Inventory"

    }
    //delete inventory button funtion
    var timesClicked =0; //for counting delete button click
    const delete_inventory = () => {
        timesClicked++;
        
        if (timesClicked > 1) {//if button click is more than one - delete inventory
            axios.delete(`http://localhost:5000/inventory/delete/${id}`).then(() => {
                window.location = "/inventory-manager"
                timesClicked=0
            }).catch((e) => {
                alert("error");
            })
        } else { //if button click is equal to one - (delete validation) - confirm delete msg
            document.getElementById('delete_btn').innerHTML = "Confirm Delete"
            document.getElementById("delete_btn").style.color = "white";
            document.getElementById("delete_btn").style.backgroundColor ="rgb(255, 0, 55)"
            document.getElementById("delete_btn").style.borderColor ="rgb(255, 0, 55)"
        }

    }





    return (
        <div className="display-box">
        <i  onClick={() => { history.goBack();}} class="fas fa-chevron-circle-left"></i>
            <div id="edit-title" className="header-box"> Inventory
            
            <div>
                    <button id="edit_btn" onClick={enable_edit}>Edit</button>
                    <button id="delete_btn" onClick={delete_inventory} >Delete</button>
                </div>

            </div>
            {/* <hr /> */}

            {/* <div className="content-box" > */}
            <fieldset disabled="disabled" className="content-box" id="fs">
         
                <form onSubmit={updateData} id='inventory_form' >

                    <div className="form1 displayInventory">

                        <label className="custom-field">
                            <input type="text" className="form-input" id="name" defaultValue={getInventory.name} onChange={(e) => {
                                setname(e.target.value)

                            }} required />
                            <span className="placeholder">name</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="model" defaultValue={getInventory.model} onChange={(e) => {
                                setmodel(e.target.value)
                            }} />
                            <span className="placeholder">model</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="sku" defaultValue={getInventory.sku} onChange={(e) => {
                                setsku(e.target.value)
                            }} />
                            <span className="placeholder">SKU</span>
                        </label>

                        <br />

                        <label className="custom-field">
                            <textarea name="description" defaultValue={getInventory.description} id="description" cols="0" rows="10" maxLength="500" onChange={(e) => {
                                setdescription(e.target.value)
                            }} ></textarea>
                            <span className="placeholder">description</span>
                        </label>
                        <br />

                    </div>
                    <div className="form2">
                        <div className="form2-content">

                            <label className="custom-field">
                                <select name="category" id="category" onChange={(e) => {
                                    setcategory(e.target.value)
                                }}  >
                                    <option >{category}</option>
                                    {
                                        getCategory.map(function (category) {
                                            if (getInventory.category !== category) {
                                                return <option key={category} value={category}>{category}</option>
                                            }

                                        })
                                    }
                                </select>
                                <span className="placeholder">category</span>
                            </label>


                            <label className="custom-field">
                                <select name="supplier" id="supplier" onChange={(e) => {
                                    setsupplier(e.target.value)
                                }} >
                                    <option >{supplier} </option>
                                    {
                                        getSupplier.map(function (supplier) {
                                            if (getInventory.supplier != supplier) {
                                                return <option key={supplier} value={supplier}>{supplier}</option>
                                            }
                                        })
                                    }

                                </select>
                                <span className="placeholder">supplier</span>
                            </label>

                            <br />
                            <label className="custom-field">
                                <select name="unit" id="unit" onChange={(e) => {
                                    setunit(e.target.value)
                                }} > <option key={mesurement} value={mesurement}>{getInventory.mesurement} </option>
                                    <option value="piece">piece</option>
                                    <option value="Kg">Kg</option>
                                    <option value="grams">grams</option>
                                    <option value="liters">liters</option>
                                </select>
                                <span className="placeholder">unit</span>
                            </label>

                            <label className="custom-field">
                                <input type="number" className="form-input" min="1" id="quantity" defaultValue={getInventory.quantity} onChange={(e) => {
                                    setquantity(e.target.value)
                                }} />
                                <span className="placeholder">quantity</span>
                            </label>


                            <label className="custom-field">
                                <input type="number" className="form-input" min="1" id="restock" defaultValue={getInventory.restock_level} onChange={(e) => {
                                    setrestock(e.target.value)
                                }} />
                                <span className="placeholder">restock level</span>
                            </label>
                            <br />
                            <div className="price">
                                <label className="custom-field">
                                    <input type="number" className="form-input" min="1" id="oprice" defaultValue={getInventory.original_price} onChange={(e) => {
                                        setoprice(e.target.value)
                                    }} />
                                    <span className="placeholder">buy price(Rs)</span>
                                </label>
                                <label className="custom-field">
                                    <input type="date" className="form-input" id="date" value={getInventory.date && getInventory.date.substring(0, 10)} onChange={(e) => {
                                        setdate(e.target.value)
                                    }} />
                                    <span className="placeholder">date</span>
                                </label>

                            </div>




                        </div>
                        <div className="form2-btn">

                            <button id="update_inventory" style={{ display: "none" }} className="addinventory-btn">Update Inventory</button>
                        

                        </div>
                        <span id="update_successful" style={{ 
                                display: "none" ,
                                fontSize:"13px",
                                fontWeight:"600",
                                // marginLeft:"215px",
                                marginTop:"120px",
                                position:"absolute",
                                color:"green"
                                }} >Update successful</span>

                    </div>

                </form>
            </fieldset>

            {/* </div> */}



        </div>
    )


}

export default DisplayInventory;