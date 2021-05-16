// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router";
// import { useHistory } from "react-router-dom";



// function AcceptBookingRequests() {
//     const history = useHistory();
//     var { id } = useParams();
//     console.log({ id });
//     var [requsetOne, setOneReq] = useState([]);

//     var [bookingId, setBookingId] = useState("");
//     var [fName, setfName] = useState("");
//     var [lName, setlName] = useState("");
//     var [address, setAddress] = useState("");
//     var [NIC, setNIC] = useState("");
//     var [email, setMail] = useState("");
//     var [promoCode, setpromoCode] = useState("");
//     var [travelAgent, settravelAgent] = useState("");
//     var [checkInDate, setcheckInDate] = useState("");
//     var [checkOutDate, setcheckOutDate] = useState("");
//     var [noOfAdults, setnoOfAdults] = useState("");
//     var [noOfChildren, setnoOfChildren] = useState("");
//     // var [package, setpkg] = useState("");
//     var [otherAccomodations, setotherAccomodations] = useState("");
//     var [nationality, setnationality] = useState("");
//     var [passportNo, setPassportNo] = useState("");
//     var [roomAllocation, setRoomAllocation] = useState("");
//     var [price, setPrice] = useState("");
//     var [bookingState, setbookingState] = useState("Active");




//     useEffect(() => {

//         axios.get(`http://localhost:5000/booking/find/${id}`).then((res) => {
//             setOneReq(res.data);
//             setBookingId(res.data.bookingId);
//             setfName(res.data.fName);
//             setlName(res.data.lName);
//             setAddress(res.data.address);
//             setNIC(res.data.NIC);
//             setMail(res.data.email);
//             setpromoCode(res.data.promoCode);
//             settravelAgent(res.data.travelAgent);
//             setcheckInDate(res.data.checkInDate);
//             setcheckOutDate(res.data.checkOutDate);
//             setnoOfAdults(res.data.noOfAdults);
//             setnoOfChildren(res.data.noOfChildren);
//             // setpkg(res.data.package);
//             setotherAccomodations(res.data.otherAccomodations);
//             setnationality(res.data.nationality);
//             setPassportNo(res.data.passportNo);
//             setPrice(res.data.price);
//             setRoomAllocation(res.data.roomAllocation);
//         }).catch((err) => {
//             alert(err);
//         })
//     }, [])



//     function Accept(id) {

//         // const newBooking = {
//         //     bookingId,
//         //     fName,
//         //     lName,
//         //     address,
//         //     NIC,
//         //     email,
//         //     promoCode,
//         //     travelAgent,
//         //     checkInDate,
//         //     checkOutDate,
//         //     noOfAdults,
//         //     noOfChildren,
//         //     // package,
//         //     otherAccomodations,
//         //     nationality,
//         //     passportNo,
//         //     roomAllocation,
//         //     price,
//         //     bookingState


//         // }
//         // console.log(id);
//         // console.log(fName);
//         // console.log(price);
//         // console.log(bookingState)
//         const result = window.confirm("Confirm?");
       
//         if (result == true) {
//             alert("ok1");
//             axios.put(`http://localhost:5000/booking/ActiveCus/${id}`).then((res) => {
//                 alert("Accepted Successful!");
//                 window.location = "/front-office-manager/request";
               

//             }).catch(() => {
//                 alert("Have Erro!");
//             })
//         } else {
//             window.location = "/front-office-manager/request";
//         }
//     }




//     function Delet(id) {
//         const result = window.confirm("Do you really want to Decline?");
        
//         if (result === true) {  
//             axios.delete(`http://localhost:5000/booking/delete/${id}`).then(() => {
//                 window.location = "/front-office-manager/request";
//                 alert("Decline Requset Success");
//             }).catch((err) => {
//                 alert(err);
//             })
//         } else {
//             window.location = "/front-office-manager/accept";
//         }
//     }


// return (
//     <div className="display-box">
       
//          <div id="edit-title" className="header-box"> Accept Booking Requset
            
//             <div>
//                     <button id="edit_btn" onClick={() => { history.goBack();}}>BACK</button>
                   
//                 </div>

//             </div>


//             <div className="content-box">
//             <form>
//             <div className="form1">
//             {/* <label>Booking Id :</label><br />
//                 <input type="text" defaultValue={requsetOne.bookingId} onChange={(e) => {
//                     setBookingId(e.target.value);
//                 }} /><br></br> */}

