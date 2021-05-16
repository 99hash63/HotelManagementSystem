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
            <head>
                <title>Inventory Management</title>
            </head>
            <Header />

            <div className="content">

                <Sidenav />

                <div className="block">

                    <Route path="/inventory-manager/addinventory" exact component={AddInventory} />
                    <Route path="/inventory-manager" exact component={InventoryList} />
                    <Route path="/inventory-manager/displayinventory/:id" exact component={DisplayInventory} />
                    <Route path="/inventory-manager/suppliers" exact component={Suppliers} />
                    <Route path="/inventory-manager/supplierview/:id" exact component={SuppliersView} />
                    <Route path="/inventory-manager/restock" exact component={ReStock} />
                    <Route path="/inventory-manager/checkout" exact component={InventoryCheckout} />

                </div>

            </div>
            <Footer />
        </Router>
    );
}
