import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddRegBooking.css'
import BookingConfirm from './BookingConfirm'
import moment from 'moment';
import { Router } from 'react-router';
import { noConflict } from 'jquery';
import Hero from './subComponents/Hero'
import PageBottom from './PageBottom';




const AddRegBooking = ({setTestVal}) => {

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
    var fin = 0;


    // othe room type details for calculations
    // const [capacity, setCapacity] = useState("");
    // const [fullBoardPrice, setFullBoardPrice] = useState("");
    // const [halfBoardPrice, setHalfBoardPrice] = useState("");
    // const [bedAndBreakfastPrice, setBedAndBreakfastPrice] = useState("");
    
    
    const [getRoooms, setgetRooms] = useState([]);
    //incomplete calculations for room allocations
    // const roomAllocation = "null";

    //incomplete calculations booking price
    // const price = 0;


    //getting room types from the database
    useEffect(() => {
 
        axios.get("http://localhost:5000/roomType/get").then((res) => {
            if (res.data.length > 0) {
                setgetRooms(res.data.map(roomAllocation => roomAllocation.typeName))

                // setgetRooms(res.data.map(capacity => capacity.capacity))
                // setgetRooms(res.data.map(fullBoardPrice => fullBoardPrice.FullBoardPrice))
                // setgetRooms(res.data.map(halfBoardPrice => halfBoardPrice.HalfBoardPrice))
                // setgetRooms(res.data.map(bedAndBreakfastPrice => bedAndBreakfastPrice.BedAndBreakfastPrice))

            }
        }).catch((e) => {
            // console.log(e);
        })

    }, [getRoooms])


    //all room type details
    // const [allRooms, setAllRooms] = useState([]);

    // async function getAllRooms(){
    //     const roomRes = await axios.get("http://localhost:5000/roomType/get");
    //     setAllRooms(roomRes.data);
        
    // }

    // useEffect(() => {
    //     getAllRooms();
    // }, []);


    function calPrice(){

        var rooms = noOfAdults ;
        setOtherAccomodations(rooms);
        if(roomAllocation === "Single Standard"){
            switch (cpackage) {
                case "Full Board":
                     fin=1500 * rooms; setPrice(fin); 
                  break;
                case "Half Board":
                     fin=1000 * rooms; setPrice(fin); 
                  break;
                case "Bed And Breakfast":
                     fin=750 * rooms; setPrice(fin); 
                  break;
              }
            
        }
        else if(roomAllocation === "Single Duluxe"){
            switch (cpackage) {
                case "Full Board":
                     fin=2000 * rooms; setPrice(fin); 
                  break;
                case "Half Board":
                     fin=1500 * rooms; setPrice(fin); 
                  break;
                case "Bed And Breakfast":
                     fin=1250 * rooms; setPrice(fin); 
                  break;
              }
        }
        else if(roomAllocation === "Double Standard"){
            switch (cpackage) {
                case "Full Board":
                     fin=2500 * rooms; setPrice(fin); 
                  break;
                case "Half Board":
                     fin=2000 * rooms; setPrice(fin); 
                  break;
                case "Bed And Breakfast":
                     fin=1750 * rooms; setPrice(fin); 
                  break;
              }
        }
        else if(roomAllocation === "Double Duluxe"){
            switch (cpackage) {
                case "Full Board":
                     fin=3000 * rooms; setPrice(fin); 
                  break;
                case "Half Board":
                     fin=2500 * rooms; setPrice(fin); 
                  break;
                case "Bed And Breakfast":
                     fin=2250 * rooms; setPrice(fin); 
                  break;
              }
        }
        else if(roomAllocation === "Superior Standard"){
            switch (cpackage) {
                case "Full Board":
                     fin=4000 * rooms; setPrice(fin); 
                  break;
                case "Half Board":
                     fin=3500 * rooms; setPrice(fin); 
                  break;
                case "Bed And Breakfast":
                     fin=3250 * rooms; setPrice(fin); 
                  break;
              }
        }
        else if(roomAllocation === "Superior Duluxe"){
            switch (cpackage) {
                case "Full Board":
                     fin=5000 * rooms; setPrice(fin); 
                  break;
                case "Half Board":
                     fin=4500 * rooms; setPrice(fin); 
                  break;
                case "Bed And Breakfast":
                     fin=4250 * rooms; setPrice(fin); 
                  break;
              }
        }
    }

    function calculateDaysLeft(checkInDate, checkOutDate) {
        if (!moment.isMoment(checkInDate)) checkInDate = moment(checkInDate);
        if (!moment.isMoment(checkOutDate)) checkOutDate = moment(checkOutDate);
        alert (checkOutDate.diff(checkInDate));
    }

    function sendData(){
        
        const newBooking = {
            promoCode,
            travelAgent, 
            checkInDate, 
            checkOutDate, 
            noOfAdults,
            noOfChildren,
            cpackage,
            otherAccomodations, 
            roomAllocation,
            price,
       }

       axios.post("http://localhost:5000/booking/addR", newBooking).then(()=>{
           alert("Booking Added")
       }).catch((err)=>{
           alert("Error with adding Booking")
       })
    }


    return ( 
     

<div>
    <Hero hero="behindHero"></Hero>

    <div className="regBooking" >
        <div className="container contact">
            <div className="row">
                <div className="col-md-8 col-12 mx-auto">
                    <div className="card shadow-lg border-0 p-4">

                        <h1 className="text-center bg-dark text-white display-4 d-inline-block">New Booking</h1>

                        <form onSubmit={sendData} >

                        <div className="form-group my-5">
                            <div className="row">
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="text" className="form-control-lg" id="promoCode" placeholder="promoCode" onChange={(e) => {
                                        setPromoCode(e.target.value);    
                                    }} required />
                                </div>
                   
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="text" className="form-control-lg" id="travelAgent" placeholder="travelAgent" onChange={(e) => {
                                        setTravelAgent(e.target.value);
                                    }} required />
                                </div>

                            </div>
                        </div>

                        <div className="form-group mb-5">
                            <div className="row">                                    
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="date" className="form-control-lg" id="checkInDate" placeholder="checkInDate" onChange={(e) => {
                                        setCheckInDate(e.target.value);
                                    }} required />
                                </div>
                   
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="date" className="form-control-lg" id="checkOutDate" placeholder="checkOutDate" onChange={(e) => {
                                        setCheckOutDate(e.target.value);
                                    }} required />
                                </div>
                            </div>
                        </div>


                        <div className="form-group mb-5">
                            <div className="row">                     
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="number" className="form-control-lg" id="nanoOfAdultsme" placeholder="Adults" onChange={(e) => {
                                        setNoOfAdults(e.target.value);
                                        calPrice();
                                    }} required />
                                </div>

                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="number" className="form-control-lg" id="noOfChildren" placeholder="Children" onChange={(e) => {
                                        setNoOfChildren(e.target.value);
                                        calPrice();
                                    }} required />
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-5">
                            <div className="row">                    
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <select className="form-control-lg" name="cpackage" id="cpackage" onChange={(e) => {
                                        setPackage(e.target.value)
                                        calPrice();
                                    }}>
                                        <option >Select Package</option>
                                        <option value="Full Board">Full Board</option>
                                        <option value="Half Board">Half Board</option>
                                        <option value="Bed And Breakfast">Bed And Breakfast</option>                                    
                                    </select>
                                </div>

                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <select className="form-control-lg" name="roomType" id="roomType" onChange={(e) => {                             
                                        setRoomAllocation(e.target.value); 
                                        calPrice();                           
                                    }}>
                                        <option >Select Room Type</option>
                                        {
                                            getRoooms.map(function (roomAllocation) {
                                            return <option key={roomAllocation} value={roomAllocation}>{roomAllocation}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                            <div className="mt-5 col-md-6 col-12 mx-auto">
                                <button className="btn btn-outline-dark btn-lg btn-block">Create Booking</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>               
        </div> 

                <BookingConfirm package={promoCode}

                promoCode = {promoCode}
                travelAgent = {travelAgent}
                checkInDate = {checkInDate}
                checkOutDate = {checkOutDate}
                noOfAdults = {noOfAdults}
                noOfChildren = {noOfChildren}
                cpackage = {cpackage}
                otherAccomodations = {otherAccomodations}
                roomAllocation ={roomAllocation}
                price = {price}
                


                />

                </div>
                <PageBottom/>
                </div>

     )

     ;
}
export default AddRegBooking;









   // <div className="cusSideComp" >
            
        //                 <form onSubmit={sendData} >
        //         <div>

        //             {/* <label >
        //                 <input type="text" className="form-input" id="promoCode" onChange={(e) => {
        //                      setPromoCode(e.target.value);
        //                 }} required/>
        //                 <span className="placeholder">promoCode</span>
        //             </label> */}
                    
        //             {/* <label >
        //                 <input type="text" className="form-input" id="travelAgent" onChange={(e) => {
        //                      setTravelAgent(e.target.value);
        //                 }} required />
        //                 <span className="placeholder">travelAgent</span>
        //             </label>
        //             <br /> */}

        //             {/* <label >
        //                 <input type="date" className="form-input" id="checkInDate" onChange={(e) => {
        //                      setCheckInDate(e.target.value);
        //                 }} required />
        //                 <span className="placeholder">checkInDate</span>
        //             </label>
        //             <br /> */}

        //             {/* <label >
        //                 <input type="date" className="form-input" id="checkOutDate" onChange={(e) => {
        //                      setCheckOutDate(e.target.value);
        //                 }} />
        //                 <span className="placeholder">checkOutDate</span>
        //             </label>
        //             <br /> */}

        //             {/* <label >
        //                 <input type="number" className="form-input" id="nanoOfAdultsme" onChange={(e) => {
        //                      setNoOfAdults(e.target.value);
        //                 }} required />
        //                 <span className="placeholder">noOfAdults</span>
        //             </label>
        //             <br /> */}

        //             {/* <label >
        //                 <input type="number" className="form-input" id="noOfChildren" onChange={(e) => {
        //                      setNoOfChildren(e.target.value);
        //                 }} required />
        //                 <span className="placeholder">noOfChildren</span>
        //             </label>
        //             <br /> */}
        //              {/* <label >
        //                         <select name="cpackage" id="cpackage" onChange={(e) => {
        //                             setPackage(e.target.value)
        //                         }} >
        //                             <option value="Full Board">Full Board</option>
        //                             <option value="Half Board">Half Board</option>
        //                             <option value="Bed And Breakfast">Bed And Breakfast</option>
        //                             <option value="Bed And Tea">Bed And Tea</option>
                                    
        //                         </select>
        //                     <span className="placeholder">package</span>
        //             </label>
        //             <br /> */}



                   
        //             <div >
        //                 <button >Create Booking</button>
        //             </div> 
        //             <br/>
                    
        //         </div>
        //     </form>
        // </div>
           {/* <select className="form-control-lg" name="roomType" id="roomType" onChange={(e) => {
                                    setRoomAllocation(e.target.value); var fin=1000 * noOfAdults; setPrice(fin);
                                }} >
                                    <option value="Single Standard">Single Standard</option>
                                    <option value="Single Duluxe">Single Duluxe</option>
                                    <option value="Double Standard">Double Standard</option>
                                    <option value="Double Duluxe">Double Duluxe</option>
                                    <option value="Double Standard">Superior Standard</option>
                                    <option value="Double Duluxe">Superior Duluxe</option>
                                    
                    </select> */}














 {/* <label className="custom-field">
                        <input type="text" className="form-input" id="otherAccomodations" onChange={(e) => {
                             setOtherAccomodations(e.target.value);
                        }} required />
                        <span className="placeholder">otherAccomodations</span>
                    </label>
                    <br /> */}

                    {/* <label className="custom-field">
                        <input type="text" className="form-input" id="roomAllocation" onChange={(e) => {
                             setRoomAllocation(e.target.value);
                        }} required />
                        <span className="placeholder">roomAllocation</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="number" className="form-input" id="price" onChange={(e) => {
                             setPrice(e.target.value);
                        }} required />
                        <span className="placeholder">price</span>
                    </label> */}
                