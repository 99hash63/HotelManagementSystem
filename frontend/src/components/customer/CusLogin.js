import React, { useState, useEffect, useContext } from 'react';
import './CusLogin.css'
import axios from 'axios'
import { useHistory } from 'react-router';
import AuthCentext from '../../context/AuthContext'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { getLoggedIn } = useContext(AuthCentext);
    const history = useHistory ();

    async function login(e){
        e.preventDefault();

        try{
            const loginData = {
               
                email,
                password, 
                
            };

            await axios.post("http://localhost:5000/customer/login", loginData);
            await getLoggedIn();
            history.push("/");

        }catch(err){
            console.error(err);
        }
    }

    return (  

        <div style={{gridArea:"b"}} className="customerREGLOG" >
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

                

                <form onSubmit={login}>
                <h3><span id="signinCUS">Sign in to Hotel Sobana or <a href="/cusReg">create an account</a></span></h3>

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