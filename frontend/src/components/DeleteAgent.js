import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Delet() {
    var { id } = useParams();
    useEffect(() => {

        function delet(id) {

            const result = window.confirm("Do you really want to Delete?");
            if (result == true) {

                axios.delete(`http://localhost:5000/Travel_Agency/delete/${id}`).then((res) => {
                    console.log(res);
                    window.location = "/front-office-manager/viewAllAgencies";
                    alert("Delete Success");
                }).catch(() => {
                    alert("Have Erro!");
                })
            } else {
                window.location = "/front-office-manager/viewOne/" + id;
            }
        }
        delet(id);
    })



    return (
        <div> 

        </div>
    )
}

export default Delet;
