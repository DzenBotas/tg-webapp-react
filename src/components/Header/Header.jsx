import React from 'react';
// import Button from "../button/button";
import './Header.css';
import { useTelegram } from '../../hooks/useTelegram';


const Header = () => {

    const { onClose, user } = useTelegram();

    return (
        <div className={'header'}>
            <button onClick={onClose}>Close</button>
            <span className={'username'}>{user?.username}</span>
        </div>
    );
};