//             <label className="custom-field">
//             <input type="text" readOnly defaultValue={requsetOne.fName} onChange={(e) => {
//                 setfName(e.target.value);
//             }} />
//             <span className="placeholder">First Name</span>
//             </label><br></br>

//             <label className="custom-field">
//             <input type="text" readOnly defaultValue={requsetOne.lName} onChange={(e) => {
//                 setlName(e.target.value);
//             }} />
//              <span className="placeholder">Last Name</span>
//              </label><br></br>

//              <label className="custom-field">
//             <input type="text" readOnly defaultValue={requsetOne.address} onChange={(e) => {
//                 setAddress(e.target.value);
//             }} />
//              <span className="placeholder">Address</span>
//             </label><br></br>

//             <label className="custom-field">    
//             <input type="text" readOnly defaultValue={requsetOne.NIC} onChange={(e) => {
//                 setNIC(e.target.value);
//             }} /> <span className="placeholder">NIC</span>
//             </label><br></br>

//             <label className="custom-field">
//             <input type="text" readOnly defaultValue={requsetOne.promoCode} onChange={(e) => {
//                 setpromoCode(e.target.value);
//             }} /> <span className="placeholder">Promot code</span>
//             </label><br></br>
             
            
//             </div>

//             <div className="form2">
           

//             <label className="custom-field">
//             <input type="text" readOnly defaultValue={requsetOne.travelAgent} onChange={(e) => {
//                 settravelAgent(e.target.value);
//             }} /> <span className="placeholder">Travel Agent</span>
//             </label><br></br>

//             <label className="custom-field">
//             <input type="text" readOnly defaultValue={requsetOne.checkInDate} onChange={(e) => {
//                 setcheckInDate(e.target.value);
//             }} /> <span className="placeholder">Check In Date</span>
//             </label><br></br>

//             <label className="custom-field">
//             <input type="text" readOnly defaultValue={requsetOne.checkOutDate} onChange={(e) => {
//                 setcheckOutDate(e.target.value);
//             }} /><span className="placeholder">Check out Date</span>
//             </label><br></br>

//             <label className="custom-field">
//             <input type="text" readOnly defaultValue={requsetOne.noOfAdults} onChange={(e) => {
//                 setnoOfAdults(e.target.value);
//             }} /><span className="placeholder">No Of Adults</span>
//             </label><br></br>

            
//         <label className="custom-field">
//             <input type="text" defaultValue={requsetOne.noOfChildren} onChange={(e) => {
//                 setnoOfChildren(e.target.value);
//             }} /><span className="placeholder">No Of Children </span>
//             </label><br></br>

//             {/* <label>package :</label><br />
//                 <input type="text" defaultValue={requsetOne.pkg} onChange={(e) => {
//                     setpkg(e.target.value);
//                 }} /><span className="placeholder">Contract Id</span>
//             </label><br></br> */}

//             </div>


//             <div className="form2">
//             <label className="custom-field">
//             <input type="text" value={requsetOne.otherAccomodations} onChange={(e) => {
//                 setotherAccomodations(e.target.value);
//             }} /><span className="placeholder">Other Accomadation</span>
//             </label><br></br>

//         <label className="custom-field">
//             <input type="text" defaultValue={requsetOne.nationality} onChange={(e) => {
//                 setnationality(e.target.value);
//             }} /><span className="placeholder">Nationality</span>
//             </label><br></br>
//             <label className="custom-field">
//             <input type="text" defaultValue={requsetOne.passportNo} onChange={(e) => {
//                 setPassportNo(e.target.value);
//             }} /><span className="placeholder">Passport Number</span>
//             </label><br></br>

//             <label className="custom-field">
//             <input type="text" defaultValue={requsetOne.roomAllocation} onChange={(e) => {
//                 setRoomAllocation(e.target.value);
//             }} /><span className="placeholder">Room Allocation</span>
//             </label><br></br>


//             <button onClick={e => Accept(requsetOne.NIC)} style={{

//                 border: "1px solid rgb(124, 124, 124)",
//                 borderRadius: "90px",
//                 width: "110px",
//                 height: "35px",
//                 marginTop: "20px",
//                 background: "white",
//                 color: "black",
//                 marginright: "20px",
//                 fontSize: "15px",
//                 backgroundcolor: "white",
//                 padding: "4px 8px 4px 8px",
//                 outline: "none"
//             }

