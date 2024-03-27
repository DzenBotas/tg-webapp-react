import React from 'react';
import Button from "../Button/Button";
import './Header.css';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
    
const BackButton = () => {
    const { tg } = useTelegram();

    const onBack = () => {
        tg.back();
    }
    
    return (
        <div className={'header'}>
            <Button BackButton={onBack}>Back</Button>
            {/* <Button onClick={onExpand}>Expand</Button> */}
            {/* <span className={'username'}>{user?.username}</span> */}
            <h3>Travel Bundles</h3>
        </div>
    );
}};

export default Header;