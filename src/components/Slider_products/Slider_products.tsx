import React from 'react'
import Slider from "react-slick";

import { ProductBox } from '../../components/ProductBox/ProductBox';

import product1 from './../../assets/images/product1.jpg';

import './Slider_products.scss'

const SliderFavorite = {
    dots: false,
    nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
};

export const Slider_products = () => {
    return (
        <div className="Slider_products">
            <div className="container">
                    <div className="main_title">
                        <h4>Selected just for you</h4>
                    </div>
                    <div className="favorite_slider">
                        <Slider {...SliderFavorite}>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="$29.99"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="$19.99"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="$15.39"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="$12.96"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="$34.39"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="$22.09"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="$3.99"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="$9.99"
                                    image={product1}
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
        </div>
    )
}
