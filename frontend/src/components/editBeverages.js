import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'


const EditBeverages = () => {
    const { id } = useParams();

    const [item_id, setbarID] = useState("");
    const [name, setname] = useState("");
    const [category, setcategory] = useState("");
    const [supplier, setsupplier] = useState("");
    const [quantity, setquantity] = useState(0);
    const [restocklevel, setrestock] = useState(0);
    const [unitPrice, setunitPrice] = useState(0);
    const [date, setdate] = useState("");

    //storing the data that fetched from the DB
    const [BarData, setBarData] = useState([]);
    const [getSupplier, setgetSupplier] = useState([]);



    useEffect(() => {
      
        //fetching supplier data from DB
        axios.get("http://localhost:5000/supplier/").then((res) => {
            if (res.data.length > 0) {
                setgetSupplier(res.data.map(supplier => supplier.name))
            }
        }).catch((e) => {
            console.log(e);
        })
        //fetching inventory data from DB
        axios.get(`http://localhost:5000/barInventory/get/${id}`).then(res => {
            setBarData(res.data)
            setbarID(res.data.item_id)
            setname(res.data.name)
            setcategory(res.data.category)
            setsupplier(res.data.supplier)
            setquantity(res.data.quantity)
            setrestock(res.data.restocklevel)
            setunitPrice(res.data.unitPrice)
            setdate(res.data.date)
            
            console.log(res.data)
           
            //setting the data that is fetched from the database 
    
        }).catch((e) => {
            console.log(e);
        })


    }, [])

    //updating funtion
    function updateData(e) {
        e.preventDefault();

        const newItem = {
            item_id, name, category, supplier, quantity, restocklevel, unitPrice, date
        }

        axios.put(`http://localhost:5000/barInventory/update/${id}`, newItem).then(() => {

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
    var timesClicked =0;
    const delete_inventory = () => {
        timesClicked++;
        
        if (timesClicked > 1) {
            axios.delete(`http://localhost:5000/barInventory/delete/${id}`).then(() => {
                window.location = "/bar-manager"
                timesClicked=0
            }).catch((e) => {
                alert("error");
            })
        } else {
            document.getElementById('delete_btn').innerHTML = "Confirm Delete"
            document.getElementById("delete_btn").style.color = "white";
            document.getElementById("delete_btn").style.backgroundColor ="rgb(255, 0, 55)"
            document.getElementById("delete_btn").style.borderColor ="rgb(255, 0, 55)"
        }

    }





    return (
        <div className="display-box">
            <div id="edit-title" className="header-box"> Edit Beverages
            
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
                            <input type="text" className="form-input" id="name" defaultValue={BarData.item_id} onChange={(e) => {
                                setbarID(e.target.value)

                            }} required />
                            <span className="placeholder">Item ID</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="model" defaultValue={BarData.name} onChange={(e) => {
                                setname(e.target.value)
                            }} />
                            <span className="placeholder">Name</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="sku" defaultValue={BarData.quantity} onChange={(e) => {
                                setquantity(e.target.value)
                            }} />
                            <span className="placeholder">Quantity</span>
                        </label>

                        <br />

                    </div>
                    <div className="form2">
                        <div className="form2-content">

                            <label className="custom-field">
                                <select name="category" id="category" onChange={(e) => {
                                    setcategory(e.target.value)
                                }}  >
                                    <option >{BarData.category} </option>
                                    
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
                                            if (BarData.supplier != supplier) {
                                                return <option key={supplier} value={supplier}>{supplier}</option>
                                            }
                                        })
                                    }

                                </select>
                                <span className="placeholder">supplier</span>
                            </label>

                            <br />

                            <label className="custom-field">
                                <input type="number" className="form-input" min="1" id="quantity" defaultValue={BarData.quantity} onChange={(e) => {
                                    setquantity(e.target.value)
                                }} />
                                <span className="placeholder">quantity</span>
                            </label>


                            <label className="custom-field">
                                <input type="number" className="form-input" min="1" id="restock" defaultValue={BarData.restocklevel} onChange={(e) => {
                                    setrestock(e.target.value)
                                }} />
                                <span className="placeholder">restock level</span>
                            </label>
                            <br />
                            <div className="price">
                                <label className="custom-field">
                                    <input type="number" className="form-input" min="1" id="oprice" defaultValue={BarData.unitPrice} onChange={(e) => {
                                        setunitPrice(e.target.value)
                                    }} />
                                    <span className="placeholder">Unit price(Rs)</span>
                                </label>
                                <label className="custom-field">
                                    <input type="date" className="form-input" id="date" value={BarData.date && BarData.date.substring(0, 10)} onChange={(e) => {
                                        setdate(e.target.value)
                                    }} />
                                    <span className="placeholder">Date</span>
                                </label>

                            </div>




                        </div>
                        <div className="form2-btn">

                            <button id="update_inventory" style={{ display: "none" }} className="addinventory-btn">Update Inventory</button>

                        </div>



                    </div>

                </form>
            </fieldset>

            {/* </div> */}



        </div>
    )


}

export default EditBeverages;