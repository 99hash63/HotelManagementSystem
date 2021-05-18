import './CusBody.css'
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router'

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
import MyDetails from './MyDetails';
import BookingConfirm from './BookingConfirm'
// import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'


//new imports
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../../pages/Home';
import Rooms from '../../pages/Rooms';
import SingleRoom from '../../pages/SingleRoom';
import Error from '../../pages/Error';
import Navbar from './subComponents/Navbar';
import About from '../../pages/About';
import Footer from './subComponents/Footer';
import Contact from '../../pages/Contact';
import Booknow from '../../pages/Booknow';
import {RoomProvider} from '../../context';

export default function Body() {

    const { loggedIn } = useContext(AuthContext);
    // const [testVal, setTestVal] = useState('hi');

    return (

        // <Router>
            <div >
                {
                    loggedIn === true && <MyDetails/>
                }
                

                {/* <AddBooking/> */}
              
                      
                      {/* customer Routes       */}
                      {/* <Route path="/up" exact component={Booking}/> */}

                <RoomProvider>
                    <BrowserRouter>
                        <Navbar/>
                        <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/rooms/" component={Rooms}/>
                        <Route exact path="/rooms/:slug" component={SingleRoom} />
                        <Route exact path="/booknow/:slug" component={Booknow} />


                        {/* <Route exact path="/" component={Main}/> */}
                  
                        <Route path="/addbooking"  exact component={AddBooking}/>
                        <Route  path="/cusLogin"  component={CusLogin}/>
                        <Route path="/cusReg" exact component={CusReg}/>

                        {/* <Route component={Error}/> */}
                        </Switch>
                        <Route   path="/CusSideNav"  component={CusSideNav}/>
                        <Route  path="/CusSideNav/cusUpBookings" exact component={CusUpBookings}/>
                        <Route  path="/CusSideNav/cusPastBookings" component={CusPastBookings}/>
                        <Route  path="/CusSideNav/cusMyaccount" component={CusMyaccount}/>
                        <Route  path="/CusSideNav/cusLogout" component={cusLogout}/>
                        <Route  path="/CusSideNav/displayUpcoming/:id" component={DisplayUpcoming}/>
                        <Route  path="/CusSideNav/cusUpdateAccount" component={CusUpdateAccount}/>
                        <Route  path="/CusSideNav/addRegBooking" component={AddRegBooking}/>
                        <Route  path="/CusSideNav/displayPast/:id" component={DisplayPast}/>
                        <Route  path="/CusSideNav/myLoyalty" component={MyLoyalty}/>
                        {/* <Route  path="/CusSideNav/addRegBooking/confirm" component={BookingConfirm}/> */}
                        <Footer/>
                    </BrowserRouter>
                </RoomProvider>



            
                </div>
        // </Router>
    );
}