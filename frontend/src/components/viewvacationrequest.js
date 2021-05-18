import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jspdf from 'jspdf'
import "jspdf-autotable"
import "../components/InventoryList.css"


//Get all data from database
function ViewAll() {
    var [vacation, setVacation] = useState([]);

    useEffect(() => {
        function getVacations() {
            console.log("sucess");
            axios.get("http://localhost:5000/vacation//Allvacations").then((res) => {
                setVacation(res.data);
                
            }).catch((err) => {
                alert(err);
            })
        }
        getVacations();

    })

        //Genarate Paid Vacation request report
        const generatePDF = tickets => {

            const doc = new jspdf();
            const tableColumn = ["Email", "Propose", "From", "To"];
            const tableRows = [];
    
            tickets.slice(0).reverse().map(ticket => {
                const ticketData = [
                    ticket.eemail,
                    ticket.propose,
                    ticket.vfrom,
                    ticket.vto,
                  
                ];
                tableRows.push(ticketData);
            });
    
            doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });
            const date = Date().split(" ");
            const dateStr = date[1] + "-" + date[2] + "-" + date[3];
            var img = new Image().src = '/images/logo.png'
            doc.addImage(img, 'JPEG', 160, 9, 49, 15);
            doc.text("Vacation Request Report", 14, 15).setFontSize(12);
            doc.text(`Report Genarated Date - ${dateStr} `, 14, 23);
            doc.save(`VacatioRequest_report_${dateStr}.pdf`);
        };

    return (
    <div className="display-box">
        <div className="header-box">
            <div>Vacation Requests<button id="generate-reportt-btn" onClick={() => generatePDF(vacation)}>Create Report</button></div>

            <div className="total-vacation-display">
                <span id="total-vacation-display-total">{vacation.length}</span> <br />
                <span id="total-vacation-display-text">Total Vacation Requests</span>
            </div>
        </div>

        <div>
            
            <div className="content-box-list">
            <table >
                <thead>
                    <tr>
                        <th>Request ID</th>
                        <th>Email</th>
                        <th>Propose</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Aprove</th>
                        <th>Reject</th>
                        

                    </tr>
                </thead>
                <tbody>
                {vacation.map(function(vacation){

                    

                       
                            return<tr>
                                <td>{vacation._id}</td>
                                <td>{vacation.eemail}</td>
                                <td>{vacation.propose}</td>
                                <td>{vacation.vfrom}</td>
                                <td>{vacation.vto}</td>
                                
                                

                                <td><Link to={"/#/"+vacation._id}> Approve </Link></td>
                                <td><Link to={"/rejectvacation/"+vacation._id}> Reject </Link></td>
                            </tr>
                        
                   
                })}
                </tbody>
            </table>
            </div>
        </div>

    </div>
    )
}


export default ViewAll;
