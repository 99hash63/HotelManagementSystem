// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { useHistory } from "react-router-dom";
// import './CusSideComponents.css'


// const DisplayPast = () => {
//     const history = useHistory();
//     const { id } = useParams();

    
//     const [promoCode, setPromoCode] = useState("");
//     const [travelAgent, setTravelAgent] = useState("");
//     const [checkInDate, setCheckInDate] = useState("");
//     const [checkOutDate, setCheckOutDate] = useState("");
//     const [noOfAdults, setNoOfAdults] = useState("");
//     const [noOfChildren, setNoOfChildren] = useState("");
//     const [cpackage, setPackage] = useState("");
//     const [otherAccomodations, setOtherAccomodations] = useState("");
//     const [roomAllocation, setRoomAllocation] = useState("");
//     const [price, setPrice] = useState("");

//     //storing the data that fetched from the DB
//     const [getUpcoming, setgetUpcoming] = useState([]);
    

//     useEffect(() => {
//         //fetching booking data from DB
//         axios.get(`http://localhost:5000/booking/get/${id}`).then(res => {
//             setgetUpcoming(res.data)
//             //setting the data that is fetched from the database 
//             setPromoCode(res.data.promoCode)
//             setTravelAgent(res.data.travelAgent)
//             setCheckInDate(res.data.checkInDate)
//             setCheckOutDate(res.data.checkOutDate)
//             setNoOfAdults(res.data.noOfAdults)
//             setNoOfChildren(res.data.noOfChildren)
//             setPackage(res.data.package)
//             setOtherAccomodations(res.data.otherAccomodations)
//             setRoomAllocation(res.data.roomAllocation)
//             setPrice("null")

//         }).catch((e) => {
//             console.log(e);
//         })


//     }, [])

//     //updating funtion
//     function UpdateBooking(e) {
//         e.preventDefault();

//         const updateBooking = {
//             promoCode, travelAgent, checkInDate, checkOutDate, noOfAdults, noOfChildren, cpackage, otherAccomodations, roomAllocation, price
//         }

//         axios.post(`http://localhost:5000/booking/update/${id}`, updateBooking).then(() => {
//             window.location = "/CusSideNav/cusPastBookings"
//         }).catch((e) => {
//             alert(e);
//         })

//     }
//     //enable edit button funtion
//     const enable_edit = () => {
//         document.getElementById('fs').removeAttribute("disabled");
//         document.getElementById('edit_btn').remove();
//         document.getElementById('update_inventory').style.display = "block ";
//         document.getElementById('edit-title').innerHTML = "Edit Booking"

//     }
//     //delete inventory button funtion
//     var timesClicked =0;
//     const delete_inventory = () => {
//         timesClicked++;
        
//         if (timesClicked > 1) {
//             axios.delete(`http://localhost:5000/booking/delete/${id}`).then(() => {
//                 window.location = "/CusSideNav/cusPastBookings"
//                 timesClicked=0
//             }).catch((e) => {
//                 alert("error");
//             })
//         } else {
//             document.getElementById('delete_btn').innerHTML = "Confirm Delete"
//             document.getElementById("delete_btn").style.color = "white";
//             document.getElementById("delete_btn").style.backgroundColor ="rgb(255, 0, 55)"
//             document.getElementById("delete_btn").style.borderColor ="rgb(255, 0, 55)"
//         }

//     }


//     return (
        
//         <div className="cusSideComp" >
//                     <i  onClick={() => { history.goBack();}} class="fas fa-chevron-circle-left"></i>
//             <div id="edit-title" className="header-box"> Past Bookings
            
//             <div><br/>
//                     <button className="btn btn-block btn-outline-primary" id="edit_btn" onClick={enable_edit}>Edit</button>
//                     <button className="btn btn-block btn-outline-primary" id="delete_btn" onClick={delete_inventory} >Delete</button>
//             </div>

//             </div>
//             {/* <hr /> */}

//             <div className="content-box" >
//             <fieldset disabled="disabled" className="content-box" id="fs">
            
//                 <form id='inventory_form' >
                
//                     <div className="form1 displayInventory">

//                         <label className="custom-field">
//                             <input type="text" className="form-input" id="promoCode" defaultValue={getUpcoming.promoCode} onChange={(e) => {
//                                 setPromoCode(e.target.value)

//                             }} required />
//                             <span className="placeholder">promoCode</span>
//                         </label>
//                         <br />

//                         <label className="custom-field">
//                             <input type="text" className="form-input" id="travelAgent" defaultValue={getUpcoming.travelAgent} onChange={(e) => {
//                                 setTravelAgent(e.target.value)
//                             }} />
//                             <span className="placeholder">travelAgent</span>
//                         </label>
//                         <br />

//                         <label className="custom-field">
//                             <input type="text" className="form-input" id="checkInDate" defaultValue={getUpcoming.checkInDate} onChange={(e) => {
//                                 setCheckInDate(e.target.value)
//                             }} />
//                             <span className="placeholder">checkInDate</span>
//                         </label>

//                         <br />

