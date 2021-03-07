import React from 'react';
import './sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (
     
            <div className="sidenav">

                <Link to="/inventory">Inventory</Link>
                <Link to="/addinventory">Add Inventory</Link>
                <Link to="/">Re-Stock Now</Link>
                <Link to="/">Suppliers</Link>
                <Link to="/">Invoice</Link>


            </div>
      

    );
}