import React from 'react';
// import BackButton from "../Button/BackButton";
import './Header.css';

const Header = () => {
   
    return (
        <div className={'header'}>
            {/* <BackButton>Back</BackButton> */}
            {/* <Button onClick={onExpand}>Expand</Button> */}
            {/* <span className={'username'}>{user?.username}</span> */}
            <h3>Travel Bundles</h3>
        </div>
    );
};

export default Header;