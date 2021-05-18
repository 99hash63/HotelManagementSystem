import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router';
import AuthCentext from '../../context/AuthContext'
import Hero from './subComponents/Hero'
import PageBottom from './PageBottom';


const Register = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    // const [address, setAddress] = useState("");
    // const [NIC, setNIC] = useState("");
    // const [nationality, setNationality] = useState("");
    // const [passportNo, setPassportNo] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    //error objects
    const [emailErr, setEmailErr] = useState({});
    const [contactErr, setContactErr] = useState({});
    const [pwError, setPwError] = useState({});
    const [verifyErr, setVerifyErr] = useState({});

    //temporary null values
    const address = "Colombo";
    const NIC = "3309563v";
    const nationality = "Srilankan";
    const passportNo = "770097N";
    


    const { getLoggedIn } = useContext(AuthCentext);
    const history = useHistory();

    //Creating user with relevant data
    async function register(e) {
        e.preventDefault();

        const isValid = formValidation();

        if(isValid==true){
            try {
                const registerData = {
                    fname,
                    lname,
                    address,
                    NIC,
                    nationality,
                    passportNo,
                    email,
                    contact,
                    password,
                    passwordVerify,
                };

                await axios.post("http://localhost:5000/customer/add", registerData);
                await getLoggedIn();
                history.push("/");

                

            } catch (err) {
                alert("Email Address Already Exists!");
            }
        }
    }

    // validating form inputs
    const formValidation = () =>{
        const emailErr = {}
        const contactErr = {}
        const pwError = {}
        const verifyErr = {}
        let isValid = true;
        const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!emailRe.test(String(email).toLowerCase())){
            emailErr.invalidEmail = "Invalid Email Address"
            isValid = false;
        }

        if(password.trim().length<8){
            pwError.shortPassworfd = "Password Must Be 8 Characters Long"
            isValid = false;
        }

        if(password.trim()!=passwordVerify.trim()){
            verifyErr.missMatch = "Passwords Do Not Match"
            isValid = false;
        }

        if(contact.trim().length!=10){
            contactErr.conLength = "Invalid Contact Number"
            isValid = false;
        }

        setEmailErr(emailErr);
        setPwError(pwError);
        setVerifyErr(verifyErr);
        setContactErr(contactErr);
        return isValid;

    }

    return (

        <div>
    <Hero hero="behindHero"></Hero>
        <div style={{ gridArea: "b" }} className="customerREGLOG">

            <form onSubmit={register}>
                <div className="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr></hr>
                    {/* <label for="fname"><b>First Name</b></label> */}
                    <input type="text" placeholder="First Name" name="fname" id="fname" onChange={(e) => {
                        setFname(e.target.value);
                    }} required />

                    {/* <label for="lname"><b>Last Name</b></label> */}
                    <input type="text" placeholder="Last Name" name="lname" id="lname" onChange={(e) => {
                        setLname(e.target.value);
                    }} required />

                    {/* <label for="address"><b>Address</b></label>
                    <input type="text" placeholder="Enter Address" name="address" id="address" onChange={(e) => {
                        setAddress(e.target.value);
                    }} required /> */}

                    {/* <label for="NIC"><b>NIC</b></label> */}
                    {/* <input type="text" placeholder="Enter NIC" name="NIC" id="NIC" onChange={(e) => {
                        setNIC(e.target.value);
                    }} required /> */}

                    {/* <label for="nationality"><b>Nationality</b></label> */}
                    {/* <input type="text" placeholder="Enter Nationality" name="nationality" id="nationality" onChange={(e) => {
                        setNationality(e.target.value);
                    }} required /> */}
                    {/* <label for="passportNo"><b>PassportNo</b></label> */}
                    {/* <input type="text" placeholder="Enter PassportNo" name="passportNo" id="passportNo" onChange={(e) => {
                        setPassportNo(e.target.value);
                    }}  /> */}

                    {/* <label for="email"><b>Email</b></label> */}
                    <input type="text" placeholder="Email Adress" name="email" id="email" onChange={(e) => {
                        setEmail(e.target.value);
                    }} required />
                    {Object.keys(emailErr).map((key)=>{
                        return <div style={{color: "red"}}>{emailErr[key]}</div>
                    })}

                    {/* <label for="contact"><b>Contact</b></label> */}
                    <input type="text" placeholder="Contact Number" name="contact" id="contact" onChange={(e) => {
                        setContact(e.target.value);
                    }} required />
                     {Object.keys(contactErr).map((key)=>{
                        return <div style={{color: "red"}}>{contactErr[key]}</div>
                    })}

                    {/* <label for="password"><b>Password</b></label> */}
                    <input type="password" placeholder="Create Password" name="password" id="password" onChange={(e) => {
                        setPassword(e.target.value);
                    }} required />
                    {Object.keys(pwError).map((key)=>{
                        return <div style={{color: "red"}}>{pwError[key]}</div>
                    })}

                    {/* <label for="passwordVerifyt"><b>Verify Password</b></label> */}
                    <input type="password" placeholder="Confirm Password" name="passwordVerify" id="passwordVerify" onChange={(e) => {
                        setPasswordVerify(e.target.value);
                    }} required />
                     {Object.keys(verifyErr).map((key)=>{
                        return <div style={{color: "red"}}>{verifyErr[key]}</div>
                    })}
                  

                    <hr></hr>
                    {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}

                    

                    <button type="submit" className="registerbtn">Register</button>
                    <p>Already have an account? <a href="/cusLogin">Sign in</a>.</p>
                </div>

            </form>
           

        </div>
        <PageBottom/>
    </div>        
    );
}

export default Register;