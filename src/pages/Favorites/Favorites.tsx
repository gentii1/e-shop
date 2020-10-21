import React from 'react'

//components
import { Footer } from '../../components/Footer/Footer'
import { SecondHeader } from '../../components/SecondHeader/SecondHeader'
import { Subscribe } from '../../components/Subscribe/Subscribe'

import './Favorites.scss'



export const Favorites = () => {
    return (
        <div className="Favorites">
            <SecondHeader />
            <div className="container">
                <div className="Favorites_wrapp">
                    
                </div>

            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}
