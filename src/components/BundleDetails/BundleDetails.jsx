import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import Button from "../Button/Button";
import { Button, Table, Accordion, Space, Container } from '@mantine/core';
import classes from "./BundleDetails.module.css"

const BundleDetails = () => {
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
        // <Container style={{ backgroundColor: 'var(--tg-theme-secondary-bg-color)' }}>
        <div >
            {data && data.bundles.map((bundle, index) => {
                const networks = bundle.networks.map((network, index) => (
                    <div key={index} className={classes.country}>
                        <div className={classes.network}>{network.title} </div>
                        {network.local_networks.map((localNetwork, i) => (
                            <div key={i}>{localNetwork}</div>
                        ))}
                    </div>
                ));

                return (
                    <React.Fragment key={index}>
                        {/* <div className="bundle" style={{ backgroundColor: 'var(--tg-theme-bg-color)' }}> */}
                        <div className={classes.bundle} >
                            {/* Header */}
                            <Container className={classes["bundle-header"]}>
                                {/* <div className='bundle-title'>{bundle.title}</div> */}
                                <div className={classes['bundle-title']}>{title}</div>
                                <div className={classes['bundle-image']}><img src={bundle.img} alt={bundle.title} /></div>
                            </Container>
                            {/* Description and IP */}
                            <div className={classes['bundle-description']}>{bundle.description}</div>
                            {/* <div>{bundle.coverage}</div> */}
                            <Space h="lg" className={classes.space} />
                            <div className={classes['bundle-ip']}><span>Private IP:</span> {bundle.ip_location}</div>
                            {/* Accordion */}
                            <Accordion variant="filled" radius="md">
                                <Accordion.Item value="Coverage" className={classes["bundle-coverage"]}>
                                    {/* <Accordion.Control style={{ color: 'var(--tg-theme-text-color)'}}>Coverage</Accordion.Control> */}
                                    <Accordion.Control style={{ color: 'var(--tg-theme-text-color)' }}><span>Coverage</span></Accordion.Control>
                                    <Accordion.Panel>{networks}</Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                            <Space h="lg" className={classes.space} />
                            {/* Price table */}
                            <Table horizontalSpacing="xl" verticalSpacing="md" borderColor="var(--tg-theme-bg-color)">
                                {bundle.refills && Object.values(bundle.refills).map((refill, index) => (
                                    <React.Fragment key={index}>
                                        <Table.Tr className={classes["bundle-price"]}>
                                            <Table.Td>{refill.title}</Table.Td>
                                            <Table.Td>{refill.price_eur} EUR</Table.Td>
                                        </Table.Tr>
                                    </React.Fragment>
                                ))
                                }
                            </Table>
                        <Space h="lg" className={classes.space} />
                        <Button fullWidth variant="filled" className={classes.button} size="lg" radius="xs">
                            Order eSIM
                        </Button>
                        </div>  
                         {/* end bundle */}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default BundleDetails;

