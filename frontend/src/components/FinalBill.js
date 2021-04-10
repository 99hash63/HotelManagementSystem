import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookingList from './BookingList';
import './FinalBill.css'
import FindBill from './ViewReleventBill';
import { useParams } from "react-router";

function ViewBills(){
    var [fname, setFname] = useState("");
    var [mail, setMail] = useState("");
    var[cost, setCost] = useState([]);
    var[details , setDetails] = useState([]);
    var [mail, setMail] = useState("");
    // var [All , setAll] = useState([]);

    function Accept(id) {
  
        axios.get(`http://localhost:5000/Meal_Order/Retrieve/${id}`).then((cost)=>{
            setMail(mail);
            setCost(cost.data);
            // console.log(cost);

            var x = document.getElementById("myDIV");
            if (x.style.display === "none") {
                x.style.display = "block";
            } 
            else {
                 x.style.display = "block";
            }

        }).catch((err)=>{
            alert("Incorrect Mail Address");
        })


        
        
        axios.get(`http://localhost:5000/booking/findOne/${id}`).then((detail)=>{
            setDetails(detail.data);
            // console.log("Sex");
            // console.log(details);
            // console.log("Sex");

            var x = document.getElementById("myDIV");
            if (x.style.display === "none") {
                x.style.display = "block";
            } 
            else {
                 x.style.display = "block";
            }

        }).catch((err)=>{
            alert("Incorrect Mail Address");
        })

        
        
    }

    var all= details.concat(cost);
    // setAll({All:all});
    console.log(all);


    return(
        <div>
            <div className="display-box">
                <div className="header-box"> Final Bill </div>

                    <div className="content-box-list">

                    <div class="wrap">
                        <div class="search">
                            <input type="text" class="searchTerm" placeholder="Enter Customer Mail Here"   onChange={(e) => {setMail(e.target.value);}}/>
                            {/* <Link to={"/ReleventBill/" + mail} class="searchButton">      </Link><br></br> */}
                            <button class="searchButton" onClick={e => Accept(mail)}> <i class="fa fa-search"></i> </button> 
                        </div>
                    </div>

                </div>
            </div>

            <div className="display-box">
                <div className="content-box-list">
        

                <div id="myDIV" hidden>
                    <h1 class="glow">Final Bill of   '{mail}'</h1>

                {all.map(function(all){

                    return<div>
                       
                       <h3>{all.fName} {all.lName} </h3>
                       <h3>{all.NIC}</h3>
                       <h3>{all.price}</h3>
                       <h3>{all.Total_Amount}</h3>
                       
                    </div>
                    

                }) 
                } 

                <td><input type="number" id="txt" placeholder="Enter Additional Bill"/></td>
                <button type="submit" class="registerbtn">Paid</button>

                    {/* <table id="items"> 

                        <tr>
                            <th> User Mail</th>
                            <th> Full Name</th>
                            <th>Advanced Payment</th>
                            <th>Food Bill</th>
                            <th>Bar Bill</th>
                            <th>Add Adition Payment</th>

                        </tr>

                        {all.map(function(all){
                    
                    
                          return<tr>
                            <td></td>
                            <td>{all.fName} {all.lName}</td>
                            <td></td>
                            <td>{all.Total_Amount}</td>
                            <td>sex</td>
                            <td><input type="number" placeholder="Enter Additional Payment"/></td>
                        </tr>

                        }) 
                            } 
                    </table> */}
               
             </div>
             </div>
             </div>
        </div>
    )

}


export default ViewBills;