import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import "./BundleDetails.css"
import Button from "../Button/Button";

const BundleDetails = () => {
    const [data, setData] = useState(null);
    // const location = useLocation();
    // const title = location.state ? location.state.title : 'Default Title';
    // TODO: title check to pass data to fetch data: ['bundle.{title}']. Use switch?
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://myaccount.getesim.io/api/v2/search_bundles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: ['bundle.Vela']
                })
            });

            if (response.ok) {
                const jsonData = await response.json();
                // console.log(jsonData)
                setData(jsonData);
            } else {
                console.error('Error:', response.status, response.statusText);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data && data.bundles.map((bundle, index) => {
                // console.log(bundle.networks); // Log bundle.networks for each bundle

                return (
                    <React.Fragment key={index}>
                        <div className="bundle">
                            {/* <h1>{title}</h1> */}
                            <div className="bundle-header">
                                <div className='bundle-title'>{bundle.title}</div>
                                <div className='bundle-image'><img src={bundle.img} alt={bundle.title} /></div>
                            </div>
                            <div className='bundle-description'>{bundle.description}</div>
                            {/* <div>{bundle.coverage}</div> */}
                            <div className='bundle-ip'>Private IP: {bundle.ip_location}</div>
                            {/* <div>
                                    {bundle.networks && bundle.networks.map((network, index) => (
                                        <div key={index}>{network.title}</div>
                                    ))}
                                </div>                             */}
                            <ul className='bundle-plans'>
                                {bundle.refills && Object.values(bundle.refills).map((refill, index) => (
                                    <React.Fragment key={index}>
                                        <li className="bundle-price">
                                            <div>{refill.title}</div>
                                            <div>{refill.price_eur} EUR</div>
                                        </li>
                                        {/* <div>{refill.amount_mb}</div>
                                            <div>{refill.days}</div>
                                            <div>{refill.price_usd}</div> */}
                                    </React.Fragment>
                                ))
                                }
                            </ul>
                        </div>
                            <Button>Buy eSIM</Button>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default BundleDetails;

