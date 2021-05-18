import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../components/Addemployees.css'; 


function ViewOne() {
    const { id } = useParams();
    const [salaryOne, setOneSalary] = useState([]);

    const [email, setEmail] = useState("");
    const [accountNo, setAccno] = useState("");
    const [basicSalary, setBasicsalary] = useState("");
    const [otRate, setOtrate] = useState("");
    const [otHours, setOthours] = useState("");
    const [totalsalary, setTotalsalary] = useState("");
    const [paidDate, setPaiddate] = useState("");
    

    // console.log(fname);
    // console.log("find");

    useEffect(() => {
        axios.get(`http://localhost:5000//salary/get/${id}`).then((res) => {
            setOneSalary(res.data);
            setEmail(res.data.fname);
            setAccno(res.data.lname);
            setBasicsalary(res.data.eType);
            setOtrate(res.data.dob);
            setOthours(res.data.address);
            setTotalsalary(res.data.email);
            setPaiddate(res.data.password);
            // console.log("sucess");


        }).catch((err) => {
            alert(err);
        })

    }, [])

   




    function updat(id) {
        const newEmployee = {
            email,
            accountNo,
            basicSalary,
            otRate,
            otHours,
            totalsalary,
            paidDate,
            

        }

        const result = window.confirm("Confirm?");
        if (result == true) {
            axios.put(`http://localhost:5000/salary/update/${id}`, newEmployee).then(() => {
            window.location = "/emp-manager"
            }).catch(() => {
                alert("User Id Duplicated!!!!");
            })
        }
    }


    return (
        <div>
            <h1>Payment Detail</h1>
            <form  >
            <label className="custom-field">
                <input type="text" className="form-input" defaultValue={salaryOne.email} onChange={(e) => {
                    setEmail(e.target.value)
                }}required />
                <span className="placeholder" >Email</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={salaryOne.accountNo} onChange={(e) => {
                    setAccno(e.target.value)
                }}required />
                <span className="placeholder">Account No</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={salaryOne.basicSalary} onChange={(e) => {
                    setBasicsalary(e.target.value);
                }} />
                <span className="placeholder">Basic Salary</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={salaryOne.otRate} onChange={(e) => {
                    setOtrate(e.target.value);
                }}required />
                <span className="placeholder">Ot Rate</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={salaryOne.totalsalary} onChange={(e) => {
                    setOthours(e.target.value);
                }}required />
                <span className="placeholder">Ot Hours</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={salaryOne.address} onChange={(e) => {
                    setTotalsalary(e.target.value);
                }}required />
                <span className="placeholder">Total Salary</span>
                </label><br></br>

                <label className="custom-field">
                <input type="date" className="form-input" defaultValue={salaryOne.paidDate} onChange={(e) => {
                    setPaiddate(e.target.value);
                }}required />
                <span className="placeholder">Paid Date</span>
                </label><br></br>

             


                <button className="addinventory-btn" onClick={e => updat(salaryOne._id)}>Update Payment Detail</button><br></br>
                <Link to={"/#/" + salaryOne._id}> Delete Payment Detail </Link><br></br>
                <Link to={"/#"}>Back</Link><br></br>

            </form>

        </div>
    )
}

export default ViewOne;