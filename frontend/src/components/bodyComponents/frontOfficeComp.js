import React, { useContext } from 'react';
import '../Header.css'
import FrontOfficeSideNav from '../FronOfficeSideNav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddAgent from '../Add_Ajencies';
import ViewAgent from '../ViewAllAgencies';
import ViewOne from '../ViewOneAgent';
import Delet from '../DeleteAgent';
import Bookings from '../ViewBookings';
import ActiveBookings from '../ActiveBookings';
import PassBookings from '../PassBooking';
import BookingReq from '../UpcomingBookings';
import Accept from '../AcceptRequset';
import Decline from '../DeleteBookingRequest';
import FinalBill from '../FinalBill';
import PaidBill from '../FinalBillPopup';
import Footer from '../Footer';
import Header from '../Header';
import ViewBills from '../ViewFinalBills'
export default function frontOfficeComp() {

    return (

        <Router>
              <head>
                <title>Front Office Management</title>
            </head>

            <Header />
            <div className="content">


                <FrontOfficeSideNav />


                <div className="block">

                    {/* Agencies Routes */}
                    <Route path="/front-office-manager/addAgent" exact component={AddAgent} />
                    <Route path="/front-office-manager/viewAllAgencies" exact component={ViewAgent} />
                    <Route path="/front-office-manager/viewOne/:id" exact component={ViewOne} />
                    <Route path="/front-office-manager/deleteAgent/:id" exact component={Delet} />

                    {/* Bookings Routes */}
                    <Route path="/front-office-manager" exact component={Bookings} />
                    <Route path="/front-office-manager/active" exact component={ActiveBookings} />
                    <Route path="/front-office-manager/pass" exact component={PassBookings} />
                    <Route path="/front-office-manager/request" exact component={BookingReq} />
                    <Route path="/front-office-manager/accept/:id" exact component={Accept} />
                    <Route path="/front-office-manager/decline/:id" exact component={Decline} />

                    {/* Final Bill */}
                    <Route path="/front-office-manager/FinalBill" exact component={FinalBill} />
                    <Route path="/front-office-manager/PaidBill/:id" exact component={PaidBill} />
                    <Route path="/front-office-manager/ViewFinalBill" exact component={ViewBills} />


                </div>

            </div>
            <Footer/>
        </Router>
    );
}
