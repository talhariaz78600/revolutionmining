"use client"
import React, { useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Pay from '@/components/pay/Pay';
import axios from 'axios';
const Page = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userProfile = localStorage.getItem('userprofile');
      if (userProfile) {
        setUser(JSON.parse(userProfile));
      }
    }
  }, []);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'))
    setCart(savedCart);

  
    if (savedCart) {
      const newTotal = savedCart.reduce((acc, item) => {
        return acc + item.price + item.hostingfee + item.deposit + item.installation + item.monthlysupport;
      }, 0);
      setTotal(newTotal);
    }
  }, []);
  const handleCreateOrder = async (data, actions) => {
    const orderData = {
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: `${total}`
        },
        description: 'Thanks for using our service'
      }]
    };

    return actions.order.create(orderData).then((orderId) => {
      return orderId;
    }).catch((error) => {
      console.error('Error creating order:', error);
      return undefined;
    });
  };
  const sendPaymentDetailsToAPI = async (paymentDetails) => {

    console.log("Order successfully completed");
    const data = paymentDetails;

    try {
    let wash = cart.map((item) => {
      return { productId: item._id, orderId: data.id, orderStatus: data.status, productprice: item.price,title:item.title, hostingfee:item.hostingfee,power:item.power,machines:item.machines}
    })
      const response = await axios.post('https://revolutionbackend.vercel.app/api/order/productorder', {
        userId: user.id,
        product: wash?wash:"",
        price: total,
        noofitems: wash?wash.length:"",
        status:data.status==="completed"?true:false
      });
      if (response.status === 200) {
        console.log('Payment details saved successfully:', data);
      } else {
        console.error('Error saving payment details:', data);
      }
    } catch (error) {
      console.error('Error in sending payment details to API:', error);
    }
  };

  return (

    <div className='grid grid-cols-2 min-h-screen gap-6'>

      <div className='col-span-1 mx-5 sm:mx-20  mt-10 md:mt-40'>
        <PayPalScriptProvider options={{ "client-id": "ASBc1CfwUgwGrRf2YIXleQ8dJou3JaMh4hOR-lhCVh5LMlwi_mFGq5sXSEAo1S8AJT9TwSO1OZoU_j1i" }}>
          <div className=" w-[320px] md:w-[700px] lg:w-[500px] mx-4">
            <PayPalButtons createOrder={handleCreateOrder} onApprove={async (data, actions) => {
              try {
                const details = await actions.order.capture(); // Capture the payment
                console.log('Payment details:', details);
                if (details) {
                  await sendPaymentDetailsToAPI(details); // Send details to your API
                  console.log('Payment successful');
                }
              } catch (error) {
                console.error('Payment failed:', error);
              }
            }}
            />
          </div>
        </PayPalScriptProvider>

      </div>

      <div className='col-span-1 mx-10'>
        <Pay cart={cart.length} total={total} />
      </div>
    </div>

  );
}

export default Page;

