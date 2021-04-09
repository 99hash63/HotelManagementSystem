import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryCheckout.css'
import { Link } from 'react-router-dom'

const InventoryCheckout = () => {

  const [inventory, setinventory] = useState([]);
  const [search, setsearch] = useState("");
  const [filtered, setfiltered] = useState([]);
  const [selected, setselected] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/inventory/").then((res) => {
      if (res.data.length > 0) {
        setinventory(res.data);
      }
    }).catch((e) => {
      console.log(e);
    })
  }, [])

  useEffect(() => {
    setfiltered(
      inventory.filter(items => {
        return items.name.toLowerCase().includes(search.toLowerCase())
          || items.model.toLowerCase().includes(search.toLowerCase())
          || items.sku.toLowerCase().includes(search.toLowerCase())
          || items.category.toLowerCase().includes(search.toLowerCase())
          || items.supplier.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [search, inventory])


  function select(e, data) {
    e.preventDefault();
    if (checkSelect(data._id) != data._id) {
      setselected(oldArray => [...oldArray, data]);
    }
  }
  function checkSelect(id) {
    for (let index = 0; index < selected.length; index++) {
      if (selected[index]._id == id) {
        return selected[index]._id;
      }
    }
  }

  return (
    <div className="display-box">
      <div className="header-box-sup"> Checkout</div>
      <div className="checkout-box" >
        <div className="checkoutlist cb">

          {selected.map(function (s) {

            return <div className="checkoutlist-box" >
              <li><span>{s.name}</span> - {s.model} </li>
              <div className="checkoutlist-box-right" >
                <input type="number" min="1" />
                <i class="fas fa-minus-circle"></i>
              </div>

            </div>
          })}

        </div>







        <div className="processcheckout cb">


        </div>

        <div className="allinventory cb">
          <div className="search-box">
            <input type="text" placeholder="Search" onChange={e => { setsearch(e.target.value) }} />
          </div>
          <div className="display-all-inventory">


            <div className="itembox">
              {filtered.map(function (s) {
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

                    <div className="add-items"><button onClick={(e) => select(e, s)}><i class="fas fa-plus-circle"></i></button></div>
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