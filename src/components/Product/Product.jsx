import React from 'react';
import Button from "../Button/Button";
import './Product.css';

const titleToFilename = (title) => {
    return encodeURIComponent(title.replace(/ & /g, "_").replace(/ /g, "_").toLowerCase()) + '.jpeg';
}

const Product = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    const imageUrl = `https://54.37.137.0/images/${titleToFilename(product.title)}`;

    return (
        <div className={'product ' + className}>
            <img className={'img'} src={imageUrl} alt={product.title}/>
            <div className={'title'}><strong>{product.title}</strong></div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Price: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Add to Cart
            </Button>
        </div>
    );
};

export default Product;