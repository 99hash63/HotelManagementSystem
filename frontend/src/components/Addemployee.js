import React, { useState } from 'react';
import axios from 'axios';
import '../components/Addemployees.css'; 
//import EMSnavbar from '../components/emanagersidenav';
//import '../components/navigation1'
//import Navgation1 from '../components/navigation1';

/*const Employeetype = [
    { value: 'Front Office Manager', label: 'Front Office Mansager' },
    { value: 'Employee Manager', label: 'Employee Manager' },
    { value: 'Bar Manager', label: 'Bar Manager' },
    { value: 'Reception Hall Manager', label: 'Reception Hall Manager' },
    { value: 'Inventory Manager', label: 'Inventory Manager' },
    { value: 'Room Manager', label: 'Room Managemer' },
    { value: 'FOOD Manager', label: 'Room Managemer' },
  ];*/

function AddEmployees() {
    var [fname, setFname] = useState("");
    var [lname, setLname] = useState("");
    var [eType, setEtype] = useState("");
    var [dob, setDOB] = useState("");
    var [nic, setNIC] = useState("");
    var [address, setAddress] = useState("");
    var [mobileno, setMobileno] = useState("");
    var [bank, setBank] = useState("");
    var [bankbranch, setBankbranch] = useState("");
    var [bankaccountno, setBankaccountno] = useState("");
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");



    function sendData(e) {
        e.preventDefault();

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

        axios.post("http://localhost:5000/employee/addemployee", newEmployee).then(() => {
            window.location = "/allemployees"
            alert("Employee Added To Database Successfuly");
        }).catch((err) => {
            alert(err.msg);
            //alert("Employee not Added To Database ");
        })
    }


    return (
        
        <div >
            
            <div className="form1">
            
            <form >
            <div className="header-box">ADD EMPLOYEES</div>
                
                <label className="custom-field">
                <input type="text" id="fname" name="fname" className="form-input" onChange={(e) => {
                    setFname(e.target.value);
                }}required />
                <span className="placeholder" >First Name</span>
                </label><br></br>
                

                
                <label className="custom-field">
                <input type="text" id="lname" name="lname" className="form-input" onChange={(e) => {
                    setLname(e.target.value);
                }} required/>
                 <span className="placeholder">Last Name</span>
                </label>
                <br></br>
                


                
                <label className="custom-field">
                <select name="Etype" id="Etype" className="form-input" onChange={(e) => {
                                    setEtype(e.target.value)
                                }} >
                                    <option >Select</option>
                                    <option value="Front Office Manager">Front Office Manager</option>
                                    <option value="Employee Manager">Employee Manager</option>
                                    <option value="Bar Manager">Bar Manager</option>
                                    <option value="Reception Hall Manager">Reception Hall Manager</option>
                                    <option value="Inventory Manager">Inventory Manager</option>
                                    <option value="Room Manager">Room Manager</option>
                                </select>
                                <span className="placeholder">Employee Type</span>
                                </label>
                                <br></br>
                 

                
                <label className="custom-field">
                <input type="date" id="dateofbirth" name="dateofbirth" className="form-input" onChange={(e) => {
                    setDOB(e.target.value);
                }}required />
                <span className="placeholder">Date Of Birth</span>
                </label>
                <br></br>
                

                
                <label className="custom-field">
                <input type="text" id="nic" name="nic" className="form-input" onChange={(e) => {
                    setNIC(e.target.value);
                }}required />
                <span className="placeholder">NIC</span>
                </label><br></br>
                

                
                <label className="custom-field">
                <textarea id="address" name="address"  rows="3" cols="33" className="form-input" onChange={(e) => {
                    setAddress(e.target.value);
                }}required />
                 <span className="placeholder">Address</span>
                </label><br></br>
                
                <label className="custom-field">
                <input type="text" id="mobileno" name="mobileno" className="form-input" className="form-input" onChange={(e) => {
                    setMobileno(e.target.value);
                }}required />
                 <span className="placeholder">Mobile No</span>
                </label><br></br>


                <label className="custom-field">
                <select name="Bank" id="Bank" className="form-input" onChange={(e) => {
                                    setBank(e.target.value)
                                }} >
                                    <option >Select</option>
                                    <option value="Amana Bank PLC">Amana Bank PLC</option>
                                    <option value="Bank of Ceylon">Bank of Ceylon</option>
                                    <option value="Bank of China Ltd">Bank of China Ltd</option>
                                    <option value="Cargills Bank Ltd">Cargills Bank Ltd</option>
                                    <option value="Inventory Manager">Inventory Manager</option>
                                    <option value="Commercial Bank of Ceylon PLC">Commercial Bank of Ceylon PLC</option>
                                    <option value="DFCC Bank PLC">DFCC Bank PLC</option>
                                    <option value="Hatton National Bank PLC">Hatton National Bank PLC</option>
                                    <option value="National Development Bank PLC">National Development Bank PLC</option>
                                    <option value="Nations Trust Bank PLC">Nations Trust Bank PLC</option>
                                    <option value="Pan Asia Banking Corporation PLC">Pan Asia Banking Corporation PLC</option>
                                    <option value="People's Bank">People's Bank</option>
                                    <option value="Sampath Bank PLC">Sampath Bank PLC</option>
                                    <option value="Seylan Bank PLC">Seylan Bank PLC</option>
                                    <option value="HSBC">HSBC</option>

                                </select>
                                <span className="placeholder">Bank</span>
                                </label>
                                <br></br>



                <label className="custom-field">
                <select name="Bankbranch" id="Bankbranch" className="form-input" onChange={(e) => {
                                    setBankbranch(e.target.value)
                                }} >
                                    <option >Select</option>
                                    <option value="Akkaraipattu">Akkaraipattu</option>
                                    <option value="Ambalangoda">Ambalangoda</option>
                                    <option value="Ampara">Ampara</option>
                                    <option value="Anuradhapura">Cargills Bank Ltd</option>
                                    <option value="Badulla">Badulla</option>
                                    <option value="Balangoda">Balangoda</option>
                                    <option value="Bandarawela">Bandarawela</option>
                                    <option value="Chilaw">Chilaw</option>
                                    <option value="Colombo">Colombo</option>
                                    <option value="Dambulla">Dambulla</option>
                                    <option value="Embilipitiya">Embilipitiya</option>
                                    <option value="Galle">Galle</option>
                                    <option value="Hambantota">Hambantota</option>
                                    <option value="Kalutara">Kalutara</option>
                                    <option value="Kandy">HSBC</option>

                                </select>
                                <span className="placeholder">Branch</span>
                                </label>
                                <br></br>              




                <label className="custom-field">
                <input type="bankaccno" id="bankaccno" name="bankaccno" className="form-input" className="form-input" onChange={(e) => {
                    setBankaccountno(e.target.value);
                }}required />
                 <span className="placeholder">Bank Account No</span>
                </label><br></br>

                
                <label className="custom-field">
                <input type="text" id="email" name="email" className="form-input" onChange={(e) => {
                    setEmail(e.target.value);
                }}required />
                <span className="placeholder">Email</span>
                </label><br></br>
                

                
                <label className="custom-field">
                  <input type="password" id="password" name="password" className="form-input" onChange={(e) => {
                      setPassword(e.target.value);
                  }}required />
                   <span className="placeholder">password</span>
                  </label><br></br>
                  
                  <div className="form2-btn">
                <input type="submit" value="ADD EMPLOYEE" className="addinventory-btn" onClick={sendData} />
                  </div>
            </form>
            </div>
        </div>
    )
}

export default AddEmployees;