//                         <label className="custom-field">
//                             <input type="text" className="form-input" id="checkOutDate" defaultValue={getUpcoming.checkOutDate} onChange={(e) => {
//                                 setCheckOutDate(e.target.value)

//                             }} required />
//                             <span className="placeholder">checkOutDate</span>
//                         </label>
//                         <br />
                    
//                         <label className="custom-field">
//                             <input type="text" className="form-input" id="noOfAdults" defaultValue={getUpcoming.noOfAdults} onChange={(e) => {
//                                 setNoOfAdults(e.target.value)
//                             }} />
//                             <span className="placeholder">noOfAdults</span>
//                         </label>
//                         <br />

//                         <label className="custom-field">
//                             <input type="text" className="form-input" id="noOfChildren" defaultValue={getUpcoming.noOfChildren} onChange={(e) => {
//                                 setNoOfChildren(e.target.value)
//                             }} />
//                             <span className="placeholder">noOfChildren</span>
//                         </label>

//                         <br />


//                         </div>
//                         <div className="form2">
//                             <div className="form2">

//                                 <label className="custom-field">
//                                 <input type="text" className="form-input" id="cpackage" defaultValue={getUpcoming.package} onChange={(e) => {
//                                     setPackage(e.target.value)

//                                 }} required />
//                                 <span className="placeholder">cpackage</span>
//                                 </label>
//                                 <br />

//                                 <label className="custom-field">
//                                     <input type="text" className="form-input" id="otherAccomodations" defaultValue={getUpcoming.otherAccomodations} onChange={(e) => {
//                                         setOtherAccomodations(e.target.value)
//                                     }} />
//                                     <span className="placeholder">otherAccomodations</span>
//                                 </label>
//                                 <br />

//                                 <label className="custom-field">
//                                     <input type="text" className="form-input" id="roomAllocation" defaultValue={getUpcoming.roomAllocation} onChange={(e) => {
//                                         setRoomAllocation(e.target.value)
//                                     }} />
//                                     <span className="placeholder">roomAllocation</span>
//                                 </label>

//                                 <br />

//                                 {/* <label className="custom-field">
//                                     <input type="text" className="form-input" id="price" defaultValue={getUpcoming.price} onChange={(e) => {
//                                         setPrice(e.target.value)
//                                     }} />
//                                     <span className="placeholder">price</span>
//                                 </label> */}

//                                 <br />                                                        
//                             </div> 
//                         </div>   
                   
//                         <div className="form2-btn">

//                             <button id="update_inventory" style={{ display: "none" }} className="addinventory-btn" onClick={UpdateBooking}>Update Booking</button>

//                         </div>
                    
//                 </form>
//             </fieldset>
//         </div>

//         </div>
//     )


// }

// export default DisplayPast;




import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import './CusSideComponents.css'
import Hero from './subComponents/Hero'
import PageBottom from './PageBottom';


