import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AddRegBooking = () => {

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
           alert(err)
       })
    }

    return ( 
        <div style={{background: "#ffffff",borderRadius: "20px"}}>
            <form onSubmit={sendData} >
                <div className="form1">

                    <label className="custom-field">
                        <input type="text" className="form-input" id="promoCode" onChange={(e) => {
                             setPromoCode(e.target.value);
                        }} />
                        <span className="placeholder">promoCode</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="travelAgent" onChange={(e) => {
                             setTravelAgent(e.target.value);
                        }} required />
                        <span className="placeholder">travelAgent</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="date" className="form-input" id="checkInDate" onChange={(e) => {
                             setCheckInDate(e.target.value);
                        }} required />
                        <span className="placeholder">checkInDate</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="date" className="form-input" id="checkOutDate" onChange={(e) => {
                             setCheckOutDate(e.target.value);
                        }} />
                        <span className="placeholder">checkOutDate</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="nanoOfAdultsme" onChange={(e) => {
                             setNoOfAdults(e.target.value);
                        }} required />
                        <span className="placeholder">noOfAdults</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="noOfChildren" onChange={(e) => {
                             setNoOfChildren(e.target.value);
                        }} required />
                        <span className="placeholder">noOfChildren</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="cpackage" onChange={(e) => {
                             setPackage(e.target.value);
                        }} />
                        <span className="placeholder">package</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="otherAccomodations" onChange={(e) => {
                             setOtherAccomodations(e.target.value);
                        }} required />
                        <span className="placeholder">otherAccomodations</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="roomAllocation" onChange={(e) => {
                             setRoomAllocation(e.target.value);
                        }} required />
                        <span className="placeholder">roomAllocation</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="price" onChange={(e) => {
                             setPrice(e.target.value);
                        }} required />
                        <span className="placeholder">price</span>
                    </label>
                    <br />

                    <div className="form2-btn">
                        <button className="addinventory-btn">Create Booking</button>
                    </div> 
                </div>
            </form>
        </div>
     );
}
export default AddRegBooking;
