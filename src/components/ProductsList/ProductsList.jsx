import React from 'react';
import './ProductsList.css';
import Product from "../Product/Product";

const products = [
    {id: '1', title: 'Europe', price: 'From 1,4$/Gb', description: 'Expanded coverage in 30+ European countries'},
    {id: '2', title: 'Africa', price: 'From 8$/Gb', description: '25 networks - Orange, MTN and Airtel coverage in most places'},
    {id: '3', title: 'Asia Pacific', price: 'From 1.5$/Gb', description: 'Reliable, fast mobile data on 10+ networks'},
    {id: '4', title: 'North America', price: 'From 5$/Gb', description: 'FIDO in Canada, AT&T and T-Mobile in the USA'},
    {id: '5', title: 'Latin America', price: 'From 3$/Gb', description: '15+ networks - Movistar coverage in most countries'},
    {id: '6', title: 'Global', price: 'From 10$/Gb', description: 'Expanded coverage on 200 networks'},
]

const ProductsList = () => {
    return (
        <div className={'list'}>
            {products.map(item => (
                <Product
                    key={item.id} 
                    product={item}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductsList;
