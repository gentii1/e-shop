import React from 'react'

import footerlogoo from '../../assets/images/footerlogo.svg'
//icons
import fb from '../../assets/images/fb.svg'
import insta from '../../assets/images/insta.svg'
import li from '../../assets/images/in.svg'
import youtube from '../../assets/images/tube.svg'
import twitter from '../../assets/images/tw.svg'

//styles
import './Footer.scss'

export const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="Footer_wrapp">
                    <div className="Footer__info">
                    <img src={footerlogoo} alt="" />
                        <p>House My Brand designs clothing for the young, the old &
                        everyone in between – but most importantly, for the fashionable</p>
                    
                    <div className="footer__icons">
                            <img src={fb} alt="" />
                            <img src={twitter} alt="" />
                            <img src={li} alt="" />
                            <img src={insta} alt="" />
                            <img src={youtube} alt="" />
                        </div>
                    </div>
                    <nav className="footer_nav">
                    <ul>
                        <h3>Shopping Online</h3>
                        <li>Order Status</li>
                        <li>Shipping and Delivery</li>
                        <li>Returns</li>
                        <li>Payment Options</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <h3>Information</h3>
                        <li>Gift Cards</li>
                        <li>Find a store</li>
                        <li>NewsLetter</li>
                        <li>Become a member</li>
                        <li>Site Feedback</li>
                    </ul>
                    <ul>
                        <h3>Contact</h3>
                        <li>store@uikit.com</li>
                        <li>Hotline: 585158</li>
                    </ul>
                    </nav>
                </div>
                <h6 className='h6'>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</h6>
            </div>
        </div>
    )
}
