import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Delete() {
    var { id } = useParams();
    useEffect(() => {

        function delet(id) {

            const result = window.confirm("Do you really want to Reject Vacation?");
            if (result == true) {

                axios.delete(`http://localhost:5000/vacation/reject/${id}`).then((res) => {
                    window.location = "/viewvacations";
                    alert("Vacation Reject");
                }).catch(() => {
                    alert("Have Erro!");
                })
            } else {
                window.location = "/viewvacations/" ;
            }
        }
        delet(id);
    })



    return (
        <div>

        </div>
    )
}

export default Delete;