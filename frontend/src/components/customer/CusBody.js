import './CusBody.css'
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
// import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'



//new imports
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
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

    return (

        // <Router>

            <div >


{/* 
                {
                    loggedIn === true && <CusSideNav/>
                } */}
                

                {/* <AddBooking/> */}
              
                      
                      {/* customer Routes       */}
                      {/* <Route path="/up" exact component={Booking}/> */}


                      {/* <Route exact path="/" component={Main}/>
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
                       */}




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
                        <Route component={Error}/>
                        </Switch>
                        <Footer/>
                    </BrowserRouter>
                </RoomProvider>



            
                </div>
        // </Router>
    );
}