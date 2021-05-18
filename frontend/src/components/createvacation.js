import React, { useState } from 'react';
import axios from 'axios';
import '../components/Addemployees.css'

//import '../components/navigation1'
//import Navgation1 from '../components/navigation1';


function Addvacation() {
    var [eemail, setEemail] = useState("");
    var [propose, setPropose] = useState("");
    var [vfrom, setVfrom] = useState("");
    var [vto, setVto] = useState("");
    

    function sendData(e) {
        e.preventDefault();

        const newVacation = {
            eemail,
            propose,
            vfrom,
            vto,
        
        }

        axios.post("http://localhost:5000/vacation/addvacation", newVacation).then(() => {
            window.location = "/#"
            alert("Vacation Request Created");
        }).catch((err) => {
            alert(err.msg);
            alert("Vacation Request Not Created");
        })
    }


    return (
        
        <div >
            
            <div className="form1">
            
            <form >
            <div className="title"><center><h3>Vacation Requests</h3></center></div>
                
                <label className="custom-field">
                <input type="text" id="eemail" name="eemail" className="form-input" onChange={(e) => {
                    setEemail(e.target.value);
                }}required />
                <span className="placeholder" >Employee Email</span>
                </label><br></br>


                <label className="custom-field">
                <textarea id="propose" name="propose"  rows="3" cols="33" className="form-input" onChange={(e) => {
                    setPropose(e.target.value);
                }}required />
                 <span className="placeholder">Propose</span>
                </label><br></br>
                
                
                <label className="custom-field">
                <input type="date" id="vfrom" name="vfrom" className="form-input" onChange={(e) => {
                    setVfrom(e.target.value);
                }}required />
                <span className="placeholder">From</span>
                </label>
                <br></br>

                <label className="custom-field">
                <input type="date" id="vto" name="vto" className="form-input" onChange={(e) => {
                    setVto(e.target.value);
                }}required />
                <span className="placeholder">To</span>
                </label>
                <br></br>
                  

                  <div className="form2-btn">
                <input type="submit" value="Create Vacation Request" className="addinventory-btn" onClick={sendData} />
                  </div>
            </form>
            </div>
        </div>
    )
}

export default Addvacation;