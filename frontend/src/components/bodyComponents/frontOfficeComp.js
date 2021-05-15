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


export default function frontOfficeComp() {

    return (

        <Router>

            <Header />
            <div className="content">


                <FrontOfficeSideNav />


                <div className="block">


                    {/* Agencies Routes */}
                    <Route path="/addAgent" exact component={AddAgent} />
                    <Route path="/viewAllAgencies" exact component={ViewAgent} />
                    <Route path="/viewOne/:id" exact component={ViewOne} />
                    <Route path="/deleteAgent/:id" exact component={Delet} />

                    {/* Bookings Routes */}
                    <Route path="/front-office-manager" exact component={Bookings} />
                    <Route path="/active" exact component={ActiveBookings} />
                    <Route path="/pass" exact component={PassBookings} />
                    <Route path="/request" exact component={BookingReq} />
                    <Route path="/accept/:id" exact component={Accept} />
                    <Route path="/decline/:id" exact component={Decline} />

                    {/* Final Bill */}
                    <Route path="/FinalBill" exact component={FinalBill} />
                    <Route path="/PaidBill/:id" exact component={PaidBill} />


                </div>

            </div>
            <Footer/>
        </Router>
    );
}
