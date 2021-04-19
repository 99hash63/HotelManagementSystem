import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




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

    return (
        <div>
            <h1>Paid Salary</h1>
            <div className="content-box-list">
            <table class="center">
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

                    </tr>
                </thead>

                {salary.map((salary) => (

                    <div key={salary._id}>

                        <tbody>
                            <tr>
                                <td>{salary._id}</td>
                                <td>{salary.email}</td>
                                <td>{salary.accountNo}</td>
                                <td>{salary.basicSalary}</td>
                                <td>{salary.otRate}</td>
                                <td>{salary.otHours}</td>
                                <td>{salary.totalsalary}</td>
                                <td>{salary.paidDate}</td>
                                

                                <td><Link to={"/#/"+salary._id}> <i class="far fa-edit"></i> </Link></td>
                            </tr>
                        </tbody>
                    </div>
                ))}
            </table>
            </div>
        </div>

    )
}


export default ViewAll;
