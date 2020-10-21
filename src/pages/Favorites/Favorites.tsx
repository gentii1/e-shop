import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { SecondHeader } from '../../components/SecondHeader/SecondHeader'
import { Subscribe } from '../../components/Subscribe/Subscribe'

import './Favorites.scss'

export const Favorites = () => {
    return (
        <div className="Favorites">
            <SecondHeader />
            <div className="container">
                <div className="Favoriteswrapp">
                    <h4>3</h4>
                    <p>dkshjghcjkl</p>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}
