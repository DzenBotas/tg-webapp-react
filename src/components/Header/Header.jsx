import React from 'react';
import Button from "../button/button";
import './Header.css';


const Header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close()
    }
    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
        </div>
    );
};
