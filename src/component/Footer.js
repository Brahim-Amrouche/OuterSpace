import React from 'react'
import phone from '../sources/Phone.png';
import email from '../sources/email.png';
import adress from '../sources/adress.png';
import facebook from '../sources/facebook.png';
import instagram from '../sources/instagram.png';
import youtube from '../sources/youtube.png';
import twitter from '../sources/twitter.png';


function Footer() {
    return (
        <div id="footer">
            <div id="Footer-Contact">
                
                <ul id="infos">
                    <li><h1>Contact</h1></li>
                    <li id="infos-li"><img id="infos-icons" src={phone} alt="nothing" /><h2>06 28 97 76 76</h2> </li>
                    <li id="infos-li"><img id="infos-icons" src={email} alt="nothing" /><h2>amrouchb4@gmail.com</h2> </li>
                    <li id="infos-li"><img id="infos-icons" src={adress} alt="nothing" /><h2>06 28 97 76 76</h2> </li>
                    <li id="info-line"></li>
                </ul>
                
                <ul id="links-social">
                    <li id="footer-links">
                        <a id="link-1" href="/">About Us</a>
                        <a id="link-2" href="/">Our Prices</a>
                        <a id="link-3" href="/">Want to review us ?</a>
                    </li>
                    <li id="footer-line">

                    </li>
                    <li id="footer-socials">
                        <a href="/"><img id="social-icon" src={facebook} alt="nothing" /></a>
                        <a href="/"><img id="social-icon" src={instagram} alt="nothing" /></a>
                        <a href="/"><img id="social-icon" src={youtube} alt="nothing" /></a>
                        <a href="/"><img id="social-icon" src={twitter} alt="nothing" /></a>
                    </li>
                </ul>
                
                

            </div>
            <div id="footer-quote">
                <h1>We Stand For Simplicity , Creativity and Innovation</h1>
                <p>Copyrights reserved @2021 Amrouche Brahim</p>
            </div>
        </div>
    )
}

export default Footer
