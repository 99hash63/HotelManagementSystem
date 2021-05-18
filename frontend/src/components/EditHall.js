import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function EditHall() {

    const { id } = useParams();

    const [hallid, setID] = useState(0);
    const [name, setname] = useState("");
    const [type, settype] = useState("");
    const [maxSeats, setmaxseats] = useState(0);
    const [maxTables, setmaxtables] = useState(0);
    const [features, setfeatures] = useState("");
    const [state, setstate] = useState("Free");
    const [price, setprice] = useState(0);

    const [hallData, sethallData] = useState(0);

    

    useEffect(() => {
    
     
        axios.get(`http://localhost:5000/halls/get/${id}`).then(res => {
            sethallData(res.data.Hall)
            setID(res.data.Hall.id)
            setname(res.data.Hall.name)
            settype(res.data.Hall.type)
            setmaxseats(res.data.Hall.maxSeats)
            setmaxtables(res.data.Hall.maxTables)
            setfeatures(res.data.Hall.features)
            setstate(res.data.Hall.state)
            setprice(res.data.Hall.price)



            //setting the data that is fetched from the database 

        }).catch((e) => {
            console.log(e);
        })


    }, [])


    //sending collected data to the database
    function sendData(e) {
        e.preventDefault();

        const newHall = {
            hallid, name, type, maxSeats, maxTables, features, state, price
        }

        axios.put(`http://localhost:5000/halls/update/${id}`, newHall).then(() => {

        }).catch((e) => {
            alert("error");
        })

    }



    //delete inventory button funtion
    var timesClicked =0;
    const delete_inventory = () => {
        timesClicked++;
        
        if (timesClicked > 1) {
            axios.delete(`http://localhost:5000/halls/delete/${id}`).then(() => {
                window.location = "/hall-manager"
                timesClicked=0
            }).catch((e) => {
                alert("error");
            })
        } else {
            document.getElementById('delete_btn').innerHTML = "Confirm Delete"
            document.getElementById("delete_btn").style.color = "white";
            document.getElementById("delete_btn").style.backgroundColor ="rgb(255, 0, 55)"
            document.getElementById("delete_btn").style.borderColor ="rgb(255, 0, 55)"
        }

    }

    return (
        <div className="display-box">


            <div className="header-box"> Edit Hall
             
            <div>
                  
                    <button id="delete_btn"onClick={delete_inventory}  >Delete</button>
                </div>

                
            </div>

            {/* <hr /> */}
            <div className="content-box">

                <form onSubmit={sendData}>

                    <div className="form1">

                        <label className="custom-field">
                            <input type="number" className="form-input" defaultValue={hallData.id} id="name" onChange={(e) => {
                            setID(e.target.value)
                            }} required />
                            <span className="placeholder">ID</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="model"defaultValue={hallData.name} onChange={(e) => {
                                setname(e.target.value)
                            }} required />
                            <span className="placeholder">Name</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="sku" defaultValue={hallData.type} onChange={(e) => {
                                settype(e.target.value)
                            }} />
                            <span className="placeholder">Type</span>
                        </label>

                        <br />

                        <label className="custom-field">
                            <textarea name="description" defaultValue={hallData.features} id="description" cols="0" rows="10" maxLength="500" onChange={(e) => {
                                setfeatures(e.target.value)
                            }} ></textarea>
                            <span className="placeholder">Features</span>
                        </label>
                        <br />

                    </div>
                    <div className="form2">
                        <div className="form2-content">

                        <label className="custom-field">
                                <input type="number" defaultValue={hallData.maxSeats} className="form-input" id="quantity" min="1"  onChange={(e) => {
                                    setmaxseats(e.target.value)
                                }} />
                                <span className="placeholder">MaxSeats</span>
                            </label>
                            <br />
                            <label className="custom-field">
                                <input type="number" defaultValue={hallData.maxTables} className="form-input" id="quantity" min="1"  onChange={(e) => {
                                    setmaxtables(e.target.value)
                                }} />
                                <span className="placeholder">MaxTables</span>
                            </label>


                            <br />
                            <div className="price">
                                <label className="custom-field">
                                    <input type="number" min="1" defaultValue={hallData.price} className="form-input" id="oprice" onChange={(e) => {
                                        setprice(e.target.value)
                                    }} />
                                    <span className="placeholder">Price</span>
                                </label>
                               

                            </div>




                        </div>
                        <div className="form2-btn">
                            <button className="addinventory-btn" >UPDATE Hall</button>
                        </div>



                    </div>

                </form>
            </div>



        </div>
    )

}