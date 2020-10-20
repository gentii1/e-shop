import React from 'react'

import './ProductBox.scss'

import emptyImg from './../../assets/images/empty.jpg'

interface Props {
    id: string;
    title: string;
    price: string;
    image: string;
    isBig?: boolean;
}

export const ProductBox = (props: Props) => {
    return (
        <div className={`ProductBox ${props.isBig ? 'ProductBox--big' : 'ProductBox--small'}`}>
            <div className="ProductBox__thumb">
                <img src={props.image ? props.image : emptyImg} alt={props.title} />
            </div>
            <div className="ProductBox__content">
                <h4>{props.title}</h4>
                <span>{props.price}</span>
            </div>
        </div>
    )
}