import React, { useContext } from 'react';
import AddInventory from './AddInventory';
import InventoryList from './InventoryList';
import './Header.css'
import Sidenav from './sidenav';
import FrontOfficeSideNav from './FronOfficeSideNav';
import RoomSidebar from './RoomSidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DisplayInventory from './DisplayInventory';
import Suppliers from './Suppliers';
import SuppliersView from './SupplierView';
import BarInventorySidenav from './BarInventorySidenav';
import AddBarInventory from './AddBarInventory';
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
import HallNav from './HallManagerSideNav';
import FinalBill from './FinalBill';
import InventoryCheckout from './InventoryCheckout';
import PaidBill from './FinalBillPopup';
import viewBarorders from './viewbarorders'

// import Booking from './booking';


import CusSideNav from './customer/CusSideNav';
import Main from './customer/Main';
import AddBooking from './customer/AddBooking';
import CusLogin from './customer/CusLogin';
import CusReg from './customer/CusReg'
import AddRoom from './AddRoom';
//import ViewRoom from './ViewRooms';
import RoomType from './RoomType';
import RoomTypeView from './RoomTypeView';
import UpdateAndDeleteRoom from './UpdateAndDeleteRoom';

import ViewRoom from './ViewRooms';



//import reception hall componenets

import BookHall from './BookHall'
import HallList from './ReceptionHallList';
import AddHall from './AddHall';
import EditHall from './EditHall'
import BookedHallView from './ViewBookedHall';
import EditBookHall from './EditBookedHalls';



export default function Body() {

    const {loggedIn} = useContext(AuthContext);
    console.log(loggedIn);

    return (

        <Router>

           

            <div className="content">

                {/* {
                    loggedIn === true && <CusSideNav/>
                }
                 */}


                <BarInventorySidenav/>
                {/* <AddBooking/> */}
                {/* <Main/> */}
                {/* <Sidenav /> */}
                {/* <FrontOfficeSideNav/> */}
                <HallNav/>
                <div className="block">
                

                {/* <CusSideNav/> */}
                {/* <Login/>
                <Route path="/frontOffice" exact component={FrontOfficeSideNav}/>
                <Route path="/inventory" exact component={Sidenav}/> */}
                

                <div className="block">
                
               



                    {/* Inventry Manager Routes */}
                    <Route path="/addinventory" exact component={AddInventory}/>
                    <Route path="/inventory" exact component={InventoryList}/>
                    <Route path="/displayinventory/:id" exact component={DisplayInventory}/>
                    <Route path="/suppliers" exact component={Suppliers}/>
                    <Route path="/supplierview/:id" exact component={SuppliersView}/>
                    <Route path="/restock" exact component={ReStock}/>
                    <Route path="/checkout" exact component={InventoryCheckout}/>



                     
                     {/* Front Office Manager Routes */}
                        {/* Agencies Routes */}
                            <Route path="/addAgent" exact component={AddAgent}/>
                            <Route path="/viewAllAgencies" exact component={ViewAgent}/>
                            <Route path="/viewOne/:id" exact component={ViewOne} />
                            <Route path="/deleteAgent/:id" exact component={Delet} />

                        {/* Bookings Routes */}
                            <Route path="/bookings" exact component={Bookings} />
                            <Route path="/active" exact component={ActiveBookings} />
                            <Route path="/pass" exact component={PassBookings} />
                            <Route path="/request" exact component={BookingReq} />
                            <Route path="/accept/:id" exact component={Accept} />
                            <Route path="/decline/:id" exact component={Decline} />




                        {/* Reception Hall Manager Routes */}
                            <Route path="/viewhall" exact component={HallList}/>
                            <Route path="/addhall" exact component={AddHall}/>
                            <Route path="/bookhall" exact component={BookHall}/>
                            <Route path="/edithall/:id" exact component={EditHall}/>
                            <Route path="/bookedHallView" exact component={BookedHallView}/>
                            <Route path="/editBookedHall/:id" exact component={EditBookHall}/>
                        


                </div>
                        {/* Final Bill */}
                             <Route path="/FinalBill" exact component={FinalBill} />
                             <Route path="/PaidBill/:id" exact component={PaidBill} />
                             
                            


                      {/* end FrontOffice Manager Rout */}
                      
                      
                      {/* customer Routes       */}
                      {/* <Route path="/up" exact component={Booking}/> */}
                      <Route path="/addbooking" exact component={AddBooking}/>
                      <Route path="/cusLogin" exact component={CusLogin}/>
                      <Route path="/cusReg" exact component={CusReg}/>
                      <Route path="/cusLogout" exact component={cusLogout}/>



                      {/* Room Management */}
                      <Route path="/rooms" exact component={ViewRoom}/>
                      <Route path="/addroom" exact component={AddRoom}/>
                      <Route path="/roomType" exact component={RoomType}/>
                      
                    <Route path="/roomTypeview/:id" exact component={RoomTypeView}/>
                    <Route path="/roomUD/:id" exact component={UpdateAndDeleteRoom}/>
                      
                      {/* <Route path="/updateroom" exact component={AddRoom}/>
                      <Route path="/deleteroom" exact component={AddRoom}/> */}



                </div>



                <div className="block">

                        {/* Bar Manager Routes */}

                        {/*Bar Inventory Management Routes */}
                        
                    <Route path="/AddBarInventory" exact component={AddBarInventory}/>
                    <Route path="/viewbeverages" exact component={ViewBeverages}/>
                    <Route path="/barReStock" exact component={BarReStock}/>
                    <Route path="/editBeverages/:id" exact component={EditBeverages}/>
                    <Route path="/viewBarorders" exact component={viewBarorders}/>
                    <Route path="/addBarOrder" exact component={AddBarOrders}/>
                        {/*Bar Order Management Routes */}
                   
                    
                 
                 
                    



                     
                     {/* Front Office Manager Routes */}
                        {/* Agencies Routes */}
                            <Route path="/addAgent" exact component={AddAgent}/>
                            <Route path="/viewAllAgencies" exact component={ViewAgent}/>
                            <Route path="/viewOne/:id" exact component={ViewOne} />
                            <Route path="/deleteAgent/:id" exact component={Delet} />

                        {/* Bookings Routes */}
                            <Route path="/bookings" exact component={Bookings} />
                            <Route path="/active" exact component={ActiveBookings} />
                            <Route path="/pass" exact component={PassBookings} />
                            <Route path="/request" exact component={BookingReq} />
                            <Route path="/accept/:id" exact component={Accept} />
                            {/* <Route path="/decline/:id" exact component={Decline} /> */}

                        {/* Final Bill */}
                             <Route path="/FinalBill" exact component={FinalBill} />
                             <Route path="/PaidBill/:id" exact component={PaidBill} />
                             
                            


                      {/* end FrontOffice Manager Rout */}
                      
                      
                      {/* customer Routes       */}
                      {/* <Route path="/up" exact component={Booking}/> */}
                      <Route path="/addbooking" exact component={AddBooking}/>
                      <Route path="/cusLogin" exact component={CusLogin}/>
                      <Route path="/cusReg" exact component={CusReg}/>

            
                </div>
                </div>

            
        </Router>
    );
}
