import React from 'react';
import AddInventory from './AddInventory';
import InventoryList from './InventoryList';
import './Header.css'
import Sidenav from './sidenav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DisplayInventory from './DisplayInventory';


export default function Body() {
    return (

        <Router>

            <div className="content">
                <Sidenav />

                <div className="block">
                    <Route path="/addinventory" exact component={AddInventory}/>
                    <Route path="/inventory" exact component={InventoryList}/>
                    <Route path="/displayinventory/:id" exact component={DisplayInventory}/>

                    
                </div>

            </div>
        </Router>
    );
}