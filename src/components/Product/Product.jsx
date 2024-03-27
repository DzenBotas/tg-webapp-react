import React from 'react';
// import Button from "../Button/Button";
import './Product.css';

const titleToFilename = (title) => {
    return encodeURIComponent(title.replace(/ & /g, "_").replace(/ /g, "_").toLowerCase()) + '.jpeg';
}

const Product = ({product, className }) => {

    const imageUrl = `https://vps-ed04f1ea.vps.ovh.net/images/${titleToFilename(product.title)}`;

    return (
        <div className={'product ' + className}>
            <img className={'img'} src={imageUrl} alt={product.title}/>
            <div className={'title'}><strong>{product.title}</strong></div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span><b>{product.price}</b></span>
            </div>
        </div>
    );
};

export default Product;