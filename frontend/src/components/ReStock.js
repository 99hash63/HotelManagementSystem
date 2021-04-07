import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './ReStock.css'


const ReStock = () => {

    // const [name, setname] = useState("test");
    // const [model, setmodel] = useState("test");
    // const [sku, setsku] = useState("test");
    // const [category, setcategory] = useState("test");
    // const [supplier, setsupplier] = useState("test");
    // const [description, setdescription] = useState("test");
    // const [mesurement, setunit] = useState("test");
    // const [quantity, setquantity] = useState(0);
    // const [restock_level, setrestock] = useState("test");
    // const [original_price, setoprice] = useState("test");
    // const [date, setdate] = useState("2021-04-07T00:00:00.000+00:00");

    const [newStock, setnewStock] = useState(0);
    const [inventory, setinventory] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:5000/inventory/").then((res) => {
            if (res.data.length > 0) {
                setinventory(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    }, [update])

    function update(e,id,quantity) {
        e.preventDefault();
        
        const total =  parseInt(quantity) +  parseInt(newStock);
        const newStockvalue = {total};
console.log(total)
        axios.put(`http://localhost:5000/inventory/updatestock/${id}`, newStockvalue).then(() => {

        }).catch((e) => {
            alert("error");
        })    
    }


    return (
        <div className="display-box">
            <div className="header-box-sup">ReStock Now
            </div>
            <div className="supplier-list" >

                {inventory.filter(stock => stock.quantity <= stock.restock_level).map(function (s) {
                    return <div className="restock-box">
                        <div className="restock-details">
                            <li>{s.name}</li>
                            <li>{s.model}</li>
                        </div>

                        <div className="leftstock">Remaining : {s.quantity} <br/> ReStock Level : {s.restock_level} </div>
                        
                        <div className="addstock-btn">
                            <input type="number" onChange={(e) => {
                                setnewStock(e.target.value)}} />
                            <button onClick={(e) => update(e,s._id,s.quantity)} >Add</button>
                            </div>

                    </div>
                })}



            </div>



        </div>

    );
}

export default ReStock;