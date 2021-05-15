import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <small>Copyright &copy; Hashen Developer</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            <a href="#">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="#">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="#">
                                <AiFillInstagram className="connect text-dark" /></a>
                            <a href="#">
                                <IoLogoYoutube className="connect text-dark" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer