import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../components/Addemployees.css'; 


function ViewOne() {
    const { id } = useParams();
    const [employeeOne, setOneEmployee] = useState([]);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [eType, setEType] = useState("");
    const [dob, setDOB] = useState("");
    const [nic, setNIC] = useState("");
    const [address, setAddress] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [bank, setBank] = useState("");
    const [bankbranch, setBankbranch] = useState("");
    const [bankaccountno, setBankaccountno] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // console.log(fname);
    // console.log("find");

    useEffect(() => {
        axios.get(`http://localhost:5000/employee/get/${id}`).then((res) => {
            setOneEmployee(res.data);
            setFname(res.data.fname);
            setLname(res.data.lname);
            setEType(res.data.eType);
            setDOB(res.data.dob);
            setNIC(res.data.nic);
            setAddress(res.data.address);
            setMobileno(res.data.mobileno);
            setBank(res.data.bank);
            setBankbranch(res.data.bankbranch);
            setBankaccountno(res.data.bankaccountno);
            setEmail(res.data.email);
            setPassword(res.data.password);
            // console.log("sucess");


        }).catch((err) => {
            alert(err);
        })

    }, [])

   




    function updat(id) {
        const newEmployee = {
            fname,
            lname,
            eType,
            dob,
            nic,
            address,
            mobileno,
            bank,
            bankbranch,
            bankaccountno,
            email,
            password

        }

        const result = window.confirm("Confirm?");
        if (result == true) {
            axios.put(`http://localhost:5000/employee/update/${id}`, newEmployee).then(() => {
            window.location = "/emp-manager"
            }).catch(() => {
                alert("User Id Duplicated!!!!");
            })
        }
    }


    return (
        <div>
            <h1>Employee's Details</h1>
            <form  >
            <label className="custom-field">
                <input type="text" className="form-input" defaultValue={employeeOne.fname} onChange={(e) => {
                    setFname(e.target.value)
                }}required />
                <span className="placeholder" >First Name</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={employeeOne.lname} onChange={(e) => {
                    setLname(e.target.value)
                }}required />
                <span className="placeholder">Last Name</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={employeeOne.eType} onChange={(e) => {
                    setEType(e.target.value);
                }} />
                <span className="placeholder">Employee Type</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={employeeOne.dob} onChange={(e) => {
                    setDOB(e.target.value);
                }}required />
                <span className="placeholder">Date Of Birth</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={employeeOne.nic} onChange={(e) => {
                    setNIC(e.target.value);
                }}required />
                <span className="placeholder">NIC</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={employeeOne.address} onChange={(e) => {
                    setAddress(e.target.value);
                }}required />
                <span className="placeholder">Address</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={employeeOne.mobileno} onChange={(e) => {
                    setMobileno(e.target.value);
                }}required />
                <span className="placeholder">Mobile No</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={employeeOne.bank} onChange={(e) => {
                    setBank(e.target.value);
                }}required />
                <span className="placeholder">Bank</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={employeeOne.bankbranch} onChange={(e) => {
                    setBankbranch(e.target.value);
                }}required />
                <span className="placeholder">Branch</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={employeeOne.bankaccountno} onChange={(e) => {
                    setBankaccountno(e.target.value);
                }}required />
                <span className="placeholder">Account No</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={employeeOne.email} onChange={(e) => {
                    setEmail(e.target.value);
                }}required />
                <span className="placeholder">Email</span>
                </label><br></br>

                <label className="custom-field">
                <input type="text" className="form-input" defaultValue={employeeOne.password} onChange={(e) => {
                    setPassword(e.target.value);
                }}required />
                <span className="placeholder">password</span>
                </label><br></br>


                <button className="addinventory-btn" onClick={e => updat(employeeOne._id)}>Update</button><br></br>
                <Link to={"/emp-manager/deleteemployee/" + employeeOne._id}> Delete </Link><br></br>
                <Link to={"/emp-manager"}>Back</Link><br></br>

            </form>

        </div>
    )
}

export default ViewOne;