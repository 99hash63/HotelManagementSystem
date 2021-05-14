import React from 'react';
import AddInventory from './AddInventory';
import InventoryList from './InventoryList';
import './Header.css'
import Sidenav from './sidenav';
import FrontOfficeSideNav from './FronOfficeSideNav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DisplayInventory from './DisplayInventory';
import Suppliers from './Suppliers';
import SuppliersView from './SupplierView';
import AddAgent from './Add_Ajencies';
import ViewAgent from './ViewAllAgencies';
import ViewOne from './ViewOneAgent';
import Delet from './DeleteAgent';
import Bookings from './ViewBookings';
import ActiveBookings from './ActiveBookings';
import PassBookings from './PassBooking';
import BookingReq from './UpcomingBookings';
import Accept from './AcceptRequset';
import Decline from './DeleteBookingRequest';
import ReStock from './ReStock';
import FinalBill from './FinalBill';
import InventoryCheckout from './InventoryCheckout';
import PaidBill from './FinalBillPopup';

// import Booking from './booking';

import CusSideNav from './customer/CusSideNav';
import Main from './customer/Main';
import AddBooking from './customer/AddBooking';
import CusLogin from './customer/CusLogin';
import CusReg from './customer/CusReg'

export default function Body() {
    return (

        <Router>
            <Switch>
           
                    <div className="content">
                    <Route path="/inventory-manager" exact component={Sidenav} ></Route>
               
                        <div className="block">
                            <Route path="/addinventory" exact component={AddInventory} />
                            <Route path="/inventory" exact component={InventoryList} />
                            <Route path="/displayinventory/:id" exact component={DisplayInventory} />
                            <Route path="/suppliers" exact component={Suppliers} />
                            <Route path="/supplierview/:id" exact component={SuppliersView} />
                            <Route path="/restock" exact component={ReStock} />
                            <Route path="/checkout" exact component={InventoryCheckout} />
                        </div>
                    </div>
             
            </Switch>

           
        </Router>
    );
}
