import React, { useState, useEffect } from 'react';
import axios from 'axios';


// import Hero from '../components/customer/subComponents/Hero';
import Banner from './subComponents/Banner';
import Hero from './subComponents/Hero';
import { Link } from 'react-router-dom';




const AddBooking = () => {

    

    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [promoCode, setPromoCode] = useState("");
    const [travelAgent, setTravelAgent] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [noOfAdults, setNoOfAdults] = useState("");
    const [noOfChildren, setNoOfChildren] = useState("");
    const [cpackage, setPackage] = useState("");
    

    //temporary null
    const address = "null";
    const NIC = "null";
    const otherAccomodations = "null";
    const nationality = "null";
    const passportNo = "null";

    //incomplete calculations for room allocations
    const roomAllocation = "null";

    //incomplete calculations booking price
    const price = 0;

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
           alert("Error with adding booking")
       })
    }

    return ( 


        

        <div>

        {/* <Hero hero="defaultHero">
            </Hero>
                 <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at 300$">
                <Link to="/rooms" className="btn btn-primary">
                      Our Rooms
                </Link>
        </Banner>
     */}
            <form onSubmit={sendData} style={{display: "block", textAlign: "center"}}>
                <div className="">

                    <label>First Name</label>
                        <input type="text" className="form-input" id="fName" onChange={(e) => {
                            setFname(e.target.value);
                        }} required />  
                    <br />

                    <label>Last Name</label>
                        <input type="text" className="form-input" id="lName" onChange={(e) => {
                             setLname(e.target.value);
                        }} required />                    
                    <br />
        
                    <label>Email</label>
                        <input type="text" className="form-input" id="email" onChange={(e) => {
                             setEmail(e.target.value);
                        }} required />
                    <br />

                    <label>promoCode</label>
                        <input type="text" className="form-input" id="promoCode" onChange={(e) => {
                             setPromoCode(e.target.value);
                        }} />
                    <br />

                    <label>travelAgent</label>
                        <input type="text" className="form-input" id="travelAgent" onChange={(e) => {
                             setTravelAgent(e.target.value);
                        }} required />
                    <br />

                    <label>checkInDate</label>
                        <input type="date" className="form-input" id="checkInDate" onChange={(e) => {
                             setCheckInDate(e.target.value);
                        }} required />
                    <br />

                    <label>checkOutDate</label>
                        <input type="date" className="form-input" id="checkOutDate" onChange={(e) => {
                             setCheckOutDate(e.target.value);
                        }} />
                    <br />

                    <label>noOfAdults</label>
                        <input type="number" className="form-input" id="nanoOfAdultsme" onChange={(e) => {
                             setNoOfAdults(e.target.value);
                        }} required />
                    <br />

                    <label>noOfChildren</label>
                        <input type="number" className="form-input" id="noOfChildren" onChange={(e) => {
                             setNoOfChildren(e.target.value);
                        }} required />            
                    <br />
              
                    <label>package</label>
                                <select name="cpackage" id="cpackage" onChange={(e) => {
                                    setPackage(e.target.value)
                                }} >
                                    <option value="Full Board">Full Board</option>
                                    <option value="Half Board">Half Board</option>
                                    <option value="Bed And Breakfast">Bed And Breakfast</option>
                                    <option value="Bed And Tea">Bed And Tea</option>
                                    
                                </select>                   
                    <br />                  
                    <div>
                        <button className="">Create Booking</button>
                    </div> 
                </div>
            </form>
        </div>
     );
}
 
export default AddBooking;



 // const [address, setAddress] = useState("");
    // const [NIC, setNIC] = useState("");
    // const [otherAccomodations, setOtherAccomodations] = useState("");
    // const [nationality, setNationality] = useState("");
    // const [passportNo, setPassportNo] = useState("");
    // const [roomAllocation, setRoomAllocation] = useState("");
    // const [price, setPrice] = useState("");


  {/* <label className="custom-field">
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
                    <br /> */}


                    {/* <label className="custom-field">
                        <input type="text" className="form-input" id="cpackage" onChange={(e) => {
                             setPackage(e.target.value);
                        }} />
                        <span className="placeholder">package</span>
                    </label> */}


                    {/* <label className="custom-field">
                        <input type="text" className="form-input" id="otherAccomodations" onChange={(e) => {
                             setOtherAccomodations(e.target.value);
                        }} required />
                        <span className="placeholder">otherAccomodations</span>
                    </label>
                    <br /> */}

                    {/* <label className="custom-field">
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
                    <br /> */}

                    {/* <label className="custom-field">
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
                    <br /> */}
