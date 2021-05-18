import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function AddHall() {



    const [id, setID] = useState(0);
    const [name, setname] = useState("");
    const [type, settype] = useState("");
    const [maxSeats, setmaxseats] = useState(0);
    const [maxTables, setmaxtables] = useState(0);
    const [features, setfeatures] = useState("");
    const [state, setstate] = useState("Free");
    const [price, setprice] = useState(0);

    //sending collected data to the database
    function sendData(e) {
        e.preventDefault();

        const newHall = {
            id, name, type, maxSeats, maxTables, features, state, price
        }

        axios.post(" http://localhost:5000/halls/add", newHall).then(() => {
            

            window.location = "/hall-manager"

        }).catch((e) => {
            alert("error");
        })

    }


    return (
        <div className="display-box">


            <div className="header-box"> Add Hall

                
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
                                setname(e.target.value)
                            }} required />
                            <span className="placeholder">Name</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="sku" onChange={(e) => {
                                settype(e.target.value)
                            }} />
                            <span className="placeholder">Type</span>
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
                                    setmaxseats(e.target.value)
                                }} />
                                <span className="placeholder">MaxSeats</span>
                            </label>
                            <br />
                            <label className="custom-field">
                                <input type="number" className="form-input" id="quantity" min="1"  onChange={(e) => {
                                    setmaxtables(e.target.value)
                                }} />
                                <span className="placeholder">MaxTables</span>
                            </label>


                            <br />
                            <div className="price">
                                <label className="custom-field">
                                    <input type="number" min="1" className="form-input" id="oprice" onChange={(e) => {
                                        setprice(e.target.value)
                                    }} />
                                    <span className="placeholder">Price</span>
                                </label>
                               

                            </div>




                        </div>
                        <div className="form2-btn">
                            <button className="addinventory-btn" >Add Hall</button>
                        </div>



                    </div>

                </form>
            </div>



        </div>
    )

}