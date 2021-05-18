import React, { useContext } from 'react';
import HallNav from '../HallManagerSideNav';
import '../Header.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Footer from '../Footer';
import Header from '../Header';

import BookHall from '../BookHall'
import HallList from '../ReceptionHallList';
import AddHall from '../AddHall';
import EditHall from '../EditHall'
import BookedHallView from '../ViewBookedHall';
import EditBookHall from '../EditBookedHalls';


export default function hallComp() {

    return (

        <Router>
            <head>
                <title>Inventory Management</title>
            </head>
            <Header />

            <div className="content">

                <HallNav />

                <div className="block">

                    <Route path="/hall-manager" exact component={HallList} />
                    <Route path="/hall-manager/addhall" exact component={AddHall} />
                    <Route path="/hall-manager/bookhall" exact component={BookHall} />
                    <Route path="/hall-manager/edithall/:id" exact component={EditHall} />
                    <Route path="/hall-manager/bookedHallView" exact component={BookedHallView} />
                    <Route path="/hall-manager/editBookedHall/:id" exact component={EditBookHall} />

                </div>

            </div>
            <Footer />
        </Router>
    );
}
