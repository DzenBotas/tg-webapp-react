import React, {useState} from 'react';
import './ProductsList.css';
import Product from "../Product/Product";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";

const products = [
    {id: '1', title: 'Europe', price: 'From 1,4$/Gb', description: 'Синего цвета, прямые'},
    {id: '2', title: 'Africa', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '3', title: 'Asia', price: 5000, description: 'Синего цвета, прямые'},
    {id: '4', title: 'North America', price: 122, description: 'Зеленого цвета, теплая'},
    {id: '5', title: 'Latin America', price: 5000, description: 'Синего цвета, прямые'},
    {id: '6', title: 'Pacific', price: 600, description: 'Зеленого цвета, теплая'},
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