import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function BookHall() {



    const [id, setID] = useState(0);
    const [cusNic, setcusNic] = useState(0);
    const [bookedDate, setbookedDate] = useState("");
    const [noOfSeates, setnoOfSeates] = useState(0);
    const [noOfTables, setnoOfTables] = useState(0);
    const [addedFeatures, setfeatures] = useState("");

    //sending collected data to the database
    function sendData(e) {
        e.preventDefault();

        const newBookHall = {
            id, cusNic, bookedDate, noOfSeates, noOfTables, addedFeatures
        }

        axios.post(" http://localhost:5000/bookedhalls/add", newBookHall).then(() => {
        
            window.location = "/hall-manager/bookedHallView"

        }).catch((e) => {
            alert("error");
        })

    }


    return (
        <div className="display-box">


            <div className="header-box"> Book Hall

                
            </div>

            {/* <hr /> */}
            <div className="content-box">

                <form onSubmit={sendData}>

                    <div className="form1">

                        <label className="custom-field">
                            <input type="number" className="form-input" id="name" onChange={(e) => {
                            setID(e.target.value)
                            }} required />
                            <span className="placeholder">ID</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="model" onChange={(e) => {
                                setcusNic(e.target.value)
                            }} required />
                            <span className="placeholder">Customer ID</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="date" className="form-input" id="sku" onChange={(e) => {
                                setbookedDate(e.target.value)
                            }} />
                            <span className="placeholder">Booked Date</span>
                        </label>

                        <br />

                        <label className="custom-field">
                            <textarea name="description" id="description" cols="0" rows="10" maxLength="500" onChange={(e) => {
                                setfeatures(e.target.value)
                            }} ></textarea>
                            <span className="placeholder">Features</span>
                        </label>
                        <br />

                    </div>
                    <div className="form2">
                        <div className="form2-content">

                        <label className="custom-field">
                                <input type="number" className="form-input" id="quantity" min="1"  onChange={(e) => {
                                    setnoOfTables(e.target.value)
                                }} />
                                <span className="placeholder">noOfTables</span>
                            </label>
                            <br />
    
                            <br />
                            <div className="price">
                                <label className="custom-field">
                                    <input type="number" min="1" className="form-input" id="oprice" onChange={(e) => {
                                        setnoOfSeates(e.target.value)
                                    }} />
                                    <span className="placeholder">noOfSeats</span>
                                </label>
                               

                            </div>




                        </div>
                        <div className="form2-btn">
                            <button className="addinventory-btn" >Book Hall</button>
                        </div>



                    </div>

                </form>
            </div>



        </div>
    )

}