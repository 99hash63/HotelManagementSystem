import React from "react";
import "../components/navigation1.css"
import {Link} from 'react-router-dom';

function Navgation1(){
    return(
           
    <div className = "wrapper">
    <div className="sidebar">
        <h2>Employee Management</h2>
        <ul>
            <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
            <li><a href="#"><i class="fas fa-Employee"></i>Employees</a></li>
            <li><a href="#"><i class="fas fa-addemployee"></i>Add Employee</a></li>
            <li><a href="#"><i class="fas fa-salarymanagement"></i>Salary Management</a></li>
            <li><a href="#"><i class="fas fa-Attendance"></i>Attendance</a></li>

        </ul> 
    </div>
    </div>
        
            

    )
}

export default Navgation1;