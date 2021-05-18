import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryList.css'
import { Link } from 'react-router-dom'



export default function BookedHallView() {

    const [BookedHalls, setBookedHalls] = useState([]);

    //fetching all the BookedHalls rows from the database
    useEffect(() => {
        axios.get("http://localhost:5000/bookedhalls/view/").then((res) => {
            if (res.data.length > 0) {
                setBookedHalls(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    }, [])


    


    

    return (
        <div className="display-box">
            <div className="header-box">
                <div>Booked Halls</div>

                <div className="total-inventory-display">
                    <span id="total-inventory-display-total">{BookedHalls.length}</span> <br />
                    <span id="total-inventory-display-text">Total Booked Halls</span>
                </div>
            </div>

            <div className="content-box-list">
                <table >
                    <thead>
                        <tr>
                            <th>Hall ID</th>
                            <th>Customer NIC</th>
                            <th>Booked Date</th>
                            <th>noOfSeats</th>
                            <th>noOfTables</th>
                            <th>Features</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            BookedHalls.slice(0).reverse().map(function (f) {
                                return <tr>

                                    <td >{f.id}</td>
                                    <td >{f.cusNic} </td>
                                    <td >{f.bookedDate.substring(0, 10)} </td>
                                    <td >{f.noOfSeates} </td>
                                    <td >{f.noOfTables} </td>
                                    <td >{f.addedFeatures} </td>
                                    <td > <Link to={"/hall-manager/editBookedHall/" + f._id} ><i class="far fa-edit"></i></Link></td>

                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >

    )
}