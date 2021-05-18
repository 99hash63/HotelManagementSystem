import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './ReStock.css'


const BarReStock = () => {
    const [barinventory, setbarinventory] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:5000/barInventory/retrieve").then((res) => {
            if (res.data.length > 0) {
                setbarinventory(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    }, [barinventory])

    // function update(e, id, quantity) {
    //     e.preventDefault();

    //     const total = parseInt(quantity) + parseInt(newStock);
    //     const newStockvalue = { total };
    //     axios.put(`http://localhost:5000/inventory/updatestock/${id}`, newStockvalue).then(() => {

    //     }).catch((e) => {
    //         alert("error");
    //     })
    // }


    return (
        <div className="display-box">
            <div className="header-box-sup">Re-Stock Now
            </div>
            <div className="supplier-list" >

                {barinventory.filter(stock => stock.quantity <= stock.restocklevel).map(function (s) {
                    return <div className="restock-box">
                        <div className="restock-details">
                            <li>{s.item_id}</li>
                            <li>{s.name}</li>
                        </div>

                        <div className="leftstock">Remaining : {s.quantity} <br /> ReStock Level : {s.restocklevel} </div>

                        <div className="addstock-btn">
                            {/* <input min="1" type="number" onChange={(e) => {
                                setnewStock(e.target.value)
                            }} /> */}
                            <button 
                            // onClick={(e) => update(e, s._id, s.quantity)} 
                            >Add</button>
                        </div>

                    </div>
                })}



            </div>



        </div>

    );
}

export default BarReStock;