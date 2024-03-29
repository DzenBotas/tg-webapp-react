import React, { useEffect, useState } from 'react';

const BundleDetails = () => {
    const [data, setData] = useState(null);

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
                console.log(jsonData)
                setData(jsonData);
            } else {
                console.error('Error:', response.status, response.statusText);
            }
        };

        fetchData();
    }, []);

        return (
            <div>
                {data && data.bundles.map((bundle, index) => (
                    <React.Fragment key={index}>
                        <div>{bundle.title}</div>
                        <div><img src={bundle.img} alt={bundle.title} /></div>
                        <div>{bundle.description}</div>
                        <div>{bundle.coverage}</div>
                        <div>{bundle.ip_location}</div>
                        <div>{bundle.coverage_list.join(', ')}</div>

                        {bundle.refills && Object.values(bundle.refills).map((refill, index) => (
                            <React.Fragment key={index}>
                                <div>{refill.title}</div>
                                <div>{refill.amount_mb}</div>
                                <div>{refill.days}</div>
                                <div>{refill.price_usd}</div>
                                <div>{refill.price_eur}</div>
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        );
    };

export default BundleDetails;

