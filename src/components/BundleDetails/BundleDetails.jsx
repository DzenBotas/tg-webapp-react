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
                setData(jsonData);
            } else {
                console.error('Error:', response.status, response.statusText);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data && (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Coverage</th>
                            <th>IP Location</th>
                            <th>Image</th>
                            <th>Coverage List</th>
                            <th>Refills Title</th>
                            <th>Refills Amount (MB)</th>
                            <th>Refills Days</th>
                            <th>Refills Price (USD)</th>
                            <th>Refills Price (EUR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.bundles.map((bundle, index) => (
                            <tr key={index}>
                                <td>{bundle.title}</td>
                                <td>{bundle.description}</td>
                                <td>{bundle.coverage}</td>
                                <td>{bundle.ip_location}</td>
                                <td><img src={bundle.img} alt={bundle.title} /></td>
                                <td>{bundle.coverage_list.join(', ')}</td>
                                {bundle.refills.map((refill, index) => (
                                    <React.Fragment key={index}>
                                        <td>{refill.title}</td>
                                        <td>{refill.amount_mb}</td>
                                        <td>{refill.days}</td>
                                        <td>{refill.price_usd}</td>
                                        <td>{refill.price_eur}</td>
                                    </React.Fragment>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BundleDetails;

