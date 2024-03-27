import React, { useState, useEffect } from 'react';
import devicesData from '../../data/supported_devices.json';
import './Devices.css';

function Devices() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(devicesData.data);
    }, []);

    return (
        <div>
            {data.map((deviceType, index) => (
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
            ))}
        </div>
    );
}

export default Devices;