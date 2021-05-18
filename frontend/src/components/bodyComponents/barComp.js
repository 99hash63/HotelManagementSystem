import React, { useContext } from 'react';
import AddInventory from '../AddInventory';
import InventoryList from '../InventoryList';
import '../Header.css'
import Sidenav from '../sidenav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ViewBeverages from '../viewbeverages';
import viewBarorders from '../viewbarorders'
import BarReStock from '../BarRestock';
import EditBeverages from '../editBeverages';
import AddBarOrders from '../AddBarOrders';
import BarInventorySidenav from '../BarInventorySidenav';
import AddBarInventory from '../AddBarInventory';


import Footer from '../Footer';
import Header from '../Header';

export default function barComp() {

    return (

        <Router>
            <head>
                <title>Bar Management</title>
            </head>
            <Header />

            <div className="content">

            <BarInventorySidenav/>

                <div className="block">

                <Route path="/bar-manager/AddBarInventory" exact component={AddBarInventory}/>
                    <Route path="/bar-manager" exact component={ViewBeverages}/>
                    <Route path="/bar-manager/barReStock" exact component={BarReStock}/>
                    <Route path="/bar-manager/editBeverages/:id" exact component={EditBeverages}/>
                    <Route path="/bar-manager/viewBarorders" exact component={viewBarorders}/>
                    <Route path="/bar-manager/addBarOrder" exact component={AddBarOrders}/>

                </div>

            </div>
            <Footer />
        </Router>
    );
}
