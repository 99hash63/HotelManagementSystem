import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddBooking.css'



const AddBooking = () => {

    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [NIC, setNIC] = useState("");
    const [email, setEmail] = useState("");
    const [promoCode, setPromoCode] = useState("");
    const [travelAgent, setTravelAgent] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [noOfAdults, setNoOfAdults] = useState("");
    const [noOfChildren, setNoOfChildren] = useState("");
    const [cpackage, setPackage] = useState("");
    const [otherAccomodations, setOtherAccomodations] = useState("");
    const [nationality, setNationality] = useState("");
    const [passportNo, setPassportNo] = useState("");
    const [roomAllocation, setRoomAllocation] = useState("");
    const [price, setPrice] = useState("");
 
    function sendData(){
        
        const newBooking = {
            fName,
            lName,
            address, 
            NIC, 
            email,
            promoCode,
            travelAgent, 
            checkInDate, 
            checkOutDate, 
            noOfAdults,
            noOfChildren,
            cpackage,
            otherAccomodations, 
            nationality, 
            passportNo, 
            roomAllocation,
            price,
       }

       axios.post("http://localhost:5000/booking/addU", newBooking).then(()=>{
           alert("Booking Added")
       }).catch((err)=>{
           alert(err)
       })
    }

    return ( 

        <div>
    
            <form onSubmit={sendData}>
                <div className="form1">

                    <label className="custom-field">
                        <input type="text" className="form-input" id="fName" onChange={(e) => {
                            setFname(e.target.value);
                        }} required />
                        <span className="placeholder">First Name</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="lName" onChange={(e) => {
                             setLname(e.target.value);
                        }} required />
                        <span className="placeholder">Last Name</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="address" onChange={(e) => {
                             setAddress(e.target.value);
                        }} />
                        <span className="placeholder">Address</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="NIC" onChange={(e) => {
                             setNIC(e.target.value);
                        }} required />
                        <span className="placeholder">NIC</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="email" onChange={(e) => {
                             setEmail(e.target.value);
                        }} required />
                        <span className="placeholder">email</span>
                    </label>
                    <br />

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
                        <input type="text" className="form-input" id="checkInDate" onChange={(e) => {
                             setCheckInDate(e.target.value);
                        }} required />
                        <span className="placeholder">checkInDate</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="checkOutDate" onChange={(e) => {
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
                        <input type="text" className="form-input" id="nationality" onChange={(e) => {
                             setNationality(e.target.value);
                        }} required />
                        <span className="placeholder">nationality</span>
                    </label>
                    <br />

                    <label className="custom-field">
                        <input type="text" className="form-input" id="passportNo" onChange={(e) => {
                             setPassportNo(e.target.value);
                        }} />
                        <span className="placeholder">passportNo</span>
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
 
export default AddBooking;