//             } >Accept</button>


//         <button onClick={e => Delet(requsetOne._id)} style={{

//         border: "1px solid rgb(124, 124, 124)",
//         borderRadius: "90px",
//         width: "110px",
//         height: "35px",
//         marginTop: "20px",
//         marginLeft:"5px",
//         background: "white",
//         color: "black",
//         marginright: "20px",
//         fontSize: "15px",
//         backgroundcolor: "white",
//         padding: "4px 8px 4px 8px",
//         outline: "none"
//     }

//         } >Decline</button>


//             </div>
//         </form>
//         </div>

//     </div>
// )
// }

// export default AcceptBookingRequests;




































import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";



function AcceptBookingRequests() {
    const history = useHistory();
    var { id } = useParams();
    console.log({ id });
    var [requsetOne, setOneAgent] = useState([]);

    var [bookingId, setBookingId] = useState("");
    var [fName, setfName] = useState("");
    var [lName, setlName] = useState("");
    var [address, setAddress] = useState("");
    var [NIC, setNIC] = useState("");
    var [email, setMail] = useState("");
    var [promoCode, setpromoCode] = useState("");
    var [travelAgent, settravelAgent] = useState("");
    var [checkInDate, setcheckInDate] = useState("");
    var [checkOutDate, setcheckOutDate] = useState("");
    var [noOfAdults, setnoOfAdults] = useState("");
    var [noOfChildren, setnoOfChildren] = useState("");
    // var [package, setpkg] = useState("");
    var [otherAccomodations, setotherAccomodations] = useState("");
    var [nationality, setnationality] = useState("");
    var [passportNo, setPassportNo] = useState("");
    var [roomAllocation, setRoomAllocation] = useState("");
    var [price, setPrice] = useState("");
    var [bookingState, setbookingState] = useState("Active");




    useEffect(() => {

        axios.get(`http://localhost:5000/booking/find/${id}`).then((res) => {
            setOneAgent(res.data);
            setBookingId(res.data.bookingId);
            setfName(res.data.fName);
            setlName(res.data.lName);
            setAddress(res.data.address);
            setNIC(res.data.NIC);
            setMail(res.data.email);
            setpromoCode(res.data.promoCode);
            settravelAgent(res.data.travelAgent);
            setcheckInDate(res.data.checkInDate);
            setcheckOutDate(res.data.checkOutDate);
            setnoOfAdults(res.data.noOfAdults);
            setnoOfChildren(res.data.noOfChildren);
            // setpkg(res.data.package);
            setotherAccomodations(res.data.otherAccomodations);
            setnationality(res.data.nationality);
            setPassportNo(res.data.passportNo);
            setPrice(res.data.price);
            setRoomAllocation(res.data.roomAllocation);
        }).catch((err) => {
            alert(err);
        })
    }, [])



    function Accept(id) {

        const newBooking = {
            bookingId,
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
            // package,
            otherAccomodations,
            nationality,
            passportNo,
            roomAllocation,
            price,
            bookingState


        }
        console.log(id);
        console.log(fName);
        console.log(price);
        console.log(bookingState)
        const result = window.confirm("Confirm?");
        if (result == true) {

            axios.put(`http://localhost:5000/booking/ActiveCus/${id}`).then((res) => {
                window.location = "/front-office-manager/request";
                alert("Accepted Successful!");

            }).catch(() => {
                alert("Have Erro!");
            })
        } else {
            window.location = "/front-office-manager/accept/" + id;
        }
    }




    function Delet(id) {
       

        const result = window.confirm("Do you really want to Decline?");
        if (result == true) {

            axios.delete(`http://localhost:5000/booking/delete/${id}`).then(() => {
                window.location = "/front-office-manager/request";
                alert("Decline Requset Success");
            }).catch((err) => {
                alert(err);
            })
        } else {
            window.location = "/front-office-manager/accept/" + id;
        }
    }


return (
    <div className="display-box">
         <i  onClick={() => { history.goBack();}} class="fas fa-chevron-circle-left"></i>

         <div id="edit-title" className="header-box"> Accept Booking Requset
            
            <div>
                    <button id="edit_btn" onClick={e => Accept(requsetOne.NIC)}>Accept</button>
                    <button  id="delete_btn" onClick={e => Delet(requsetOne._id)}>Delete</button>
                </div>

            </div>


            <div className="content-box">
            <form>
            <div className="form1">
            {/* <label>Booking Id :</label><br />
                <input type="text" defaultValue={requsetOne.bookingId} onChange={(e) => {
                    setBookingId(e.target.value);
                }} /><br></br> */}

            <label className="custom-field">
            <input type="text" readOnly defaultValue={requsetOne.fName} onChange={(e) => {
                setfName(e.target.value);
            }}readOnly />
            <span className="placeholder">First Name</span>
            </label><br></br>

            <label className="custom-field">
            <input type="text" readOnly defaultValue={requsetOne.lName} onChange={(e) => {
                setlName(e.target.value);
            }}readOnly />
             <span className="placeholder">Last Name</span>
             </label><br></br>

             <label className="custom-field">
            <input type="text" readOnly defaultValue={requsetOne.address} onChange={(e) => {
                setAddress(e.target.value);
            }}readOnly />
             <span className="placeholder">Address</span>
            </label><br></br>

            <label className="custom-field">    
            <input type="text" readOnly defaultValue={requsetOne.NIC} onChange={(e) => {
                setNIC(e.target.value);
            }}readOnly /> <span className="placeholder">NIC</span>
            </label><br></br>

            <label className="custom-field">
            <input type="text" readOnly defaultValue={requsetOne.promoCode} onChange={(e) => {
                setpromoCode(e.target.value);
            }}readOnly /> <span className="placeholder">Promot code</span>
            </label><br></br>
             
            
            </div>

            <div className="form2">
           

            <label className="custom-field">
            <input type="text" readOnly defaultValue={requsetOne.travelAgent} onChange={(e) => {
                settravelAgent(e.target.value);
            }} readOnly/> <span className="placeholder">Travel Agent</span>
            </label><br></br>

            <label className="custom-field">
            <input type="text" readOnly defaultValue={requsetOne.checkInDate} onChange={(e) => {
                setcheckInDate(e.target.value);
            }}readOnly /> <span className="placeholder">Check In Date</span>
            </label><br></br>

            <label className="custom-field">
            <input type="text" readOnly defaultValue={requsetOne.checkOutDate} onChange={(e) => {
                setcheckOutDate(e.target.value);
            }} readOnly/><span className="placeholder">Check out Date</span>
            </label><br></br>

            <label className="custom-field">
            <input type="text" readOnly defaultValue={requsetOne.noOfAdults} onChange={(e) => {
                setnoOfAdults(e.target.value);
            }}readOnly /><span className="placeholder">No Of Adults</span>
            </label><br></br>

            
        <label className="custom-field">
            <input type="text" defaultValue={requsetOne.noOfChildren} onChange={(e) => {
                setnoOfChildren(e.target.value);
            }} readOnly/><span className="placeholder">No Of Children </span>
            </label><br></br>

            {/* <label>package :</label><br />
                <input type="text" defaultValue={requsetOne.pkg} onChange={(e) => {
                    setpkg(e.target.value);
                }} /><span className="placeholder">Contract Id</span>
            </label><br></br> */}

            </div>


            <div className="form2">
            <label className="custom-field">
            <input type="text" value={requsetOne.otherAccomodations} onChange={(e) => {
                setotherAccomodations(e.target.value);
            }}readOnly /><span className="placeholder">Other Accomadation</span>
            </label><br></br>

        <label className="custom-field">
            <input type="text" defaultValue={requsetOne.nationality} onChange={(e) => {
                setnationality(e.target.value);
            }} readOnly/><span className="placeholder">Nationality</span>
            </label><br></br>
            <label className="custom-field">
            <input type="text" defaultValue={requsetOne.passportNo} onChange={(e) => {
                setPassportNo(e.target.value);
            }} readOnly/><span className="placeholder">Passport Number</span>
            </label><br></br>

            <label className="custom-field">
            <input type="text" defaultValue={requsetOne.roomAllocation} onChange={(e) => {
                setRoomAllocation(e.target.value);
            }} readOnly/><span className="placeholder">Room Allocation</span>
            </label><br></br>

            </div>
        </form>
        </div>
    </div>
)
}

export default AcceptBookingRequests;