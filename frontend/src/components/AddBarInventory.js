import React, { useState, useEffect } from 'react';
import './AddBarInventory.css'
import axios from 'axios'
import AddCategory from './AddCategory';

export default function AddBarInventory() {

    const [itemid, setitemid] = useState("");
    const [name, setname] = useState("");
    const [category, setcategory] = useState("");
    const [supplier, setsupplier] = useState("");
    const [quantity, setquantity] = useState("");
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
        })

        axios.get("http://localhost:5000/supplier/").then((res) => {
            if (res.data.length > 0) {
                setgetSupplier(res.data.map(supplier => supplier.name))
            }
        }).catch((e) => {
            // console.log(e);
        })

    }, [sendData])
    //sending collected data to the database
    function sendData(e) {
        e.preventDefault();

        const newItem = {
            itemid,name,category, supplier, quantity, original_price, date
        }

        axios.post(" http://localhost:5000/inventory/add", newItem).then(() => {

            window.location = "/inventory"

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
                            <input type="text" className="form-input" id="item_id"/>
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
                                <input type="number" className="form-input" id="quantity" onChange={(e) => {
                                    setquantity(e.target.value)
                                }} />
                                <span className="placeholder">quantity</span>
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