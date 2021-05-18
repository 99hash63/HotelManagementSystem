import React, {useState} from 'react';
import './Header.css'

export default function Footer() {

    return (

       

        <footer style={{ backgroundColor: 'rgb(15, 15, 15)', color: 'aliceblue', marginTop: "165px" }}>
            <div className="head footerhead">
                <div className="up_head" style={{ color: 'rgb(173, 173, 173)' }}>
                    <div className="social">
                        {/* <a href="/"><i style={{ color: 'rgb(173, 173, 173)' }} className="fab fa-twitter"></i></a>
                        <a href="/"><i style={{ color: 'rgb(173, 173, 173)' }} className="fab fa-youtube"></i></a>
                        <a href="/"><i style={{ color: 'rgb(173, 173, 173)' }} className="fab fa-instagram"></i></a>
                        <a href="/"><i style={{ color: 'rgb(173, 173, 173)' }} className="fab fa-facebook-square"></i></a> */}
                    </div>
                    {/* <div className="contact"><i className="fas fa-phone-alt"></i>+94 77 456 7169&nbsp;&nbsp;</div>
                    <div className="contact"><i className="fas fa-envelope"></i>info@sobana.com</div> */}
                </div>

                <div className="down_head">
                    <div className="logo">Hotel Sobana</div>

                    <div className="navigation">
                        <nav>
                            <ul>

                                {/* <li><button onClick={()=>setActive("employee")} style={{ backgroundColor: 'rgb(15, 15, 15)', color: 'rgb(173, 173, 173)'}} href="/">Employee</button></li> */}
                                <li><a style={{ color: 'rgb(173, 173, 173)' }} href="/">Contact</a></li>
                                <li><a style={{ color: 'rgb(173, 173, 173)' }} href="/">About</a></li>

                            </ul>
                        </nav>
                    </div>

                </div>


            </div>
        </footer>
    );

}