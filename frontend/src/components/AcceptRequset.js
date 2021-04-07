import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";


function AcceptBookingRequests() {
    var { id } = useParams();
    console.log({ id });
    var [requsetOne, setOneAgent] = useState([]);

    var [bookingId, setBookingId] = useState("");
    var [fName, setfName] = useState("");
    var [lName, setlName] = useState("");
    var [address, setAddress] = useState("");
    var [NIC, setNIC] = useState("");
    var [promoCode, setpromoCode] = useState("");
    var [travelAgent, settravelAgent] = useState("");
    var [checkInDate, setcheckInDate] = useState("");
    var [checkOutDate, setcheckOutDate] = useState("");
    var [noOfAdults, setnoOfAdults] = useState("");
    var [noOfChildren, setnoOfChildren] = useState("");
    var [pkg, setpkg] = useState("");
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
            setpromoCode(res.data.promoCode);
            settravelAgent(res.data.travelAgent);
            setcheckInDate(res.data.checkInDate);
            setcheckOutDate(res.data.checkOutDate);
            setnoOfAdults(res.data.noOfAdults);
            setnoOfChildren(res.data.noOfChildren);
            setpkg(res.data.package);
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
            promoCode,
            travelAgent,
            checkInDate,
            checkOutDate,
            noOfAdults,
            noOfChildren,
            pkg,
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

            axios.put(`http://localhost:5000/booking/update/${id}`, newBooking).then((res) => {
                window.location = "/request";
                alert("Accepted Successful!");

            }).catch(() => {
                alert("Have Erro!");
            })
        } else {
            window.location = "/request";
        }
    }

    return (
        <div>
            <form>
                {/* <label>Booking Id :</label><br />
                <input type="text" defaultValue={requsetOne.bookingId} onChange={(e) => {
                    setBookingId(e.target.value);
                }} /><br></br> */}

                <label>First Name:</label><br />
                <input type="text" defaultValue={requsetOne.fName} onChange={(e) => {
                    setfName(e.target.value);
                }} /><br></br>

                <label>Last Name :</label><br />
                <input type="text" defaultValue={requsetOne.lName} onChange={(e) => {
                    setlName(e.target.value);
                }} /><br></br>

                <label>Address :</label><br />
                <input type="text" defaultValue={requsetOne.address} onChange={(e) => {
                    setAddress(e.target.value);
                }} /><br></br>

                <label>NIC number :</label><br />
                <input type="text" defaultValue={requsetOne.NIC} onChange={(e) => {
                    setNIC(e.target.value);
                }} /><br></br>

                <label>Promot Code :</label><br />
                <input type="text" defaultValue={requsetOne.promoCode} onChange={(e) => {
                    setpromoCode(e.target.value);
                }} /><br></br>

                <label>Travel Agent :</label><br />
                <input type="text" defaultValue={requsetOne.travelAgent} onChange={(e) => {
                    settravelAgent(e.target.value);
                }} /><br></br>

                <label>Chek In Date</label><br />
                <input type="text" defaultValue={requsetOne.checkInDate} onChange={(e) => {
                    setcheckInDate(e.target.value);
                }} /><br></br>

                <label>Check Out Date:</label><br />
                <input type="text" defaultValue={requsetOne.checkOutDate} onChange={(e) => {
                    setcheckOutDate(e.target.value);
                }} /><br></br>

                <label>Number Of Adults :</label><br />
                <input type="text" defaultValue={requsetOne.noOfAdults} onChange={(e) => {
                    setnoOfAdults(e.target.value);
                }} /><br></br>

                <label>Number Of Children :</label><br />
                <input type="text" defaultValue={requsetOne.noOfChildren} onChange={(e) => {
                    setnoOfChildren(e.target.value);
                }} /><br></br>

                <label>package :</label><br />
                <input type="text" defaultValue={requsetOne.pkg} onChange={(e) => {
                    setpkg(e.target.value);
                }} /><br></br>

                <label>Other Accomodation :</label><br />
                <input type="text" value={requsetOne.otherAccomodations} onChange={(e) => {
                    setotherAccomodations(e.target.value);
                }} /><br></br>

                <label>Nationalty :</label><br />
                <input type="text" defaultValue={requsetOne.nationality} onChange={(e) => {
                    setnationality(e.target.value);
                }} /><br></br>

                <label>Passport Number :</label><br />
                <input type="text" defaultValue={requsetOne.passportNo} onChange={(e) => {
                    setPassportNo(e.target.value);
                }} /><br></br>

                <label>Room Allocation :</label><br />
                <input type="text" defaultValue={requsetOne.roomAllocation} onChange={(e) => {
                    setRoomAllocation(e.target.value);
                }} /><br></br>


            </form>

            <tr>
                <td><Link to={"/decline/" + requsetOne._id}>Decline</Link> </td>  
                <td><button onClick={e => Accept(requsetOne._id)}>Accept</button></td>
                <td><Link to={"/request"}>Back</Link> </td> 
            </tr>
        </div>
    )
}

export default AcceptBookingRequests;