import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import jspdf from 'jspdf'
import "jspdf-autotable"

const UpdateAccount = () => {
    const [myAccount, setMyAccount] = useState([]);
    // const [fname, setFname] = useState("");
    // const [lname, setLname] = useState("");
    // const [address, setAddress] = useState("");
    // const [NIC, setNIC] = useState("");
    // const [nationality, setNationality] = useState("");
    // const [passportNo, setPassportNo] = useState("");
    // const [email, setEmail] = useState("");
    // const [contact, setContact] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordVerify, setPasswordVerify] = useState("");



        //updating funtion
        // function updateData(e) {
        //     e.preventDefault();
    
        //     const newAccount = {
        //         promoCode, travelAgent, checkInDate, checkOutDate, noOfAdults, noOfChildren, cpackage, otherAccomodations, roomAllocation, price
        //     }
    
        //     axios.put(`http://localhost:5000/customer/update/${id}`, newAccount).then(() => {
    
        //     }).catch((e) => {
        //         alert("error");
        //     })
    
        // }

        //delete inventory button funtion
        // var timesClicked =0;
        // const delete_inventory = () => {
        //     timesClicked++;
            
        //     if (timesClicked > 1) {
        //         axios.delete(`http://localhost:5000/customer/update/${id}`).then(() => {
        //             window.location = "/inventory"
        //             timesClicked=0
        //         }).catch((e) => {
        //             alert("error");
        //         })
        //     } else {
        //         document.getElementById('delete_btn').innerHTML = "Confirm Delete"
        //         document.getElementById("delete_btn").style.color = "white";
        //         document.getElementById("delete_btn").style.backgroundColor ="rgb(255, 0, 55)"
        //         document.getElementById("delete_btn").style.borderColor ="rgb(255, 0, 55)"
        //     }
    
        // }




    async function getMyAccount(){
        const myAccountRes = await axios.get("http://localhost:5000/customer/get");
        
        setMyAccount(myAccountRes.data);
        // setFname(myAccountRes.data.fname);
        // setLname(myAccountRes.data.lname);
        // setAddress(myAccountRes.data.address);
        // setNIC(myAccountRes.data.NIC);
        // setNationality(myAccountRes.data.nationality);
        // setPassportNo(myAccountRes.data.passportNo);
        // setEmail(myAccountRes.data.email);
        // setContact(myAccountRes.data.contact);
        // setPassword(myAccountRes.data.password);
        // setPasswordVerify(myAccountRes.data.passwordVerify);
    }
    useEffect(() => {
        getMyAccount();
        
    }, []);

    function renderAccount(){
        return myAccount.map((myAccount) => {
            return (
                <div>
                    <li>First Name <input type="text" value={myAccount.fname}/></li>
                    <li>Last Name <input type="text" value={myAccount.lname}/></li>
                    <li>Address <input type="text" value={myAccount.address}/></li>
                    <li>NIC <input type="text" value={myAccount.NIC}/></li>
                    <li>Nationality <input type="text" value={myAccount.nationality}/></li>
                    <li>PassportNo <input type="text" value={myAccount.passportNo}/></li>
                    <li>Email <input type="text" value={myAccount.email}/></li>
                    <li>Contact <input type="text" value={myAccount.contact}/></li>
                </div>
            )   
        })
    }

    return ( 
        <div>
            <ul>
                {renderAccount()}
            </ul>
        
        </div>
     );
     
}
 
export default UpdateAccount; 