import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css';

const titleToFilename = (title) => {
    return encodeURIComponent(title.replace(/ & /g, "_").replace(/ /g, "_").toLowerCase()) + '.jpeg';
}

const Product = ({product, className }) => {

    const imageUrl = `https://vps-ed04f1ea.vps.ovh.net/images/${titleToFilename(product.title)}`;

const navigate = useNavigate();
const handleOnClick = () => {
    navigate("/bundle_details", { state: { title: product.title }});
    }

    return (
        <div className={'product ' + className}>
            <img className={'img'} src={imageUrl} alt={product.title}/>
            <div className={'title'}><strong>{product.title}</strong></div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span><b>{product.price}</b></span>
            </div>
            <div className="info-links">
                <Link to="/devices">Supported devices</Link>
                {/* <Link to={{
                    pathname: "/bundle_details",
                    state: { title: product.title }
                }}>See details</Link> */}
                <button onClick={handleOnClick}>See details</button>
            </div>
        </div>
    );
};

export default Product;