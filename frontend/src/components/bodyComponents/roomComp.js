import React, { useContext } from 'react';
import AddInventory from '../AddInventory';
import InventoryList from '../InventoryList';
import '../Header.css'
import RoomSidebar from '../RoomSidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddRoom from '../AddRoom';
import RoomType from '../RoomType';
import RoomTypeView from '../RoomTypeView';
import UpdateAndDeleteRoom from '../UpdateAndDeleteRoom';
import ViewRoom from '../ViewRooms';
import Footer from '../Footer';
import Header from '../Header';

export default function roomComp() {

    return (

        <Router>
            <head>
                <title>Room Management</title>
            </head>
            <Header />

            <div className="content">

                <RoomSidebar />

                <div className="block">

                    <Route path="/room-manager" exact component={ViewRoom} />
                    <Route path="/room-manager/addroom" exact component={AddRoom} />
                    <Route path="/room-manager/roomType" exact component={RoomType} />
                    <Route path="/room-manager/roomTypeview/:id" exact component={RoomTypeView} />
                    <Route path="/room-manager/roomUD/:id" exact component={UpdateAndDeleteRoom} />
                </div>

            </div>
            <Footer />
        </Router>
    );
}
