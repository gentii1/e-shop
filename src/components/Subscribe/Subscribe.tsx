import React from 'react'

import './Subscribe.scss'
import subscribe from './../../assets/images/subscribe.jpg'

export const Subscribe = () => {
    return (
        <div className="Subscribe">
            <div className="container">
                <div className="subscribe_wrapp">
                <img src={subscribe} alt="subscribe" /> 
                    <div className="subscribe__content">
                        <h2>Subscribe to our newsletter and receive exclusive offers every week</h2>
                        <div className="subscribe_input">
                            <input type="text" placeholder="enter your email" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}
