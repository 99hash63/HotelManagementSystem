import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookingList from './BookingList';
import './FinalBills.css'
import FindBill from './ViewReleventBill';
import { useParams } from "react-router";

function ViewBills() {
   
    const [mail, setMail] = useState("");
  
    return (
        <div>
           
                <div className="header-box"> Final Bill </div>
                   <div class="wrap">
                        <div class="search">
                            <input type="text" class="searchTerm" placeholder="Enter Customer Mail Here" onChange={(e) => { setMail(e.target.value); }} />
                            <Link to={"/front-office-manager/PaidBill/" + mail} class="searchButton">   <i class="fa fa-search"></i>   </Link><br></br>
                            {/* <button class="searchButton" onClick={Accept}> <i class="fa fa-search"></i> </button> */}
                        </div>
               
            </div>
        </div>
    )

}


export default ViewBills;