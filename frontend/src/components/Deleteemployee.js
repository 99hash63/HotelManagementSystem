import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Delete() {
    var { id } = useParams();
    useEffect(() => {

        function delet(id) {

            const result = window.confirm("Do you really want to Delete?");
            if (result == true) {

                axios.delete(`http://localhost:5000/employee/delete/${id}`).then((res) => {
                    window.location = "/Viewall";
                    alert("Delete Success");
                }).catch(() => {
                    alert("Have Erro!");
                })
            } else {
                window.location = "/viewOne/" + id;
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