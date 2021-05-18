import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function EditBookHall() {


    const { id } = useParams();

    const [hallid, setID] = useState(0);
    const [cusNic, setcusNic] = useState(0);
    const [bookedDate, setbookedDate] = useState("");
    const [noOfSeates, setnoOfSeates] = useState(0);
    const [noOfTables, setnoOfTables] = useState(0);
    const [addedFeatures, setfeatures] = useState("");

    const [BookedHalls, setBookedHalls] = useState("");



    useEffect(() => {
    
     
        axios.get(`http://localhost:5000/bookedhalls/get/${id}`).then(res => {
            setBookedHalls(res.data.BookedHalls)
            console.log(res.data.BookedHalls)
            setID(res.data.BookedHalls.id)
            setcusNic(res.data.BookedHalls.cusNic)
            setbookedDate(res.data.BookedHalls.bookedDate)
            setnoOfSeates(res.data.BookedHalls.noOfSeates)
            setnoOfTables(res.data.BookedHalls.noOfTables)
            setfeatures(res.data.BookedHalls.addedFeatures)
        


            //setting the data that is fetched from the database 

        }).catch((e) => {
            console.log(e);
        })


    }, [])




    //sending collected data to the database
    function sendData(e) {
        e.preventDefault();

        const newHall = {
            hallid, cusNic, bookedDate, bookedDate, noOfSeates, noOfTables, addedFeatures
        }

        axios.put(`http://localhost:5000/bookedhalls/update/${id}`, newHall).then(() => {

        }).catch((e) => {
            alert("error");
        })
    }

     var timesClicked =0;
    const delete_inventory = () => {
        timesClicked++;
        
        if (timesClicked > 1) {
            axios.delete(`http://localhost:5000/bookedhalls/delete/${id}`).then(() => {
                window.location = "/hall-manager/bookedHallView"
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


            <div className="header-box"> Edit Booked Hall
            <div>
                  
                  <button id="delete_btn"onClick={delete_inventory}  >Delete</button>
              </div>

                
            </div>

            {/* <hr /> */}
            <div className="content-box">

                <form onSubmit={sendData}>

                    <div className="form1">

                        <label className="custom-field">
                            <input type="number" className="form-input" id="name" defaultValue={BookedHalls.id} onChange={(e) => {
                            setID(e.target.value)
                            }} required />
                            <span className="placeholder">ID</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="model" defaultValue={BookedHalls.cusNic} onChange={(e) => {
                                setcusNic(e.target.value)
                            }} required />
                            <span className="placeholder">Customer ID</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="date" className="form-input" id="sku" defaultValue={BookedHalls.date && BookedHalls.bookedDate.substring(0, 10)} onChange={(e) => {
                                setbookedDate(e.target.value)
                            }} />
                            <span className="placeholder">Booked Date</span>
                        </label>

                        <br />

                        <label className="custom-field">
                            <textarea name="description" id="description" cols="0" rows="10" maxLength="500" defaultValue={BookedHalls.addedFeatures} onChange={(e) => {
                                setfeatures(e.target.value)
                            }} ></textarea>
                            <span className="placeholder">Features</span>
                        </label>
                        <br />

                    </div>
                    <div className="form2">
                        <div className="form2-content">

                        <label className="custom-field">
                                <input type="number" className="form-input" id="quantity" min="1" defaultValue={BookedHalls.noOfTables} onChange={(e) => {
                                    setnoOfTables(e.target.value)
                                }} />
                                <span className="placeholder">noOfTables</span>
                            </label>
                            <br />
    
                            <br />
                            <div className="price">
                                <label className="custom-field">
                                    <input type="number" min="1" className="form-input" id="oprice" defaultValue={BookedHalls.noOfSeates} onChange={(e) => {
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