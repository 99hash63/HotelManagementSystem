import React from 'react';
import './sidenav.css'

export default function Sidenav() {
    return (
     
            <div className="sidenav">

                <a href="/inventory">Inventory</a> 
                <a href="/addinventory">Add Inventory</a>
                <a href="/">Re-Stock Now</a>
                <a href="/">Suppliers</a>
                <a href="/">Invoice</a>


            </div>
      

    );
}