"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      padding: 30,
      backgroundColor: '#f5f5f5',
    },
    section: {
      marginBottom: 20,
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 5,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
      fontSize: 24,
      marginBottom: 10,
      textAlign: 'center',
      color: '#333',
    },
    text: {
      fontSize: 12,
      marginBottom: 5,
      color: '#555',
    },
    order: {
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    },
    orderHeader: {
      fontSize: 14,
      marginBottom: 5,
      fontWeight: 'bold',
      color: '#333',
    },
    orderText: {
      fontSize: 12,
      marginBottom: 3,
      color: '#555',
    },
  });
  
  const MyDocument = ({ orders,user }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Invoices</Text>
          <Text style={styles.text}>Name: {user.firstname+" "+user.lastname}</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
          <Text style={styles.text}>PhoneNo: {user.mobileNumber}</Text>
        </View>
        {orders.map((order, index) => (
          <View key={order._id} style={styles.order}>
            <Text style={styles.orderHeader}>Order #{order.product[0].orderId}</Text>
            <Text style={styles.orderText}>
              Date: {new Date(order.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
            <Text style={styles.orderText}>
              Status: {order.status === true ? 'Completed' : 'Pending'}
            </Text>
            <Text style={styles.orderText}>Price: ${order.price}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
const Invoices = () => {
    const [orders, setOrders] = useState();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userProfile = localStorage.getItem('userprofile');
            const data = JSON.parse(userProfile)
            console.log(data);
            if (data && data.sessionExpiration > new Date()) {
                setUser(data);
            } else {
                localStorage.removeItem('userprofile')
                setUser(null);
                // localStorage.removeItem("userdata")
            }
        }
    }, []);


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
            <div className='flex justify-between my-5'>
                <h1 className="text-lg text-center mt-10" >
                    All invoices
                </h1>

            </div>
           {
           orders && <div className="orders-list">

            <table role="table" className="order-history small-hide">
                <thead role="rowgroup">
                    <tr role="row">
                        <th id="ColumnDate" scope="col" role="columnheader"><center>Order</center></th>
                        <th id="ColumnDate1" scope="col" role="columnheader"><center>Date</center></th>
                        <th id="ColumnFacility" scope="col" role="columnheader text-center">Payment status</th>
                        <th id="ColumnMachine" scope="col" role="columnheader text-center">Total</th>


                    </tr>
                </thead>
                <tbody role="rowgroup">
                    {orders.map((order, index) => (

                        <React.Fragment key={order._id}>
                            <tr role="row">
                                <td># #{order.product[0].orderId}</td>
                                <td className="nowrap">{new Date(order.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</td>
                                <td>{order.status === true ? "completed" : "pending"}</td>
                                <td>{order.price}</td>
                            </tr>

                        </React.Fragment>

                    ))}
                </tbody>
            </table>
            <div className="order-history lg:hidden">
                {orders.map((order, index) => (

                    <div className="single-order" key={order._id}>
                        <div>#{order.product[0].orderId}</div>
                        <div>

                            <ul>
                                <li><span>Order Date:</span> {new Date(order.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</li>
                                <li><span>Payment Status:</span> {order.status === true ? "completed" : "pending"}</li>
                                <li><span>Total:</span> {order.price}</li>


                            </ul>
                        </div>
                    </div>

                ))}
            </div>
        </div>
           } 
            
            <div className='flex justify-end mt-5'>
              {orders&& <button className='mx-3  button button--secondary' disabled={orders.length>0?false:true} >

                    <PDFDownloadLink document={<MyDocument orders={orders} user={user} />} fileName="invoice.pdf">
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
                    </PDFDownloadLink>
                </button>}
            </div>

        </div>
    );
}

export default Invoices;
