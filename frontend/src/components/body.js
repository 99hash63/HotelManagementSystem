import React from 'react';
import AddInventory from './AddInventory';
import InventoryList from './InventoryList';
import './Header.css'
import Sidenav from './sidenav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DisplayInventory from './DisplayInventory';
import Suppliers from './Suppliers';
import SuppliersView from './SupplierView';
import BarInventorySidenav from './BarInventorySidenav';
import AddBarInventory from './AddBarInventory';



export default function Body() {
    return (

        <Router>

            <div className="content">
               
                <sidenav/>

                <div className="block">
                    <Route path="/addinventory" exact component={AddInventory}/>
                    <Route path="/inventory" exact component={InventoryList}/>
                    <Route path="/displayinventory/:id" exact component={DisplayInventory}/>
                    <Route path="/suppliers" exact component={Suppliers}/>
                    <Route path="/supplierview/:id" exact component={SuppliersView}/>

                    
                </div>


                <BarInventorySidenav/>

                <div className="block">

                        
                    <Route path="/AddBarInventory" exact component={AddBarInventory}/>
                    

                   

                    
                </div>

            </div>
        </Router>
    );
}