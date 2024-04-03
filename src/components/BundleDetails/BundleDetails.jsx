import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./BundleDetails.css"
// import Button from "../Button/Button";
import { Button, Table, Accordion, Container, Space } from '@mantine/core';

const BundleDetails = ({ bundle }) => {
    const [data, setData] = useState(null);
    const location = useLocation();
    const title = location.state ? location.state.title : 'Default Title';
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
        <Container style={{ backgroundColor: 'var(--tg-theme-bg-color)' }}>
            {data && data.bundles.map((bundle, index) => {
                const networks = bundle.networks.map((network, index) => (
                    <div key={index}>
                        {network.title} {network.local_networks}
                    </div>
                ));

                return (
                    <React.Fragment key={index}>
                        <div className="bundle" style={{ backgroundColor: 'var(--tg-theme-secondary-bg-color)' }}>
                            {/* <h1>{title}</h1> */}
                            <div className="bundle-header">
                                {/* <div className='bundle-title'>{bundle.title}</div> */}
                                <div className='bundle-title'>{title}</div>
                                <div className='bundle-image'><img src={bundle.img} alt={bundle.title} /></div>
                            </div>
                            <div className='bundle-description'>{bundle.description}</div>
                            {/* <div>{bundle.coverage}</div> */}
                            <Space h="lg" />
                            <div className='bundle-ip'>Private IP: {bundle.ip_location}</div>
                            <div>
                                <Accordion >
                                    <Accordion.Item value="Coverage">
                                        <Accordion.Control>Coverage</Accordion.Control>
                                        <Accordion.Panel>{networks}</Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <Table className='bundle-plans' horizontalSpacing="xl">
                                {bundle.refills && Object.values(bundle.refills).map((refill, index) => (
                                    <React.Fragment key={index}>
                                        <Table.Tr className="bundle-price">
                                            <Table.Td>{refill.title}</Table.Td>
                                            <Table.Td>{refill.price_eur} EUR</Table.Td>
                                        </Table.Tr>
                                        {/* <div>{refill.amount_mb}</div>
                                            <div>{refill.days}</div>
                                            <div>{refill.price_usd}</div> */}
                                    </React.Fragment>
                                ))
                                }
                            </Table>
                        </div>
                        <Space h="lg" />
                        <Button style={{ backgroundColor: 'var(--tg-theme-button-color)' }} fullWidth variant="filled">
                            Order eSIM
                        </Button>
                    </React.Fragment>
                );
            })}
        </Container>
    );
};

export default BundleDetails;

