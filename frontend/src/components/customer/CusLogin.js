import React, { useState, useEffect } from 'react';
import './CusLogin.css'
import axios from 'axios'

const Login = () => {
    return (  

        <div>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

                <h3><span>Sign in to Hotel Sobana or <a href="/cusReg">create an account</a></span></h3>

                <form action="/action_page.php" method="post">

                <div className="container">
                    <label for="uname"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required></input>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required></input>
                        
                    <button type="submit" className="addinventory-btn">Login</button>
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