"use client";
import { useEffect, useState } from 'react';
import React from 'react';

const Orderstatus = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            if (typeof window !== 'undefined') {
                const userProfile = localStorage.getItem('userprofile');
                if (userProfile) {
                    const data1 = JSON.parse(userProfile);

                    try {
                        const response = await fetch(`https://revolutionbackend.vercel.app/api/order/getUserorders/${data1.id}`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            cache: "no-store"
                        });
                        const res = await response.json();
                        setOrders(res.items);
                        console.log(res.items);
                    } catch (error) {
                        console.error('Error fetching orders:', error);
                    }
                    setLoading(false);
                }
            }
        };
        fetchOrders();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="orders-list">
                <table role="table" className="order-history small-hide">
                    <caption className="visually-hidden">
                        Order history
                    </caption>
                    <thead role="rowgroup">
                        <tr role="row">
                            <th id="ColumnDate" scope="col" role="columnheader"><center>Order Date</center></th>
                            <th id="ColumnFacility" scope="col" role="columnheader">Facility</th>
                            <th id="ColumnMachine" scope="col" role="columnheader">Machine</th>
                            <th id="ColumnQuantity" scope="col" role="columnheader">Quantity<br /></th>
                            <th id="ColumnPower" scope="col" role="columnheader">
                                <center>
                                    Power<br />
                                    <small>(Watts)</small>
                                </center>
                            </th>
                            <th id="ColumnTotal" scope="col" role="columnheader"><center>Monthly Hosting Fee</center></th>
                            
                        </tr>
                    </thead>
                    <tbody role="rowgroup">
                        {orders.map((order) => (
                            order.product.map((item) => (
                                <React.Fragment key={item._id}>
                                    <tr role="row">
                                        <td className="nowrap">{new Date(order.createdAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}</td>
                                        <td>Texas, United States</td>
                                        <td>{item.title}</td>
                                        <td>{item.machines}</td>
                                        <td>{item.power}</td>
                                        <td>${item.hostingfee}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td colSpan="8" className='text-left mt-5'>
                                            <div className="order-progress">
                                                <div className="step active">Pending</div>
                                                {/* <div className="step">In transit</div>
                                                <div className="step">At Facility</div> */}
                                                <div className="step">Live</div>
                                            </div>
                                            Order Number: #{item.orderId}
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))
                        ))}
                    </tbody>
                </table>
                <div className="order-history lg:hidden">
                    {orders.map(order => (
                        order.product.map(item => (
                            <div className="single-order" key={item._id}>
                                <div>Order Number: #{item.orderId}</div>
                                <div>
                                    <div className="order-progress">
                                        <div className="step active">Pending</div>
                                        {/* <div className="step">In transit</div>
                                        <div className="step">At Facility</div> */}
                                        <div className="step">Live!</div>
                                    </div>
                                    <ul>
                                        <li><span>Order Date:</span> {new Date(order.createdAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}</li>
                                        <li><span>Facility:</span> Texas, United States</li>
                                        <li><span>Machine Name(s):</span> {item.title}</li>
                                        <li><span>Quantity:</span> {item.machines}</li>
                                        <li><span>Power(kW):</span> {item.power}</li>
                                        <li><span>Monthly Fee:</span> ${item.hostingfee}</li>
                                       
                                    </ul>
                                </div>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Orderstatus;
