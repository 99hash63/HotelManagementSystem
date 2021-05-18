
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddRegBooking.css'
import BookingConfirm from './BookingConfirm'
import moment from 'moment';
import { Router } from 'react-router';
import { noConflict } from 'jquery';
import Hero from './subComponents/Hero'
import PageBottom from './PageBottom';




const AddBooking = ({setTestVal}) => {

    const [fName, setFname] = useState("");
    // const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
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


    //temporary null
    const lName = "Perera"
    const address = "Mathara";
    const NIC = "991554438v";
    const nationality = "Srilankan";
    const passportNo = "0995322";

    const [getRoooms, setgetRooms] = useState([]);

    //getting room types from the database
    useEffect(() => {
 
        axios.get("http://localhost:5000/roomType/get").then((res) => {
            if (res.data.length > 0) {
                setgetRooms(res.data.map(roomAllocation => roomAllocation.typeName))
            }
        }).catch((e) => {
            // console.log(e);
        })
    }, [getRoooms])

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
            <Hero hero="behindHero"></Hero>

            <div className="regBooking" >
                <div className="container contact">
                    <div className="row">
                        <div className="col-md-8 col-12 mx-auto">
                            <div className="card shadow-lg border-0 p-4">

                                <h1 className="text-center bg-dark text-white display-4 d-inline-block">Unregistered Booking</h1><br/>

                                <form onSubmit={sendData} >


                                {/* <div className="form-group my-5"> */}
                                    <div className="row">
                                        <div className="col-md-6 col-12 mx-auto my-2">
                                            <input type="text" className="form-control-lg" id="fname" placeholder="Name" onChange={(e) => {
                                                setFname(e.target.value);    
                                            }} required />
                                        </div>
                        
                                        {/* <div className="col-md-6 col-12 mx-auto my-2">
                                            <input type="text" className="form-control-lg" id="lname" placeholder="Last Name" onChange={(e) => {
                                                setLname(e.target.value);
                                            }} required />
                                        </div> */}

                                        <div className="col-md-6 col-12 mx-auto my-2">
                                            <input type="text" className="form-control-lg" id="email" placeholder="Email" onChange={(e) => {
                                                setEmail(e.target.value);
                                            }} required />
                                        </div>

                                    </div><br/>
                                {/* </div> */}


                                {/* <div className="form-group my-5"> */}
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

                                    </div><br/>
                                {/* </div> */}

                                {/* <div className="form-group mb-5"> */}
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
                                    </div><br/>
                                {/* </div> */}


                                {/* <div className="form-group mb-5"> */}
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
                                    </div><br/>
                                {/* </div> */}

                                {/* <div className="form-group mb-5"> */}
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
                                {/* </div> */}

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
    );
}
export default AddBooking;


































































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// // import Hero from '../components/customer/subComponents/Hero';
// import Banner from './subComponents/Banner';
// import Hero from './subComponents/Hero';
// import { Link } from 'react-router-dom';




// const AddBooking = () => {

    
//     const [fName, setFname] = useState("");
//     const [lName, setLname] = useState("");
//     const [email, setEmail] = useState("");
//     const [promoCode, setPromoCode] = useState("");
//     const [travelAgent, setTravelAgent] = useState("");
//     const [checkInDate, setCheckInDate] = useState("");
//     const [checkOutDate, setCheckOutDate] = useState("");
//     const [noOfAdults, setNoOfAdults] = useState("");
//     const [noOfChildren, setNoOfChildren] = useState("");
//     const [cpackage, setPackage] = useState("");
    

//     //temporary null
//     const address = "null";
//     const NIC = "null";
//     const otherAccomodations = "null";
//     const nationality = "null";
//     const passportNo = "null";

//     //incomplete calculations for room allocations
//     const roomAllocation = "null";

//     //incomplete calculations booking price
//     const price = 0;

//     function sendData(){
        
//         const newBooking = {
//             fName,
//             lName,
//             address, 
//             NIC, 
//             email,
//             promoCode,
//             travelAgent, 
//             checkInDate, 
//             checkOutDate, 
//             noOfAdults,
//             noOfChildren,
//             cpackage,
//             otherAccomodations, 
//             nationality, 
//             passportNo, 
//             roomAllocation,
//             price,
//        }

//        axios.post("http://localhost:5000/booking/addU", newBooking).then(()=>{
//            alert("Booking Added")
//        }).catch((err)=>{
//            alert("Error with adding booking")
//        })
//     }

//     return ( 


        

//         <div>

//         {/* <Hero hero="defaultHero">
//             </Hero>
//                  <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at 300$">
//                 <Link to="/rooms" className="btn btn-primary">
//                       Our Rooms
//                 </Link>
//         </Banner>
//      */}
//             <form onSubmit={sendData} style={{display: "block", textAlign: "center"}}>
//                 <div className="">

//                     <label>First Name</label>
//                         <input type="text" className="form-input" id="fName" onChange={(e) => {
//                             setFname(e.target.value);
//                         }} required />  
//                     <br />

//                     <label>Last Name</label>
//                         <input type="text" className="form-input" id="lName" onChange={(e) => {
//                              setLname(e.target.value);
//                         }} required />                    
//                     <br />
        
//                     <label>Email</label>
//                         <input type="text" className="form-input" id="email" onChange={(e) => {
//                              setEmail(e.target.value);
//                         }} required />
//                     <br />

//                     <label>promoCode</label>
//                         <input type="text" className="form-input" id="promoCode" onChange={(e) => {
//                              setPromoCode(e.target.value);
//                         }} />
//                     <br />

//                     <label>travelAgent</label>
//                         <input type="text" className="form-input" id="travelAgent" onChange={(e) => {
//                              setTravelAgent(e.target.value);
//                         }} required />
//                     <br />

//                     <label>checkInDate</label>
//                         <input type="date" className="form-input" id="checkInDate" onChange={(e) => {
//                              setCheckInDate(e.target.value);
//                         }} required />
//                     <br />

//                     <label>checkOutDate</label>
//                         <input type="date" className="form-input" id="checkOutDate" onChange={(e) => {
//                              setCheckOutDate(e.target.value);
//                         }} />
//                     <br />

//                     <label>noOfAdults</label>
//                         <input type="number" className="form-input" id="nanoOfAdultsme" onChange={(e) => {
//                              setNoOfAdults(e.target.value);
//                         }} required />
//                     <br />

//                     <label>noOfChildren</label>
//                         <input type="number" className="form-input" id="noOfChildren" onChange={(e) => {
//                              setNoOfChildren(e.target.value);
//                         }} required />            
//                     <br />
              
//                     <label>package</label>
//                                 <select name="cpackage" id="cpackage" onChange={(e) => {
//                                     setPackage(e.target.value)
//                                 }} >
//                                     <option value="Full Board">Full Board</option>
//                                     <option value="Half Board">Half Board</option>
//                                     <option value="Bed And Breakfast">Bed And Breakfast</option>
//                                     <option value="Bed And Tea">Bed And Tea</option>
                                    
//                                 </select>                   
//                     <br />                  
//                     <div>
//                         <button className="">Create Booking</button>
//                     </div> 
//                 </div>
//             </form>
//         </div>
//      );
// }
 
// export default AddBooking;









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










