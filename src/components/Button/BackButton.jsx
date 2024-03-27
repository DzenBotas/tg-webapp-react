import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Button.css';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const { tg } = useTelegram();

    const navigate = useNavigate();

    const callback = () => {
        navigate(-1);
    };

    const onBack = () => {
        tg.BackButton.onClick(callback);
    }

    return (
        <button className='button' onClick={onBack}>Back</button>
    );
};

export default BackButton;