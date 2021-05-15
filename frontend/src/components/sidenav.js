import React, { useState, useEffect } from 'react';
import './sidenav.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    const [resock, setresock] = useState(0);
    const [inventory, setinventory] = useState([]);

    useEffect(() => { //fectching all inventory data from the DB
        axios.get("http://localhost:5000/inventory/").then((res) => {
            if (res.data.length > 0) {
                setinventory(res.data);
                //filtering inventory array to contain only inventory want to be restocked
                setresock(inventory.filter(stock => stock.quantity <= stock.restock_level))

            }
        }).catch((e) => {
            console.log(e);
        })



    }, [inventory])

    useEffect(() => {
        if (resock.length == 0) {
            document.getElementById('icon-button__badge').style.display = "none ";
        }
        else if (resock.length != 0) {

            document.getElementById('icon-button__badge').style.display = "block ";
        }

    }, [resock])




    return (

        <div className="sidenav">

            <Link to="/inventory-manager">Inventory</Link>
            <Link to="/inventory-manager/addinventory">Add Inventory</Link>

            <div className="icon-button">
                {/* displaying the inventory amount should be restocked as a notification in the restocknow button */}
                <span id="icon-button__badge" className="icon-button__badge " 
                style={{ display: 'none', textAlign: 'center', paddingTop: '5px' }} >{resock.length}</span>
                <Link to="/inventory-manager/restock">Re-Stock Now</Link>
            </div>

            <Link to="/inventory-manager/suppliers">Suppliers</Link>
            <Link to="/inventory-manager/checkout">Checkout</Link>


        </div>


    );
}