import React from "react";
import { Link } from "react-router-dom";

import logo from '../../Asset/—Pngtree—green play icon_4707644.png'

import './footer.styles.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_content container">
                <div className="footer_content_logo">
                    <div className="logo">
                        <img src={logo} alt=""/>
                        <Link to='/'>MovieSA</Link>
                    </div>
                </div>
                <div className="footer_content_menus">
                    <div className="footer_content_menu">
                        <Link to='/'>Home</Link>
                        <Link to='/'>Contact us</Link>
                        <Link to='/'>Term of service</Link>
                        <Link to='/'>About us</Link>
                    </div>
                    <div className="footer_content_menu">
                        <Link to='/'>Live</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Premium</Link>
                        <Link to='/'>Privacy Policy</Link>
                    </div>
                    <div className="footer_content_menu">
                        <Link to='/'>You Must Watch</Link>
                        <Link to='/'>Recent relaese</Link>
                        <Link to='/'>Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;