const DisplayPast = () => {
    const history = useHistory();
    const { id } = useParams();

    
    const [promoCode, setPromoCode] = useState("");
    const [travelAgent, setTravelAgent] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [noOfAdults, setNoOfAdults] = useState("");
    const [noOfChildren, setNoOfChildren] = useState("");
    const [cpackage, setPackage] = useState("");
    const [otherAccomodations, setOtherAccomodations] = useState("");
    const [roomAllocation, setRoomAllocation] = useState("");
    const [price, setPrice] = useState("");

    //storing the data that fetched from the DB
    const [getUpcoming, setgetUpcoming] = useState([]);
    

    useEffect(() => {
        //fetching booking data from DB
        axios.get(`http://localhost:5000/booking/get/${id}`).then(res => {
            setgetUpcoming(res.data)
            //setting the data that is fetched from the database 
            setPromoCode(res.data.promoCode)
            setTravelAgent(res.data.travelAgent)
            setCheckInDate(res.data.checkInDate)
            setCheckOutDate(res.data.checkOutDate)
            setNoOfAdults(res.data.noOfAdults)
            setNoOfChildren(res.data.noOfChildren)
            setPackage(res.data.package)
            setOtherAccomodations(res.data.otherAccomodations)
            setRoomAllocation(res.data.roomAllocation)
            setPrice("0")

        }).catch((e) => {
            console.log(e);
        })


    }, [])

    //updating funtion
    function UpdateBooking(e) {
        e.preventDefault();

        const updateBooking = {
            promoCode, travelAgent, checkInDate, checkOutDate, noOfAdults, noOfChildren, cpackage, otherAccomodations, roomAllocation, price
        }

        axios.post(`http://localhost:5000/booking/update/${id}`, updateBooking).then(() => {
            window.location = "/CusSideNav/cusUpBookings"
        }).catch((e) => {
            alert(e);
        })

    }
    //enable edit button funtion
    const enable_edit = () => {
        document.getElementById('fs').removeAttribute("disabled");
        document.getElementById('edit_btn').remove();
        document.getElementById('update_inventory').style.display = "block ";
        document.getElementById('edit-title').innerHTML = "Edit Booking"

    }
    //delete inventory button funtion
    var timesClicked =0;
    const delete_booking = () => {
        timesClicked++;
        
        if (timesClicked > 1) {
            axios.delete(`http://localhost:5000/booking/delete/${id}`).then(() => {
                window.location = "/CusSideNav/cusUpBookings"
                timesClicked=0
            }).catch((e) => {
                alert("error");
            })
        } else {
            document.getElementById('delete_btn').innerHTML = "Confirm?"
            document.getElementById("delete_btn").style.color = "white";
            document.getElementById("delete_btn").style.backgroundColor ="rgb(255, 0, 55)"
            document.getElementById("delete_btn").style.borderColor ="rgb(255, 0, 55)"
        }

    }


    return (
        <div>
    <Hero hero="behindHero"></Hero>
        
        <div className="cusSideComp" >
                    <i  onClick={() => { history.goBack();}} class="fas fa-chevron-circle-left"></i>
            <div id="edit-title" className="header-box"> Past Bookings
            
            <div>
               
                    {/* <button className="btn btn-block btn-outline-primary" id="edit_btn" onClick={enable_edit}>Edit</button> */}
                    <button className="btn btn-block btn-outline-primary"id="delete_btn" onClick={delete_booking} >Delete</button>
            </div>

            </div>
            <hr />

            <div  >
            <fieldset disabled="disabled"  id="fs">
            
                <form id='inventory_form' >
                
                    <div style={{paddingLeft: "130px",  marginTop: "30px"}}>

                        <div style={{paddingLeft: "105px"}}>   

                                <label className="custom-field">
                                    <input type="text" className="form-input" id="promoCode" defaultValue={getUpcoming.promoCode} onChange={(e) => {
                                        setPromoCode(e.target.value)

                                    }} required />
                                    <span className="placeholder">promoCode</span>
                                </label>
                            

                                <label className="custom-field">
                                    <input type="text" className="form-input" id="travelAgent" defaultValue={getUpcoming.travelAgent} onChange={(e) => {
                                        setTravelAgent(e.target.value)
                                    }} />
                                    <span className="placeholder">travelAgent</span>
                                </label>
                            

                                <label className="custom-field">
                                    <input type="text" className="form-input" id="checkInDate" defaultValue={getUpcoming.checkInDate} onChange={(e) => {
                                        setCheckInDate(e.target.value)
                                    }} />
                                    <span className="placeholder">checkInDate</span>
                                </label>

                                <br />

                                <label className="custom-field">
                                    <input type="text" className="form-input" id="checkOutDate" defaultValue={getUpcoming.checkOutDate} onChange={(e) => {
                                        setCheckOutDate(e.target.value)

                                    }} required />
                                    <span className="placeholder">checkOutDate</span>
                                </label>
                                                
                                <label className="custom-field">
                                    <input type="text" className="form-input" id="noOfAdults" defaultValue={getUpcoming.noOfAdults} onChange={(e) => {
                                        setNoOfAdults(e.target.value)
                                    }} />
                                    <span className="placeholder">noOfAdults</span>
                                </label>
                            
                                <label className="custom-field">
                                    <input type="text" className="form-input" id="noOfChildren" defaultValue={getUpcoming.noOfChildren} onChange={(e) => {
                                        setNoOfChildren(e.target.value)
                                    }} />
                                    <span className="placeholder">noOfChildren</span>
                                </label>
                                <br/>

                        </div>   

                                        <label className="custom-field">
                                        <input type="text" className="form-input" id="cpackage" defaultValue={getUpcoming.package} onChange={(e) => {
                                            setPackage(e.target.value)

                                        }} required />
                                        <span className="placeholder">cpackage</span>
                                        </label>
                                    
                                        <label className="custom-field">
                                            <input type="text" className="form-input" id="otherAccomodations" defaultValue={getUpcoming.otherAccomodations} onChange={(e) => {
                                                setOtherAccomodations(e.target.value)
                                            }} />
                                            <span className="placeholder">Rooms</span>
                                        </label>
                                    

                                        <label className="custom-field">
                                            <input type="text" className="form-input" id="roomAllocation" defaultValue={getUpcoming.roomAllocation} onChange={(e) => {
                                                setRoomAllocation(e.target.value); setPrice("null")
                                            }} />
                                            <span className="placeholder">roomAllocation</span>
                                        </label>

                                        <label className="custom-field">
                                            <input type="text" className="form-input" id="price" defaultValue={getUpcoming.price} onChange={(e) => {
                                                setPrice(e.target.value)
                                            }} />
                                            <span className="placeholder">price</span>
                                        </label>

                        </div>   
                   
                        <div >

                            <button id="update_inventory" style={{ display: "none", width: "450px", marginLeft: "310px", marginTop: "20px"}}  className="btn btn-block btn-outline-primary" onClick={UpdateBooking}>Update Booking</button>

                        </div>
                    
                </form>
            </fieldset>
        </div>

        </div>

        <PageBottom/>
    </div>
    )


}

export default DisplayPast;