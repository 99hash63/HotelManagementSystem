import React, { useContext } from 'react';

// import Booking from './booking';
import CusSideNav from './CusSideNav';
import Main from './Main';
import AddBooking from './AddBooking';
import CusLogin from './CusLogin';
import CusReg from './CusReg'
import AuthContext from '../../context/AuthContext';
import cusLogout from './CusLogout';
import CusUpBookings from './CusUpBookings';
import CusPastBookings from './CusPastBookings';
import CusMyaccount from './CusMyaccount';
import CusUpdateAccount from './CusUpdateAccount';
import DisplayUpcoming from './DisplayUpcoming';
import AddRegBooking from './AddRegBooking';
import DisplayPast from './DisplayPast';
import MyLoyalty from './MyLoyalty';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import Footer from '../Footer';
import CusHeader from './CusHeader'

export default function Body() {

    const { loggedIn } = useContext(AuthContext);

    return (


        <Router>
              <head>
                <title>Hotel Sobana</title>
            </head>
                <CusHeader />

                <div className="content">

                    {
                        loggedIn === true && <CusSideNav />
                    }


                    {/* <AddBooking/> */}
                    {/* <Main/> */}


                    {/* customer Routes       */}
                    {/* <Route path="/up" exact component={Booking}/> */}
                    <Route path="/addbooking" exact component={AddBooking} />
                    <Route path="/cusUpBookings" exact component={CusUpBookings} />
                    <Route path="/cusPastBookings" exact component={CusPastBookings} />
                    <Route path="/cusMyaccount" exact component={CusMyaccount} />
                    <Route path="/cusLogin" exact component={CusLogin} />
                    <Route path="/cusReg" exact component={CusReg} />
                    <Route path="/cusLogout" exact component={cusLogout} />
                    <Route path="/displayUpcoming/:id" exact component={DisplayUpcoming} />
                    <Route path="/cusUpdateAccount" exact component={CusUpdateAccount} />
                    <Route path="/addRegBooking" exact component={AddRegBooking} />
                    <Route path="/displayPast/:id" exact component={DisplayPast} />
                    <Route path="/myLoyalty" exact component={MyLoyalty} />


                </div>
                <Footer />
          
        </Router>

    );
}