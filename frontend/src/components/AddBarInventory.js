import React, { useState, useEffect } from 'react';
import './AddBarInventory.css'
import axios from 'axios'
import AddCategory from './AddCategory';

export default function AddBarInventory() {

    const [item_id, setitemid] = useState("");
    const [name, setname] = useState("");
    const [category, setcategory] = useState("");
    const [supplier, setsupplier] = useState("");
    const [quantity, setquantity] = useState("");
    const [restocklevel, setrestocklevel] = useState("");
    const [unitPrice, setoprice] = useState(0);
    const [date, setdate] = useState("");

    const [getCategory, setgetCategory] = useState([]);
    const [getSupplier, setgetSupplier] = useState([]);



    useEffect(() => {


        axios.get("http://localhost:5000/supplier/").then((res) => {
            if (res.data.length > 0) {
                setgetSupplier(res.data.map(supplier => supplier.name))
            }
        }).catch((e) => {
            // console.log(e);
        })

    }, [])
    //sending collected data to the database
    function sendData(e) {
        e.preventDefault();

        const newItem = {
            item_id,name,category, supplier, quantity, unitPrice, date
        }

        axios.post(" http://localhost:5000/barInventory/add", newItem).then(() => {

            window.location = "/viewbeverages"

        }).catch((e) => {
            alert("error");
        })

    }

    function AddCategoryBar() {
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


            <div className="header-box"> Add Beverages
            <button id="add-new-cat-btn" onClick={AddCategoryBar} style={{ display: "block" }}>Add Category</button>
                <div id="add-new-cat" style={{ display: "none" }}>  <AddCategory AddCategoryBar={AddCategoryBar} /></div>


            </div>

            {/* <hr /> */}
            <div className="content-box">

                <form onSubmit={sendData}>

                    <div className="form1">


                        
                    <label className="custom-field">
                            <input type="text" className="form-input" id="item_id"
                            onChange={(e) => {
                                setitemid(e.target.value)
                            }}
                            />
                            <span className="placeholder">Item ID</span>
                        </label>
                     

                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="name" onChange={(e) => {
                                setname(e.target.value)
                            }} required />
                            <span className="placeholder">name</span>
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
                                    <option >Alcoholic</option>
                                    <option >Non-Alcoholic</option>
                                    
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
                                <input type="number" className="form-input" id="quantity" onChange={(e) => {
                                    setquantity(e.target.value)
                                }} />
                                <span className="placeholder">quantity</span>
                            </label>

                            <label className="custom-field">
                                <input type="number" className="form-input" id="restocklevel" onChange={(e) => {
                                    setrestocklevel(e.target.value)
                                }} />
                                <span className="placeholder">Re-Stock Level</span>
                            </label>

                            <br />
                            <div className="price">
                                <label className="custom-field">
                                    <input type="number" className="form-input" id="oprice" onChange={(e) => {
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
                            <button className="addinventory-btn">Add Bar Inventory</button>
                        </div>

                    </div>

                </form>
            </div>



        </div>
    )

}