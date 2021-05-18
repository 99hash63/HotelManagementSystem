import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryCheckout.css'
import History from './checkoutHistory';

const InventoryCheckout = () => {

  const [inventory, setinventory] = useState([]);
  const [search, setsearch] = useState("");
  const [filtered, setfiltered] = useState([]);
  const [selected, setselected] = useState([]);
  const [to, setto] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    //fetching all inventory data from the database
    axios.get("http://localhost:5000/inventory/").then((res) => {
      if (res.data.length > 0) {
        setinventory(res.data);
      }
    }).catch((e) => {
      console.log(e);
    })

  }, [])


  useEffect(() => { //search funtion
    setfiltered(
      //filtering the inventory array to only contain objects that match with the seach term and save in the FILTERED useState 
      inventory.filter(items => {
        return items.name.toLowerCase().includes(search.toLowerCase())
          || items.model.toLowerCase().includes(search.toLowerCase())
          || items.sku.toLowerCase().includes(search.toLowerCase())
          || items.category.toLowerCase().includes(search.toLowerCase())
          || items.supplier.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [search, inventory])

  useEffect(() => {//add a new property to each SELECTED array object (to store the selected quantity)
    selected.forEach(function (element) {
      element.selectedUnits = 1;
    });


  }, [])


  const select = (e, data) => { //add new object to the SELECTED array
    e.preventDefault();
    if (checkSelect(data._id) != data._id) { //checking the new object id is already existing in the SELECTED array
      setselected(oldArray => [...oldArray, data]);
    }
  }

  function checkSelect(id) { //checking all the IDs in the SELECTED array if matches the param(id)
    for (let index = 0; index < selected.length; index++) {
      if (selected[index]._id == id) {
        return selected[index]._id;
      }
    }
  }
  function deleteItem(e, data) {//deleting objects from the SELECTED array
    e.preventDefault();
    const newarry = selected.filter(function (item) { return item._id !== data._id });
    setselected(newarry);
  }
  function addSelectedUnits(e, id, value) {
    //assigning values to the newly created property in SELECTED array
    if (value>0) {
      const nextState = selected.map(a => a._id == id ? { ...a, selectedUnits: value } : a);
      setselected(nextState);
    }
   

  }
  let totalvalue = 0;
  useEffect(() => {
    //displaying the total value of all seleted inventory by taking selected quantity and unit price for calculation
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
          //checking if selecting quantity is less than stock quantity
          if (inventory[x].quantity >= selected[index].selectedUnits) {
            //substracting the selecting quantity value from the stock quantity value
            const total = parseInt(inventory[x].quantity) - parseInt(selected[index].selectedUnits);
            const newStockvalue = { total };
            //updating the new inventory stock quantity in the Database
            axios.put(`http://localhost:5000/inventory/updatestock/${id}`, newStockvalue).then(() => {

            }).catch((e) => {
              alert("error");
            })

            const name = inventory[x].name;
            const model = inventory[x].model;
            const sku = inventory[x].sku;
            const category = inventory[x].category;
            const quantity = selected[index].selectedUnits;
            const unit_price = inventory[x].unit_price;
            const total_price = inventory[x].total_price;
            var date = new Date();
            var dd = String(date.getDate()).padStart(2, '0');
            var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = date.getFullYear();

            date = mm + '/' + dd + '/' + yyyy;

            const newItem = {
              name, model, sku, category, to, description, quantity, unit_price, total_price, date
            }
            //sending all checkout data including items sold and other information to the database
            axios.post(" http://localhost:5000/checkout/add", newItem).then(() => {
              setselected([]);
              setto("")
              setdescription("")
              totalvalue = 0;
              document.getElementById('fofofo').innerHTML = "";
              document.getElementById('to-text').value = "";
              document.getElementById('to-des').value = "";


            }).catch((e) => {
              alert("error");
            })


          }
        }
      }
    }

  }
  function checkoutPOP() { //funtion to display the CHECKOUT HISTORY TABLE
    const x = document.getElementById("checkoutHistory-window").style.display;
    if (x == "none") {
      document.getElementById('checkoutHistory-window').style.display = "block";
    }
    else {
      document.getElementById('checkoutHistory-window').style.display = "none ";
    }
  }



  return (
    <div className="display-box">
      <div className="header-box-sup"> Checkout
      <button id="checkoutHistory-window-btn" onClick={checkoutPOP} style={{ display: "block" }}>History</button>
      </div>
      <div id="checkoutHistory-window" style={{ display: "none" }}>  <History POP={checkoutPOP} /> </div>

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
            <input id="to-text" type="text" placeholder="to" onChange={e => { setto(e.target.value) }} />
            <input id="to-des" type="text" placeholder="description" onChange={e => { setdescription(e.target.value) }} />
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
              {filtered.slice(0).reverse().map(function (s) {
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