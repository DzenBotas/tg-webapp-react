import React, { useState, useEffect } from 'react';
import devicesData from '../../data/supported_devices.json';
import './Devices.css';
import BackButton from "../Button/BackButton";

function Devices() {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState('Smartphones'); // Add this line

    useEffect(() => {
        setData(devicesData.data);
    }, []);

    return (
        <div className="container">
            <BackButton>Back</BackButton>
            <ul className="tabs">
                <li className={activeTab === 'Smartphones' ? 'active' : ''} onClick={() => setActiveTab('Smartphones')}>Smartphones</li>
                <li className={activeTab === 'Tablets & laptops' ? 'active' : ''} onClick={() => setActiveTab('Tablets & laptops')}>Tablets & Laptops</li>
            </ul>

            {activeTab === 'Smartphones' && 
                data.filter(deviceType => deviceType.type === 'Smartphones').map((deviceType, index) => (
                    <div key={index}>
                        <h2 className={'type'}>{deviceType.type}</h2>
                        {deviceType.brands.map((brand, brandIndex) => (
                            <div key={brandIndex}>
                                <h3 className={'brand-title'}>{brand.title}</h3>
                                <ul className={'models'}>
                                    {brand.models.map((model, modelIndex) => (
                                        <li key={modelIndex}>{model}</li>
                                    ))}
                                </ul>
                                <div className={'exceptions'}>
                                {brand.exceptions && brand.exceptions.length > 0 &&                          <span>Exceptions:</span>} {brand.exceptions}</div>
                            </div>
                        ))}
                    </div>
                ))
            }

            {activeTab === 'Tablets & laptops' && 
                data.filter(deviceType => deviceType.type === 'Tablets & laptops').map((deviceType, index) => (
                    <div key={index}>
                        <h2 className={'type'}>{deviceType.type}</h2>
                        {deviceType.brands.map((brand, brandIndex) => (
                            <div key={brandIndex}>
                                <h3 className={'brand-title'}>{brand.title}</h3>
                                <ul className={'models'}>
                                    {brand.models.map((model, modelIndex) => (
                                        <li key={modelIndex}>{model}</li>
                                    ))}
                                </ul>
                                <div className={'exceptions'}>{brand.exceptions && brand.exceptions.length > 0 &&                          <span>Exceptions:</span>} {brand.exceptions}</div>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    );
}

export default Devices;