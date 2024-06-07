"use client"
import React, { useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "ASBc1CfwUgwGrRf2YIXleQ8dJou3JaMh4h",
  //   currency: "USD",
};

const Page = () => {
  useEffect(() => {
    console.log("PayPalScriptProvider options:", initialOptions);
  }, []);

  return (
  

        <PayPalScriptProvider options={{ "client-id": "ASBc1CfwUgwGrRf2YIXleQ8dJou3JaMh4hOR-lhCVh5LMlwi_mFGq5sXSEAo1S8AJT9TwSO1OZoU_j1i" }}>
          <div className="paypal-button-container">
            <PayPalButtons />
          </div>
        </PayPalScriptProvider>
     
      );
}

      export default Page;

