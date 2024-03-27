import React, { useState, useEffect } from 'react';
import devicesData from '../../data/supported_devices.json';
import './Devices.css';

function Devices() {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState('smartphones'); // Add this line

    useEffect(() => {
        setData(devicesData.data);
    }, []);

    return (
        <div>
            <ul className="tabs">
                <li className={activeTab === 'smartphones' ? 'active' : ''} onClick={() => setActiveTab('smartphones')}>Smartphones</li>
                <li className={activeTab === 'tablets-laptops' ? 'active' : ''} onClick={() => setActiveTab('tablets-laptops')}>Tablets & Laptops</li>
            </ul>

            {activeTab === 'smartphones' && 
                data.filter(deviceType => deviceType.type === 'smartphones').map((deviceType, index) => (
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
                                <div className={'exceptions'}><span>Exceptions:</span> {brand.exceptions}</div>
                            </div>
                        ))}
                    </div>
                ))
            }

            {activeTab === 'tablets-laptops' && 
                data.filter(deviceType => deviceType.type === 'tablets-laptops').map((deviceType, index) => (
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
                                <div className={'exceptions'}><span>Exceptions:</span> {brand.exceptions}</div>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    );
}

export default Devices;