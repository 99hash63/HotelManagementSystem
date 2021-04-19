import React, { useState, useEffect } from 'react';
import './CusLogin.css'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login(e){
        e.preventDefault();

        try{
            const loginData = {
               
                email,
                password, 
                
            };

            await axios.post("http://localhost:5000/customer/login", loginData);

        }catch(err){
            console.error(err);
        }
    }

    return (  

        <div>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

                <h3><span>Sign in to Hotel Sobana or <a href="/cusReg">create an account</a></span></h3>

                <form onSubmit={login}>

                <div className="container">
                    <label for="uname"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" onChange={(e) => {
                            setEmail(e.target.value);
                        }} required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" onChange={(e) => {
                            setPassword(e.target.value);
                        }} required />
                        
                    <button type="submit" >Login</button>
                    <label>
                    <input type="checkbox" checked="checked" name="remember"></input>Remember me
                    </label>
                </div>

                <div className="container" style={{backgroundColor : "#f1f1f1"}}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    {/* <span className="reg">Dont have an account? <a href="#">Sign up</a></span> */}
                </div>
                </form>

            </div>

    );
    }
export default Login;