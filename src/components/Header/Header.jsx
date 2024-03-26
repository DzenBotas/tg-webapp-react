import React from 'react';
import Button from "../Button/Button";
import './Header.css';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
    
    const { onClose } = useTelegram();
    // const { onExpand } = useTelegram()
    
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            {/* <Button onClick={onExpand}>Expand</Button> */}
            {/* <span className={'username'}>{user?.username}</span> */}
        </div>
    );
};

export default Header;