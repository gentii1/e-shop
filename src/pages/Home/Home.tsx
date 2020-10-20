import React from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";

//Components
import { ProductBox } from '../../components/ProductBox/ProductBox';

//styles
import './Home.scss'

import banner1 from './../../assets/images/banner1.jpg'
import banner2 from './../../assets/images/banner2.jpg'
import banner3 from './../../assets/images/banner3.jpg'
import medium1 from './../../assets/images/medium1.jpg'
import medium2 from './../../assets/images/medium2.jpg'
import subscribe from './../../assets/images/subscribe.jpg'

import product1 from './../../assets/images/product1.jpg'


const settingsBanner = {
    dots: false,
    nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const SliderFavorite = {
    dots: false,
    nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
};

export const Home = () => {
    return (
        <div className="Home">
            <section className="block_section banner_section">
                <Slider {...settingsBanner}>
                    <div className="banner">
                        <img src={banner1} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Sale of the summer collection</h2>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner2} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Sale of the spring collection</h2>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner3} alt="banner3" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Sale of the winter collection</h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
            <section className="block_section medium_boxes">
                <div className="container">
                    <div className="row has_gutter">
                        <div className="column-6">
                            <div className="box_medium">
                                <img src={medium1} alt="medium1" />
                                <div className="box_medium__content">
                                    <h4>New arrivals are now in!</h4>
                                    <Link className='link' to="/">Show collection</Link>
                                </div>
                            </div>
                        </div>
                        <div className="column-6">
                            <div className="box_medium">
                                <img src={medium2} alt="medium2" /> 
                                <div className="box_medium__content">
                                    <h4>Basic t-shirts $29,99</h4>
                                    <Link className='link' to="/">More details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="block_section favorite_section">
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
                                    price="29.99"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="19.99"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="15.39"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="12.96"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="34.39"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="22.09"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="3.99"
                                    image={product1}
                                />
                            </div>
                            <div className="favorite_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Nutella"
                                    price="9.99"
                                    image={product1}
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="block_section subscribe_section">
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
            </section>
        </div>
    )
}
