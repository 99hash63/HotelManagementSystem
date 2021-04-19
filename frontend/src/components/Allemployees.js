import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './InventoryList.css'




function ViewAll() {
    var [employee, setEmployee] = useState([]);

    useEffect(() => {
        function getEmployee() {
            console.log("sucess");
            axios.get("http://localhost:5000/employee//Retrieve").then((res) => {
                setEmployee(res.data);
                
            }).catch((err) => {
                alert(err);
            })
        }
        getEmployee();

    })

    return (
        <div>
            <h1>All Employees</h1>
            <div className="content-box-list">
            <table class="center">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee Type</th>
                        <th>Date Of Birthr</th>
                        <th>Nic No</th>
                        <th>Address</th>
                        <th>Mobile No</th>
                        <th>Bank Account No</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>

                {employee.map((employee) => (

                    <div key={employee._id}>

                        <tbody>
                            <tr>
                                <td>{employee._id}</td>
                                <td>{employee.fname}</td>
                                <td>{employee.lname}</td>
                                <td>{employee.eType}</td>
                                <td>{employee.dob}</td>
                                <td>{employee.nic}</td>
                                <td>{employee.address}</td>
                                <td>{employee.mobileno}</td>
                                <td>{employee.bankaccountno}</td>
                                <td>{employee.email}</td>
                                <td>{employee.password}</td>

                                <td><Link to={"/Viewoneemployee/"+employee._id}> <i class="far fa-edit"></i> </Link></td>
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
