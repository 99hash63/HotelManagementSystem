import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryCheckout.css'
import { Link } from 'react-router-dom'

const InventoryCheckout = () => {

  const [inventory, setinventory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/inventory/").then((res) => {
      if (res.data.length > 0) {
        setinventory(res.data);
      }
    }).catch((e) => {
      console.log(e);
    })


  }, [])


  return (
    <div className="display-box">
      <div className="header-box-sup"> Checkout</div>
      <div className="checkout-box" >
        <div className="checkoutlist cb">checkoutlist</div>
        <div className="processcheckout cb">processcheckout</div>

        <div className="allinventory cb">
          <div className="search-box">
            <input type="text" placeholder="Search"></input>
          </div>
          <div className="display-all-inventory">


            <div className="itembox">
              {inventory.map(function (s) {
                return <div className="round-checkout-box">

                  <div className="restock-details">
                    <li>{s.name}</li>
                    <li>{s.model}</li>
                    <li>{s.sku}</li>
                  </div>

                  <div className="right-side">

                  <div className="leftstock-c">
                    <div id="quantity">{s.quantity}</div>
                    <div id="quantity-text">Remaining</div>
                  </div>

                  <div className="add-items"><button><i class="fas fa-plus-circle"></i></button></div>
                  </div>
                </div>
              })}

            </div>
          </div>

        </div>



      </div>
    </div>
  );
}

export default InventoryCheckout;