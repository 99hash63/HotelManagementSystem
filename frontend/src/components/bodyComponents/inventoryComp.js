import React, { useContext } from 'react';
import AddInventory from '../AddInventory';
import InventoryList from '../InventoryList';
import '../Header.css'
import Sidenav from '../sidenav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DisplayInventory from '../DisplayInventory';
import Suppliers from '../Suppliers';
import SuppliersView from '../SupplierView';
import ReStock from '../ReStock';
import InventoryCheckout from '../InventoryCheckout';
import Footer from '../Footer';
import Header from '../Header';

export default function inventoryComp() {

    return (

        <Router>
            <Header/>

            <div className="content">
                
                <Sidenav />
                
                <div className="block">
            
                    <Route path="/addinventory" exact component={AddInventory}/>
                    <Route path="/inventory-manager" exact component={InventoryList}/>
                    <Route path="/displayinventory/:id" exact component={DisplayInventory}/>
                    <Route path="/suppliers" exact component={Suppliers}/>
                    <Route path="/supplierview/:id" exact component={SuppliersView}/>
                    <Route path="/restock" exact component={ReStock}/>
                    <Route path="/checkout" exact component={InventoryCheckout}/>
            
                </div>

            </div>
            <Footer/>
        </Router>
    );
}
