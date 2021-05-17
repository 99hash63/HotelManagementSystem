import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddRegBooking.css'
import BookingConfirm from './BookingConfirm'
import { Router } from 'react-router';
import { noConflict } from 'jquery';


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

    //incomplete calculations for room allocations
    // const roomAllocation = "null";

    //incomplete calculations booking price
    // const price = 0;
 
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
                        }} required />
                    </div>

                    <div className="col-md-6 col-12 mx-auto my-2">
                        <input type="number" className="form-control-lg" id="noOfChildren" placeholder="Children" onChange={(e) => {
                             setNoOfChildren(e.target.value);
                        }} required />
                    </div>



                    </div>
                </div>



                <div className="form-group mb-5">
                    <div className="row">

                     
                    <div className="col-md-6 col-12 mx-auto my-2">
                    <select className="form-control-lg" name="cpackage" id="cpackage" onChange={(e) => {
                                    setPackage(e.target.value)
                                }} >
                                    <option value="Full Board">Full Board</option>
                                    <option value="Half Board">Half Board</option>
                                    <option value="Bed And Breakfast">Bed And Breakfast</option>
                                    <option value="Bed And Tea">Bed And Tea</option>
                                    
                    </select>
                    </div>

                    <div className="col-md-6 col-12 mx-auto my-2">
                    <select className="form-control-lg" name="roomType" id="roomType" onChange={(e) => {
                                    setRoomAllocation(e.target.value); var fin=1000 * noOfAdults; setPrice(fin);
                                }} >
                                    <option value="Single Standard">Single Standard</option>
                                    <option value="Single Duluxe">Single Duluxe</option>
                                    <option value="Double Standard">Double Standard</option>
                                    <option value="Double Duluxe">Double Duluxe</option>
                                    <option value="Double Standard">Superior Standard</option>
                                    <option value="Double Duluxe">Superior Duluxe</option>
                                    
                    </select>
                    </div>

    

                    </div>
                </div>

                <div className="mt-5 col-md-6 col-12 mx-auto">
                    <button className="btn btn-outline-dark btn-lg btn-block">Create Booking</button>
                </div>
                </form>

                {/* <div className="mt-5 col-md-6 col-12 mx-auto">
                    <button onClick={event =>  window.location.href='/CusSideNav/addRegBooking/confirm'} className="btn btn-outline-dark btn-lg btn-block">Create Booking</button>
                </div> */}

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

     

     )
     
     
     
    
     
     
     
     ;
}
export default AddRegBooking;











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
                