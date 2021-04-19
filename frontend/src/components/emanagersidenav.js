import React from 'react';
import './sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (
     
            <div className="sidenav">

                <Link to="/allemployees">Employees</Link>
                <Link to="/addemployee">Add Employee</Link>
                <Link to="/addsalary">Add paid Salary</Link>
                <Link to="/paidsalary">Paid Salaries</Link>
                <Link to="/viewvacations">Vacation Requests</Link>
            </div>
      

    );
}