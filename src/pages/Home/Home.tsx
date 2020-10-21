import React from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";

//Components
import { ProductBox } from '../../components/ProductBox/ProductBox';
import { Header } from './../../components/Header/Header';
import { Footer } from './../../components/Footer/Footer';

//styles
import './Home.scss'

import banner1 from './../../assets/images/banner1.jpg'
import banner2 from './../../assets/images/banner2.jpg'
import banner3 from './../../assets/images/banner3.jpg'
import Fastfood from './../../assets/images/Fast.jpg'
import combination from './../../assets/images/combination.jpg'

import product1 from './../../assets/images/product1.jpg'
import { Subscribe } from '../../components/Subscribe/Subscribe';


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
            <Header />
            <section className="block_section banner_section">
                <Slider {...settingsBanner}>
                    <div className="banner">
                        <img src={banner1} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Albanian Restaurant Menu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner2} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Special Dinner</h2>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner3} alt="banner3" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Mixed Vegetables</h2>
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
                                <img src={Fastfood} alt="Fastfood" />
                                <div className="box_medium__content">
                                    <h4>Fastfood now! $12.99</h4>
                                    <Link className='link' to="/">Order now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="column-6">
                            <div className="box_medium">
                                <img src={combination} alt="combination" /> 
                                <div className="box_medium__content">
                                    <h4>Combination $29,99</h4>
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
            </section>
            <Subscribe />
            <Footer />
        </div>
    )
}
