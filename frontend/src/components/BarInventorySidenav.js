import React from 'react';
import './sidenav.css'
import { Link } from 'react-router-dom'
import AddBarInventory from './AddBarInventory';



export default function BarInventorySidenav() {
    return (
        
            <div className="sidenav">
                
                <Link to="/viewbeverages">View Beverages</Link>
                <Link to="/AddBarInventory">Add Beverages</Link>
                <Link to="/barReStock">Re-Stock Beverages</Link>
                <Link to="/deleteinventory">Genarate Report</Link>
                <Link to="/addBarOrder">Add Bar Orders</Link>
                <Link to="/viewbarorders">View Bar Orders</Link>
                
            </div>
    );
}