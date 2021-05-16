import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './ReStock.css'


const ReStock = () => {

    const [newStock, setnewStock] = useState(0);
    const [inventory, setinventory] = useState([]);


    useEffect(() => {
        //fecting all inventory data from the DB
        axios.get("http://localhost:5000/inventory/").then((res) => {
            if (res.data.length > 0) {
                setinventory(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    }, [update])

    function update(e, id, quantity) {
        e.preventDefault();
        //adding the new stock quantity for the existing quantity
        const total = parseInt(quantity) + parseInt(newStock);
        const newStockvalue = { total };
        if (newStock>0) {
            axios.put(`http://localhost:5000/inventory/updatestock/${id}`, newStockvalue).then(() => {

        }).catch((e) => {
            alert("error");
        })
        }
        
    }


    return (
        <div className="display-box">
            <div className="header-box-sup">ReStock Now
            </div>
            <div className="supplier-list" >
                {/* filtering inventory array to only contain object that is stock quantity in less than/ equal to resock level */}
                {inventory.filter(stock => stock.quantity <= stock.restock_level).map(function (s) {
                return <div className="restock-box">
                    <div className="restock-details">
                        <li>{s.name}</li>
                        <li>{s.model}</li>
                    </div>

                    <div className="leftstock">Remaining : {s.quantity} <br /> ReStock Level : {s.restock_level} </div>

                    <div className="addstock-btn">
                        <input min="1" type="number" onChange={(e) => {
                            setnewStock(e.target.value)
                        }} />
                        <button onClick={(e) => update(e, s._id, s.quantity)} >Add</button>
                    </div>

                </div>
            })}



            </div>



        </div>

    );
}

export default ReStock;