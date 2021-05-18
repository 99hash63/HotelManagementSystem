import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryList.css'
import { Link } from 'react-router-dom'



export default function HallList() {

    const [inventory, setinventory] = useState([]);

    //fetching all the reception hall rows from the database
    useEffect(() => {
        axios.get("http://localhost:5000/halls/").then((res) => {
            if (res.data.length > 0) {
                setinventory(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    }, [])


    

    return (
        <div className="display-box">
            <div className="header-box">
                <div>Reception Halls</div>

                <div className="total-inventory-display">
                    <span id="total-inventory-display-total">{inventory.length}</span> <br />
                    <span id="total-inventory-display-text">Total Halls</span>
                </div>
            </div>

            <div className="content-box-list">
                <table >
                    <thead>
                        <tr>
                            <th>Hall ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>MaxSeats</th>
                            <th>MaxTables</th>
                            <th>Features</th>
                            <th>State</th>
                            <th>Price</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventory.slice(0).reverse().map(function (f) {
                                return <tr>

                                    <td >{f.id}</td>
                                    <td >{f.name} </td>
                                    <td >{f.type} </td>
                                    <td >{f.maxSeats} </td>
                                    <td >{f.maxTables} </td>
                                    <td >{f.features} </td>
                                    <td >{f.state} </td>
                                    <td>{f.price}</td>
                                    <td > <Link to={"/hall-manager/edithall/" + f._id} ><i class="far fa-edit"></i></Link></td>

                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >

    )
}