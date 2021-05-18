import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import jspdf from 'jspdf'
import "jspdf-autotable"
import { useHistory } from "react-router-dom";
import './FinalBills.css'
import { Link } from 'react-router-dom';



function ViewFinalBill(){
    var [fBill, setBill] = useState([]);
    const [search, setsearch] = useState("");
    const [filtered, setfiltered] = useState([]);
    const history = useHistory();


    useEffect(() => {
            axios.get("http://localhost:5000/FinalBill/ViewBills").then((res) => {
                setBill(res.data);
            }).catch((err) => {
                alert(err);
            })
    

    },[])


    useEffect(() => { //search funtion
        setfiltered(
          //filtering the inventory array to only contain objects that match with the seach term and save in the FILTERED useState 
          fBill.filter(items => {
            return items.CusName.toLowerCase().includes(search.toLowerCase())
              || items.NIC.toLowerCase().includes(search.toLowerCase())
          })
        )
      }, [search, fBill])



    function generatePDF(tickets){
        const doc = new jspdf();
        const tableColumn = ["First Name", "NIC Number", "Mail Address", "Allocationa Amount", "Meal Order Cost", "BarOrder Cost", "Additional Amount", "Adults", "Children", "Final Amount"];
        const tableRows = [];

        tickets.slice(0).reverse().map(ticket => {
            const ticketData = [
                ticket.CusName,
                ticket.NIC,
                ticket.Mail,
                ticket.Allocationa_Amount,
                ticket.Meal_Order_Cost,
                ticket.BarOrder_Cost,
                ticket.Additional_Bill,
                ticket.Final_Cost,
            ];
            tableRows.push(ticketData);
        });

        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];
        var img = new Image().src = '/images/logo.png'
        doc.addImage(img, 'JPEG', 160, 9, 49, 15);
        doc.text("Final-Bill-Report", 14, 15).setFontSize(12);
        doc.text(`Report Genarated Date - ${dateStr} `, 14, 23);
        doc.save(`Final-Bill-Report_${dateStr}.pdf`);
    }



    return(
        <div className="display-box">
          
            <div id="edit-title" className="header-box"> View Final Bills
            
            <div>
                     <button  id="delete_btn"   onClick={e => generatePDF(fBill)}>REPORT</button>
                    <button id="edit_btn"  onClick={() => { history.goBack();}}>BACK</button>
                  
                </div>

            </div>
             <div className="content-box-list">
             <div class="search">
            <input type="text" class="searchTerm" placeholder="Enter Customer Mail Here"  style={{width:"500px", marginLeft:220}} placeholder="Enter Customer Name or NIC number Here" onChange={e => { setsearch(e.target.value) }}/><br></br>
              <Link to={"/front-office-manager/ViewFinalBill"} class="searchButton">   <i class="fa fa-search"></i>   </Link><br></br>
               </div>
                 <table style={{marginTop:10}} >
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
                        {filtered.slice(0).reverse().map(function(bill){
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