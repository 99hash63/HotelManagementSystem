import React, { useState, useEffect } from 'react';
import './AddBarInventory.css'
import axios from 'axios'
import AddCategory from './AddCategory';

export default function AddBarOrders() {

    const [order_no, setorderno] = useState("");
    const [item_id, setitemid] = useState("");
    const [name, setname] = useState("");
    const [category, setcategory] = useState("");
    const [quantity, setquantity] = useState("");
    const [unitPrice, setoprice] = useState(0);
    const [discount, setdiscount] = useState("");
  
    const [date, setdate] = useState("");
    const [customer_nic, setcustomernic] = useState("");
    const [total_amount, settotalamount] = useState("");

    const [getCategory, setgetCategory] = useState([]);

    const [orderitems, setorderitems] = useState([]);

    {/*const [print, setPrint] = useState(false);*/}



        //sending collected data to the database
        function sendData(e) {
            e.preventDefault();
    
            const newItem = {
                order_no,item_id,name,quantity, unitPrice
            }
            const newItem2 = {
                order_no,total_amount,discount,customer_nic
            }
    
            axios.post(" http://localhost:5000/orderItems/add", newItem).then(() => {
    
                window.location = "/viewbarorders"
    
            }).catch((e) => {
                alert("error");
            })
            axios.post(" http://localhost:5000/barOrders/add", newItem2).then(() => {
    
                window.location = "/viewfinalorder"
    
            }).catch((e) => {
                alert("error");
            })
    
        }
    //fetching all the barorders rows from the database
    useEffect(() => {
        axios.get("http://localhost:5000/orderItems/retrieve").then((res) => {
            if (res.data.length > 0) {
                setorderitems(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    }, [])
   

    return (

        <div className="display-box">

            <div className="header-box"> Add Bar Orders</div>

            {/* <hr /> */}
            <div className="content-box">
                <form>
                    <div className="form1">

                        <label className="custom-field">
                            <input type="text" className="form-input" id="order_no" 
                            onChange={(e) =>{
                                setorderno(e.target.value)
                            }}/>
                            <span className="placeholder">Order Number</span>
                        </label>
                        
                        <label className="custom-field">
                            <input type="text" className="form-input" id="item_id" 
                            onChange={(e) =>{
                                setitemid(e.target.value)
                            }}/>
                            <span className="placeholder">Item ID</span>
                        </label>
                     

                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="name"
                            onChange={(e) =>{
                                setname(e.target.value)
                            }}/>
                            <span className="placeholder">name</span>
                        </label>
                        <br />
                        <div className="orders-table">
                        <p><strong>Billing Area </strong></p>
                        <table id="usersTable" class="w3-table-all">

              

                       
                            <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Unit Price(Rs.)</th>
                                <th>Qty</th>
                                <th>Discount</th>
                                <th>Total(Rs.)</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    orderitems.slice(0).reverse().map(function (f){
                                        return<tr>

                                            <td>{f.name}</td>
                                            <td>{f.unitPrice}</td>
                                            <td>{f.quantity}</td>
                                            <td>{f.discount}</td>
                                            <td>{f.total_amount}</td>
                                            </tr>
                                    })
                                }
                            </tbody>

                            {/*<tr class="item">
                                <td>Cock(500ml)</td>
                                <td>80.00</td>
                                <td>3</td>
                                <td>-</td>
                                <td>240.00</td>
                            </tr>
                            <tr class="item">
                                <td>DOL(1.5L)</td>
                                <td>1640.00</td>
                                <td>2</td>
                                <td>-</td>
                                <td>3280.00</td>
                            </tr>
                           */}

                            </table>
                            
                        </div>


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
                                <input type="string" className="form-input" id="cus_nic"
                                onChange={(e) =>{
                                    setcustomernic(e.target.value)
                                }}/>
                                <span className="placeholder">Customer NIC</span>
                            </label>

                            <br />

                            <label className="custom-field">
                                <input type="number" className="form-input" id="quantity"
                                onChange={(e) =>{
                                    setquantity(e.target.value)
                                }}/>
                                <span className="placeholder">quantity</span>
                            </label>

                            <label className="custom-field">
                                <input type="number" className="form-input" id="uprice"
                                onChange={(e) =>{
                                    setoprice(e.target.value)
                                }}/>
                                <span className="placeholder">Unit Price</span>
                            </label>
                            <label className="custom-field">
                                <input type="number" className="form-input" id="discount"
                                onChange={(e) =>{
                                    setdiscount(e.target.value)
                                }}/>
                                <span className="placeholder">Discount</span>
                            </label>
                            <br />
                            <div className="price">
                                <label className="custom-field">
                                    <input type="number" className="form-input" id="tprice"
                                    onChange={(e) =>{
                                        settotalamount(e.target.value)
                                    }}/>
                                    <span className="placeholder">Total Amount</span>
                                </label>

                                <label className="custom-field">
                                    <input type="date" className="form-input" id="date"
                                    onChange={(e) =>{
                                        setdate(e.target.value)
                                    }}/>
                                    <span className="placeholder">date</span>
                                </label>

                            </div>

 

                        </div>
                        <div className="form2-btn">
                            
                            <button className="addoneorder-btn"  >Add</button>
                            <button className="addbarorders-btn">Add Order</button>
                        </div>

                    </div>

                </form>
            </div>

        </div>
    )

}