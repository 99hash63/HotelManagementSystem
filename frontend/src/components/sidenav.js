import React from 'react';
import './sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (
     
            <div className="sidenav">

                <Link to="/inventory">Inventory</Link>
                <Link to="/addinventory">Add Inventory</Link>
                <Link to="/restock">Re-Stock Now</Link>
                <Link to="/suppliers">Suppliers</Link>
                <Link to="/checkout">Checkout</Link>


            </div>
      

    );
}