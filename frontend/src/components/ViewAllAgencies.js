import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AddAgent.css'
import { useHistory } from "react-router-dom";





function ViewAll() {
    const history = useHistory();
    var [agent, setAgent] = useState([]);

    useEffect(() => {
        function getAgent() {
            axios.get("http://localhost:5000/Travel_Agency/Retrieve").then((res) => {
                setAgent(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        getAgent();

    })

    return (
        <div className="display-box">
            <div className="header-box"> All Agencies 
            <button id="edit_btn"  onClick={() => { history.goBack();}}>BACK</button>
            </div>
            <div className="content-box-list">
            <table>
            <thead>
                    <tr>
                        <th>contract Id</th>
                        <th>Name</th>
                        <th>Mail Address</th>
                        <th>Mobile Number</th>
                        <th>Address</th>
                        <th>Passcode</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>

                {agent.map(function(agent){

                           return <tr>
                                <td>{agent.contract_id}</td>
                                <td>{agent.name}</td>
                                <td>{agent.mail_Address}</td>
                                <td>{agent.mobile}</td>
                                <td>{agent.address}</td>
                                <td>{agent.passcode}</td>
                                <td>{agent.rate}</td>
                                <td><Link to={"/front-office-manager/viewOne/" + agent._id}> <i class="far fa-edit"></i> </Link></td>
                            </tr>
                     
                   
                })}
                </tbody>
            </table>
            </div>
        </div>

    )
}


export default ViewAll;



