import React, { useState, useEffect } from 'react';
import devicesData from './supported_devices.json';

function Devices() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(devicesData.data);
    }, []);

    return (
        <div>
            {data.map((deviceType, index) => (
                <div key={index}>
                    <div className={'type'}>{deviceType.type}</div>
                    {deviceType.brands.map((brand, brandIndex) => (
                        <div key={brandIndex} className={'title'}>
                            <div className={'device-name'}>{brand.title}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Devices;