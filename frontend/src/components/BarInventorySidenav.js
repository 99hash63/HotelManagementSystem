import React from 'react';
import './sidenav.css'
import { Link } from 'react-router-dom'
import AddBarInventory from './AddBarInventory';


export default function BarInventorySidenav() {
    return (
     
            <div className="sidenav">
                
                <Link to="/ViewBarInventory">View Beverages</Link>
                <Link to="/AddBarInventory">Add Beverages</Link>
                <Link to="/updateBarinventory">Re-Stock Beverages</Link>
                <Link to="/deleteinventory">Genarate Report</Link>
                
            </div>
      

    );
}