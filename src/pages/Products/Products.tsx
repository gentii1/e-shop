import React from 'react'
import Slider from "react-slick";
import { Footer } from '../../components/Footer/Footer'
import { SecondHeader } from '../../components/SecondHeader/SecondHeader'
// import { Slider_products } from '../../components/Slider_products/Slider_products'
import { Subscribe } from '../../components/Subscribe/Subscribe'
import { ProductBox } from '../../components/ProductBox/ProductBox';

import Fastfood from './../../assets/images/Fast.jpg'
import product1 from './../../assets/images/product1.jpg'

import './Product.scss'

const SliderFavorite = {
    dots: false,
    nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
};

export const Products = () => {
    return (
        <div className="Products">
            <SecondHeader />
            <div className="container">
                <div className="Product_wrapp">
                 <div className="Product__thumb">
                     <img src={Fastfood} alt=""/>
                 </div>
                 <div className="Product__content">
                     <h2>Fastfood</h2>
                     <span>$12.99</span>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                 </div>
                </div>

            </div>
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
                                    price="$9.99"
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
