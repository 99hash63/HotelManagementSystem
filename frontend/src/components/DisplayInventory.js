import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DisplayInventory = () => {

    const {id} = useParams();

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
    const [selling_price, setsprice] = useState("");
    const [profit, setprofit] = useState("");
    const [date, setdate] = useState("");

    const [getCategory, setgetCategory] = useState([]);
    const [getSupplier, setgetSupplier] = useState([]);

    const [getInventory, setgetInventory] = useState([]);

    
  

    useEffect(() => {


        axios.get("http://localhost:5000/category/").then((res) => {
            if (res.data.length > 0) {
                setgetCategory(res.data.map(category => category.name))
            }
        }).catch((e)=>{
            console.log(e);
        })

        axios.get("http://localhost:5000/supplier/").then((res) => {
            if (res.data.length > 0) {
                setgetSupplier(res.data.map(supplier => supplier.name))
            }
        }).catch((e)=>{
            console.log(e);
        })

        axios.get(`http://localhost:5000/inventory/get/${id}`).then(res =>{
           console.log(res.data);
           setgetInventory(res.data.item)

        })

    },[])

   

    function sendData(e) {
        e.preventDefault();

        const newItem = {
            name, model, sku, category, supplier, description, mesurement, quantity, restock_level, original_price, selling_price, profit, date
        }

        fetch(" http://localhost:5000/inventory/add", newItem).then(() => {

        }).catch((e) => {
            alert("error");
        })

    }


    return (
        <div className="display-box">

            <div className="header-box">Edit Inventory </div>
            {/* <hr /> */}
            <div className="content-box">
                <form onSubmit={sendData}>

                    <div className="form1 displayInventory">

                        <label className="custom-field">
                            <input type="text" className="form-input" id="name" defaultValue={getInventory.name} onChange={(e) => {
                                setname(e.target.value)
                            }} required />
                            <span className="placeholder">name</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="model" defaultValue={getInventory.model}  onChange={(e) => {
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
                            <textarea name="description"defaultValue={getInventory.description} id="description" cols="0" rows="10" maxLength="500" onChange={(e) => {
                                setdescription(e.target.value)
                            }} ></textarea>
                            <span className="placeholder">description</span>
                        </label>
                        <br />

                    </div>
                    <div className="form2">
                        <div className="form2-content">

                            <label className="custom-field">
                                <select name="category" id="category"onChange={(e) => {
                                    setcategory(e.target.value)
                                }}  >
                                    <option key={category} value={category}>{getInventory.category} </option>
                                    {
                                        getCategory.map(function (category) {
                                            if (getInventory.category != category ) {
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
                                     <option key={supplier} value={supplier}>{getInventory.supplier} </option>
                                    {
                                        getSupplier.map(function (supplier) {
                                            if (getInventory.supplier != supplier ){
                                            return <option key={supplier}  value={supplier}>{supplier}</option>}
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
                                <input type="number" className="form-input" id="quantity" defaultValue={getInventory.quantity} onChange={(e) => {
                                    setquantity(e.target.value)
                                }} />
                                <span className="placeholder">quantity</span>
                            </label>


                            <label className="custom-field">
                                <input type="number" className="form-input" id="restock" defaultValue={getInventory.restock_level} onChange={(e) => {
                                    setrestock(e.target.value)
                                }} />
                                <span className="placeholder">restock level</span>
                            </label>
                            <br />
                            <div className="price">
                                <label className="custom-field">
                                    <input type="number" className="form-input" id="oprice" defaultValue={getInventory.original_price} onChange={(e) => {
                                        setoprice(e.target.value)
                                    }} />
                                    <span className="placeholder">buy price(Rs)</span>
                                </label>


                                <label className="custom-field">
                                    <input type="number" className="form-input" id="sprice" defaultValue={getInventory.selling_price} onChange={(e) => {
                                        setsprice(e.target.value)
                                    }} />
                                    <span className="placeholder">selling price(Rs)</span>
                                </label>


                                <label className="custom-field">
                                    <input type="number" className="form-input" id="profit" defaultValue={getInventory.profit} onChange={(e) => {
                                        setprofit(e.target.value)
                                    }} />
                                    <span className="placeholder">profit(Rs)</span>
                                </label>
                                <br />

                            </div>



                            <label className="custom-field">
                                <input type="date" className="form-input" id="date" value={getInventory.date && getInventory.date.substring(0, 10)} onChange={(e) => {
                                    setdate(e.target.value)
                                }} />
                                <span className="placeholder">date</span>
                            </label>
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

export default DisplayInventory;