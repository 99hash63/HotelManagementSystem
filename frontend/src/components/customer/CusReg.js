import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Register = () => {
    return ( 
        <div>

            <form action="/action_page.php">
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr></hr>
                <label for="fname"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="fname" id="fname" required></input>

                <label for="lname"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lname" id="lname" required></input>

                <label for="address"><b>Address</b></label>
                <input type="text" placeholder="Enter Address" name="address" id="address" required></input>

                <label for="NIC"><b>NIC</b></label>
                <input type="text" placeholder="Enter NIC" name="NIC" id="NIC" required></input>

                <label for="nationality"><b>Nationality</b></label>
                <input type="text" placeholder="Enter Nationality" name="nationality" id="nationality" required></input>

                <label for="passportNo"><b>PassportNo</b></label>
                <input type="text" placeholder="Enter PassportNo" name="passportNo" id="passportNo" required></input>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

                <label for="contact"><b>Contact</b></label>
                <input type="text" placeholder="Enter Contact" name="contact" id="contact" required></input>

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" id="password" required></input>

                <label for="passwordVerifyt"><b>Verify Password</b></label>
                <input type="password" placeholder="Repeat Password" name="passwordVerify" id="passwordVerify" required></input>
                <hr></hr>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" className="registerbtn">Register</button>
            </div>
            
            <div className="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
            </form>

        </div>
     );
}
 
export default Register;