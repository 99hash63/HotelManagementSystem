import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryCheckout.css'
import { Link } from 'react-router-dom'

const InventoryCheckout = () => {

  const [inventory, setinventory] = useState([]);
  const [search, setsearch] = useState("");
  const [filtered, setfiltered] = useState([]);
  const [selected, setselected] = useState([]);
  const [to, setto] = useState("");
  const [description, setdescription] = useState("");

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

  useEffect(() => {
    selected.forEach(function (element) {
      element.selectedUnits = 1;
    });


  }, [])


  const select = (e, data) => {
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
  function deleteItem(e, data) {
    e.preventDefault();
    const newarry = selected.filter(function (item) { return item._id !== data._id });
    setselected(newarry);

  }
  function addSelectedUnits(e, id, value) {


    const nextState = selected.map(a => a._id == id ? { ...a, selectedUnits: value } : a);
    setselected(nextState);



  }

  useEffect(() => {
    let totalvalue = 0;
    for (let index = 0; index < selected.length; index++) {
      totalvalue += selected[index].original_price * selected[index].selectedUnits;

      document.getElementById('fofofo').innerHTML = totalvalue + " LKR";
    }
  })

  function checkout(e) {
    for (let index = 0; index < selected.length; index++) {

      for (let x = 0; x < inventory.length; x++) {

        if (selected[index]._id == inventory[x]._id) {
          const id = inventory[x]._id;

          if (inventory[x].quantity >= selected[index].selectedUnits) {
            const total = parseInt(inventory[x].quantity) - parseInt(selected[index].selectedUnits);
            const newStockvalue = { total };
            axios.put(`http://localhost:5000/inventory/updatestock/${id}`, newStockvalue).then(() => {

            }).catch((e) => {
              alert("error");
            })

            const name = inventory[x].name;
            const model = inventory[x].model;
            const sku = inventory[x].sku;
            const category = inventory[x].category;
            const quantity = inventory[x].quantity;
            const unit_price = inventory[x].unit_price;
            const total_price = inventory[x].total_price;
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            
            const newItem = {
              name,model,sku,category,to,description,quantity,unit_price,total_price,today
            }

            axios.post(" http://localhost:5000/checkout/add", newItem).then(() => {

            }).catch((e) => {
              alert("error");
            })


          }
        }
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
              <div className="checkoutlist-box-right">
                <input type="number" min="1" defaultValue="0"
                  onChange={e => addSelectedUnits(e, s._id, e.target.value)}
                />
                <i onClick={(e) => deleteItem(e, s)} className="fas fa-minus-circle"></i>
              </div>

            </div>
          })}

        </div>

        <div className="processcheckout cb">
          <div className="upper-cb" >
            <input type="text" placeholder="to" onChange={e => { setto(e.target.value) }} />
            <input type="text" placeholder="description" onChange={e => { setdescription(e.target.value) }} />
          </div>
          <div className="lower-cb" >
            <span id='total-cb'>Total : <span id="fofofo"></span></span>

            <button onClick={checkout}>Checkout</button>
          </div>


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