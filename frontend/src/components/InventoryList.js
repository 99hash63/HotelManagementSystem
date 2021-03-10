import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryList.css'
import {Link} from 'react-router-dom'


export default function AddInventory() {

    const [inventory, setinventory] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/inventory/").then((res) => {
            if (res.data.length > 0) {
                setinventory(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    },[])



    return (
        <div className="display-box">
            <div className="header-box"> Inventory </div>
            <div className="content-box-list">
                <table id="items">

                    <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>SKU</th>
                        <th>Category</th>
                        <th>Supplier</th>
                        <th>Quantity</th>
                        <th>date</th>
                        <th></th>

                    </tr>

                    {
                        inventory.map(function (f) {
                            return <tr>

                                <td >{f.name}</td>
                                <td >{f.model} </td>
                                <td >{f.sku} </td>
                                <td >{f.category} </td>
                                <td >{f.supplier} </td>
                                <td >{f.quantity} </td>
                                <td >{f.date.substring(0, 10)} </td>
                                <td > <Link to={"/displayinventory/"+f._id} >view</Link></td>
                               
                            </tr>

                        })
                    }

                </table>
            </div>


        </div >

    )
}