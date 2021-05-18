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
        <div className="display-box">
           <div className="header-box"> All Employees 
            
            </div>
            <div className="content-box-list">
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee Type</th>
                        <th>Nic No</th>
                        <th>Mobile No</th>
                        <th>Bank</th>
                        <th>Branch</th>
                        <th>Bank Account No</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {employee.map(function(employee){

                  

                       
                            return<tr>
                                <td>{employee._id}</td>
                                <td>{employee.fname}</td>
                                <td>{employee.lname}</td>
                                <td>{employee.eType}</td>
                                <td>{employee.nic}</td>
                                <td>{employee.mobileno}</td>
                                <td>{employee.bank}</td>
                                <td>{employee.bankbranch}</td>
                                <td>{employee.bankaccountno}</td>
                                <td>{employee.email}</td>
                                <td>{employee.password}</td>
                                <td><Link to={"/emp-manager/Viewoneemployee/"+employee._id}> <i class="far fa-edit"></i> </Link></td>
                            </tr>
                       
                    
                })}
                 </tbody>
            </table>
            </div>
        </div>

    )
}


export default ViewAll;
