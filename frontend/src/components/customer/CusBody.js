import './CusBody.css'
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

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


export default function Body() {

    const {loggedIn} = useContext(AuthContext);
    console.log(loggedIn);

    return (

        <Router>

            <div className="cusContent">



                {
                    loggedIn === true && <CusSideNav/>
                }
                

                {/* <AddBooking/> */}
              
                      
                      {/* customer Routes       */}
                      {/* <Route path="/up" exact component={Booking}/> */}
                      <Route exact path="/" component={Main}/>
                      <Route exact path="/CusSideNav" component={CusSideNav}/>
                      <Route path="/addbooking" exact component={AddBooking}/>
                      <Route path="/cusUpBookings" exact component={CusUpBookings}/>
                      <Route path="/cusPastBookings" exact component={CusPastBookings}/>
                      <Route path="/cusMyaccount" exact component={CusMyaccount}/>
                      <Route path="/cusLogin" exact component={CusLogin}/>
                      <Route path="/cusReg" exact component={CusReg}/>
                      <Route path="/cusLogout" exact component={cusLogout}/>
                      <Route path="/displayUpcoming/:id" exact component={DisplayUpcoming}/>
                      <Route path="/cusUpdateAccount" exact component={CusUpdateAccount}/>
                      <Route path="/addRegBooking" exact component={AddRegBooking}/>
                      <Route path="/displayPast/:id" exact component={DisplayPast}/>
                      <Route path="/myLoyalty" exact component={MyLoyalty}/>
                      
            
                </div>
        </Router>
    );
}