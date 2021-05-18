import React, { useState, useEffect } from 'react';
import './AddInventory.css'
import axios from 'axios'
import AddCategory from './AddCategory';

export default function AddInventory() {

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

    const [getCategory, setgetCategory] = useState([]);
    const [getSupplier, setgetSupplier] = useState([]);



    useEffect(() => {
 
        axios.get("http://localhost:5000/category/").then((res) => {
            if (res.data.length > 0) {
                setgetCategory(res.data.map(category => category.name))
            }
        }).catch((e) => {
            // console.log(e);
        },)

        axios.get("http://localhost:5000/supplier/").then((res) => {
            if (res.data.length > 0) {
                setgetSupplier(res.data.map(supplier => supplier.name))
            }
        }).catch((e) => {
            // console.log(e);
        })

    }, [getCategory])
    //sending collected data to the database
    function sendData(e) {
        e.preventDefault();

        //createing an unique ID
        let inventoryID = category.toUpperCase() + Date.now();
        
        const newItem = {
            inventoryID, name, model, sku, category, supplier, description, mesurement, quantity, restock_level, original_price, date
        }

        axios.post(" http://localhost:5000/inventory/add", newItem).then(() => {

            window.location = "/inventory-manager"

        }).catch((e) => {
            alert("error");
        })

    }

    function AddCategoryBar() {//for displaying and hiding the ADD CATEGORY component
        const x = document.getElementById("add-new-cat").style.display;
        if (x == "none") {
            document.getElementById('add-new-cat').style.display = "block";
            document.getElementById('add-new-cat-btn').style.display = "none";

        }
        else {
            document.getElementById('add-new-cat').style.display = "none ";
            document.getElementById('add-new-cat-btn').style.display = "block";


        }
    }




    return (
        <div className="display-box">


            <div className="header-box"> Add Inventory
            <button id="add-new-cat-btn" onClick={AddCategoryBar} style={{ display: "block" }}>Add Category</button>
                <div id="add-new-cat" style={{ display: "none" }}>  <AddCategory AddCategoryBar={AddCategoryBar} /></div>


            </div>

            {/* <hr /> */}
            <div className="content-box">

                <form onSubmit={sendData}>

                    <div className="form1">

                        <label className="custom-field">
                            <input type="text" className="form-input" id="name" maxLength="50" onChange={(e) => {
                                setname(e.target.value)
                            }} required />
                            <span className="placeholder">name</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="model" maxLength="50" onChange={(e) => {
                                setmodel(e.target.value)
                            }} required />
                            <span className="placeholder">model</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="sku" maxLength="10" onChange={(e) => {
                                setsku(e.target.value)
                            }} />
                            <span className="placeholder">SKU</span>
                        </label>

                        <br />

                        <label className="custom-field">
                            <textarea name="description" id="description" cols="0" rows="10" maxLength="200" onChange={(e) => {
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
                                    <option >Select</option>
                                    {
                                        getCategory.map(function (category) {
                                            return <option key={category} value={category}>{category}</option>
                                        })
                                    }
                                </select>
                                <span className="placeholder">category</span>
                            </label>


                            <label className="custom-field">
                                <select name="supplier" id="supplier" onChange={(e) => {
                                    setsupplier(e.target.value)
                                }} >
                                    <option >Select</option>
                                    {
                                        getSupplier.map(function (supplier) {
                                            return <option key={supplier} value={supplier}>{supplier}</option>
                                        })
                                    }

                                </select>
                                <span className="placeholder">supplier</span>
                            </label>

                            <br />
                            <label className="custom-field">
                                <select name="unit" id="unit" onChange={(e) => {
                                    setunit(e.target.value)
                                }} >
                                    <option >Select</option>
                                    <option value="piece">Piece</option>
                                    <option value="Kg">Kg</option>
                                    <option value="grams">Grams</option>
                                    <option value="liters">Liters</option>
                                </select>
                                <span className="placeholder">unit</span>
                            </label>

                            <label className="custom-field">
                                <input type="number" className="form-input" id="quantity" min="1" onChange={(e) => {
                                    setquantity(e.target.value)
                                }} />
                                <span className="placeholder">quantity</span>
                            </label>


                            <label className="custom-field">
                                <input type="number" className="form-input" min="1" id="restock" onChange={(e) => {
                                    setrestock(e.target.value)
                                }} />
                                <span className="placeholder">restock level</span>
                            </label>
                            <br />
                            <div className="price">
                                <label className="custom-field">
                                    <input type="number" min="1" className="form-input" id="oprice" onChange={(e) => {
                                        setoprice(e.target.value)
                                    }} />
                                    <span className="placeholder">original price</span>
                                </label>
                                <label className="custom-field">
                                    <input type="date" className="form-input" id="date" onChange={(e) => {
                                        setdate(e.target.value)
                                    }} required />
                                    <span className="placeholder">date</span>
                                </label>

                            </div>

                        </div>
                        <div className="form2-btn">
                            <button className="addinventory-btn">Add Inventory</button>
                        </div>



                    </div>

                </form>
            </div>



        </div>
    )

}