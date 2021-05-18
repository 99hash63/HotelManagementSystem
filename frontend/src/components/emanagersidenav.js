import React, { useState, useEffect } from 'react';
import './sidenav.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    const [resock, setresock] = useState(0);
    const [inventory, setinventory] = useState([]);

    // useEffect(() => { //fectching all inventory data from the DB
    //     axios.get("http://localhost:5000/employee//Retrieve").then((res) => {
    //         if (res.data.length > 0) {
    //             setinventory(res.data);

    //         }
    //     }).catch((e) => {
    //         console.log(e);
    //     })



    // }, [inventory])

    // useEffect(() => {
    //     if (inventory.length == 0) {
    //         document.getElementById('icon-button__badge').style.display = "none ";
    //     }
    //     else if (inventory.length != 0) {

    //         document.getElementById('icon-button__badge').style.display = "block ";
    //     }

    // }, [inventory])




    return (

        <div className="sidenav">

            

                <Link to="/emp-manager">Employees</Link>
                <Link to="/emp-manager/addemployee">Add Employee</Link>
                <Link to="/emp-manager/addsalary">Add paid Salary</Link>
                <Link to="/emp-manager/paidsalary">Paid Salaries</Link>
                <Link to="/emp-manager/viewvacations">Vacation Requests</Link>


        </div>


    );
}









