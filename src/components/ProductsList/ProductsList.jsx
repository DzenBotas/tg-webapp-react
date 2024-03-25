import React, {useState} from 'react';
import './ProductsList.css';
import Product from "../Product/Product";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";

const products = [
    {id: '1', title: 'Europe', price: 'From 1,4$/Gb', description: 'Expanded coverage in 30+ European countries'},
    {id: '2', title: 'Africa', price: 'From 8$/Gb', description: '25 networks - Orange, MTN and Airtel coverage in most places'},
    {id: '3', title: 'Asia Pacific', price: 'From 1.5$/Gb', description: 'Reliable, fast mobile data on 10+ networks'},
    {id: '4', title: 'North America', price: 'From 5$/Gb', description: 'FIDO in Canada, AT&T and T-Mobile in the USA'},
    {id: '5', title: 'Latin America', price: 'From 3$/Gb', description: '15+ networks - Movistar coverage in most countries'},
    {id: '6', title: 'Global', price: 'From 10$/Gb', description: 'Expanded coverage on 200 networks'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductsList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        // fetch('http://85.119.146.179:8000/web-data', {
            fetch('http://localhost:8000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems, queryId])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <Product
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductsList;