import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




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

    return (
        <div>
            <h1>Vacation Requests</h1>
            <div className="content-box-list">
            <table class="center">
                <thead>
                    <tr>
                        <th>Request ID</th>
                        <th>Email</th>
                        <th>Propose</th>
                        <th>From</th>
                        <th>To</th>
                        

                    </tr>
                </thead>

                {vacation.map((vacation) => (

                    <div key={vacation._id}>

                        <tbody>
                            <tr>
                                <td>{vacation._id}</td>
                                <td>{vacation.eemail}</td>
                                <td>{vacation.propose}</td>
                                <td>{vacation.vfrom}</td>
                                <td>{vacation.vto}</td>
                                
                                

                                <td><Link to={"/#/"+vacation._id}> Approve </Link></td>
                                <td><Link to={"/rejectvacation/"+vacation._id}> Reject </Link></td>
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
