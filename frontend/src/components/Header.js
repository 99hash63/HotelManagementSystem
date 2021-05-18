import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
 

    return (

        <header>

            <div className="head" id="glass">
                <div className="up_head">
                    <div className="social">
                        {/* <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-youtube"></i></a>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                        <a href="/"><i className="fab fa-facebook-f"></i></a> */}
                    </div>
                    <div className="contactM"><i className="fas fa-phone-alt"></i>+94 77 456 7169 &nbsp;&nbsp;</div>
                    <div className="contactM"><i className="fas fa-envelope"></i>info@sobana.com</div>
                </div>
                <hr />
                <div className="down_head">
                    <div className="logo">
                        <a href="/"><img src="/images/logo.png" alt="" /></a>
                    </div>
                    <div className="navigation">
                        <nav>
                            <ul>
                            
                                {/* <li><a className="b" href="/">Home</a></li>
                                <li><a className="b" href="/">Room & Rates</a></li>
                                <li><a className="b" href="/">Wedding</a></li>
                                <li><a className="b" href="/">Restaurant</a></li>
                                <li><a className="b" href="/">Bar</a></li>
                                <li><a className="b" href="/">Gallery</a></li>
                                <li><a className="b" href="/">Ayurvedha</a></li>
                                <li><a className="b" href="/">Contact</a></li>
                                <li><a className="b" href="/">About</a></li>*/}
                                <li><a  href="/managerLogin" className="book">Manager Login</a></li> 


                            </ul>
                        </nav>
                    </div>

                </div>


            </div>
        </header>

    )

}