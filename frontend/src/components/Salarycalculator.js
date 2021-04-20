import React, { useState } from 'react';
import axios from 'axios';
import '../components/Addemployees.css'; 

function AddSalary() {
    var [email, setEmail] = useState("");
    var [accountNo, setAccno] = useState("");
    var [basicSalary, setBasics] = useState("");
    var [otRate, setOtrate] = useState("");
    var [otHours, setOthours] = useState("");
    var [totalsalary, setTotalsalary] = useState("");
    var [paidDate, setPaidDate] = useState("");
    



    function sendData(e) {
        e.preventDefault();

        const newSalary = {
            email,
            accountNo,
            basicSalary,
            otRate,
            otHours,
            totalsalary,
            paidDate
            
        }

        axios.post("http://localhost:5000/salary/addsalary", newSalary).then(() => {
            window.location = "/paidsalary"
            alert("Paid salary details Added To Database Successfuly");
        }).catch((err) => {
            alert(err.msg);
            alert("Paid salary not Added To Database ");
        })
    }
    
    //calculate total salary function
    function calsalary(){
        var data1 = parseInt(document.getElementById("bsalary").value);
        var data2 = parseInt(document.getElementById("otrate").value);
        var data3 = parseInt(document.getElementById("othours").value);
        var total = data1 + (data2 * data3);

  

        document.getElementById("totsalary").innerHTML = total;
        }

    return (
        <div className="form1">
            <form >
                <label className="custom-field">
                <input type="text" id="email" name="email" className="form-input" onChange={(e) => {
                    setEmail(e.target.value);
                }}required />
                 <span className="placeholder" >Email</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" id="accountno" name="accountno" className="form-input" onChange={(e) => {
                    setAccno(e.target.value);
                }}required />
                <span className="placeholder" >Account No</span>
                </label><br></br>

                <label className="custom-field">
                <input type="number" id="bsalary" name="bsalary" className="form-input" onChange={(e) => {
                   setBasics(e.target.value);
                }}required />
                <span className="placeholder" >Basic Salary</span>
                </label>
                <br></br>

                <label className="custom-field">
                <input type="number" id="otrate" name="otrate" className="form-input" onChange={(e) => {
                    setOtrate(e.target.value);
                }}required />
                <span className="placeholder" >Ot Rate</span>
                </label><br></br>

                <label className="custom-field">
                <input type="number" id="othours" name="othours" className="form-input" onChange={(e) => {
                    setOthours(e.target.value);
                }}required />
                <span className="placeholder" >Ot Hours</span>
                </label><br></br>

                <label className="custom-field">
                <input type="number" id="totsalary" name="totsalary" className="form-input" onChange={(e) => {
                   setTotalsalary(e.target.value);
                }}required />
                <span className="placeholder" >Total Salary</span>
                </label><br></br>

                <label className="custom-field">
                <input type="date" id="paiddate" name="paiddate" className="form-input" onChange={(e) => {
                    setPaidDate(e.target.value);
                }}required /><span className="placeholder" >Paid Date</span>
                </label><br></br>

                <input type="submit" name="clickbtn" value="Calculate Total Salary" className="addinventory-btn" onClick={calsalary}/>
                <input type="submit" value="Paid" className="addinventory-btn" onClick={sendData} />
            </form>

        </div>
    )
}

export default AddSalary;