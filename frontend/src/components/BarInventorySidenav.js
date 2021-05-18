import React from 'react';
import './sidenav.css'
import { Link } from 'react-router-dom'
import AddBarInventory from './AddBarInventory';



export default function BarInventorySidenav() {
    return (
        
            <div className="sidenav">
                
                <Link to="/bar-manager">View Beverages</Link>
                <Link to="/bar-manager/AddBarInventory">Add Beverages</Link>
                <Link to="/bar-manager/barReStock">Re-Stock Beverages</Link>
                <Link to="/bar-manager/deleteinventory">Genarate Report</Link>
                <Link to="/bar-manager/addBarOrder">Add Bar Orders</Link>
                <Link to="/bar-manager/viewbarorders">View Bar Orders</Link>
                
            </div>
    );
}