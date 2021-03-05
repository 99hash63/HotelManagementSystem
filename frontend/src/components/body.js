import React from 'react';
import AddInventory from './AddInventory';
import './Header.css'
import Sidenav from './sidenav';


export default function Body() {
    return (

        <div className="content">

            <Sidenav />
            <div className="block">
                <AddInventory/>
            </div>
        </div>
    );
}