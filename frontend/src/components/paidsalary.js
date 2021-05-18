import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../components/InventoryList.css"
import jspdf from 'jspdf'
import "jspdf-autotable"




function ViewAll() {
    var [salary, setSalary] = useState([]);

    useEffect(() => {
        function getSalaries() {
            console.log("sucess");
            axios.get("http://localhost:5000/salary//paidsalary").then((res) => {
                setSalary(res.data);
                
            }).catch((err) => {
                alert(err);
            })
        }
        getSalaries();

    })

    //Genarate Paid salary report
    const generatePDF = tickets => {

        const doc = new jspdf();
        const tableColumn = ["Email", "Account No", "Basic Salary", "Ot Rate", "Ot Hours", "Total Salary", "Paid Date"];
        const tableRows = [];

        tickets.slice(0).reverse().map(ticket => {
            const ticketData = [
                ticket.email,
                ticket.accountNo,
                ticket.basicSalary,
                ticket.otRate,
                ticket.otHours,
                ticket.totalsalary,
                ticket.paidDate,
            
            ];
            tableRows.push(ticketData);
        });

        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];
        var img = new Image().src = '/images/logo.png'
        doc.addImage(img, 'JPEG', 160, 9, 49, 15);
        doc.text("Paid Salary Report", 14, 15).setFontSize(12);
        doc.text(`Report Genarated Date - ${dateStr} `, 14, 23);
        doc.save(`PaidSalary_report_${dateStr}.pdf`);
    };

    return (
        
        <div className="display-box">
        <div className="header-box">
            <div>Paid Salary<button id="generate-reportt-btn" onClick={() => generatePDF(salary)}>Create Report</button></div>

            <div className="total-salary-display">
                <span id="total-salary-display-total">{salary.length}</span> <br />
                <span id="total-salary-display-text">Total PaidSalary</span>
            </div>
        </div>


        
            
            <div className="content-box-list">
            <table >
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Email</th>
                        <th>Account No</th>
                        <th>Basic Salary</th>
                        <th>Ot Rate</th>
                        <th>Ot Hours</th>
                        <th>Total Salary</th>
                        <th>Paid Date</th>
                        <th></th>


                    </tr>
                </thead>
                <tbody>
                {salary.map(function(salary){


                       
                           return <tr>
                                <td>{salary._id}</td>
                                <td>{salary.email}</td>
                                <td>{salary.accountNo}</td>
                                <td>{salary.basicSalary}</td>
                                <td>{salary.otRate}</td>
                                <td>{salary.otHours}</td>
                                <td>{salary.totalsalary}</td>
                                <td>{salary.paidDate.substring(0, 10)}</td>
                                <td><Link to={"/emp-manager/Viewonepayment/"+salary._id}> <i class="far fa-edit"></i> </Link></td>
                            </tr>
                        
                    
                })}
                </tbody>
            </table>
            </div>
        </div>

    )
}


export default ViewAll;
