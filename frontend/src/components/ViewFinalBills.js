import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";


function ViewFinalBill(){
    var [fBill, setBill] = useState([]);

    useEffect(() => {
            axios.get("http://localhost:5000/FinalBill/ViewBills").then((res) => {
                setBill(res.data);
            }).catch((err) => {
                alert(err);
            })
    

    },[])



    return(
        <div className="display-box">
             <div className="header-box"> All Final Bills </div>
             <div className="content-box-list">
                 <table >
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>NIC Number</th>
                        <th>Mail Address</th>
                        <th>Allocationa Amount</th>
                        <th>Meal Order Cost</th>
                        <th>BarOrder Cost</th>
                        <th>Additional Amount</th>
                        <th>Final Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                        {fBill.map(function(bill){
                            return <tr>
                                <td>{bill.CusName}</td>
                                <td>{bill.NIC}</td>
                                <td>{bill.Mail}</td>
                                <td>{bill.Allocationa_Amount}</td>
                                <td>{bill.Meal_Order_Cost}</td>
                                <td>{bill.BarOrder_Cost}</td>
                                <td>{bill.Additional_Bill}</td>
                                <td>{bill.Final_Cost}</td>
                            </tr>
                        })}
                    
                    </tbody>
                 </table>


             </div>

        </div>
    );
}

export default ViewFinalBill;