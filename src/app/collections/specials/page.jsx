import React from 'react';
import Product from '@/components/product/Product';
const page = () => {
    const data={
        title:"Specials",
        description:"Discover Exclusive Savings: Limited Quantities Available on our Special Deals and Bundles",
        allspecial:[{
            name:"Antminer S21 200TH Bundle",
            price:"$15,000",
            condition:"New",
            machine:"Includes 3 Machines",
            hostingfee:"$588/month",
            onlinedate:"June 2024",
            src:"/images/bundle.webp",
            power:"6 TH | 3400 Watts "
        },
        {
            name:"Antminer S21 200TH Bundle",
            price:"$15,000",
            condition:"New",
            machine:"Includes 3 Machines",
            hostingfee:"$588/month",
            onlinedate:"June 2024",
            src:"/images/bundle.webp",
            power:"6 TH | 3400 Watts "
        },
        {
            name:"Antminer S21 200TH Bundle",
            price:"$15,000",
            condition:"New",
            machine:"Includes 3 Machines",
            hostingfee:"$588/month",
            onlinedate:"June 2024",
            src:"/images/bundle.webp",
            power:"6 TH | 3400 Watts "
        }
    ]
    }
  return (
    <div>
      <Product title={data.title} description={data.description} data={data.allspecial}/>
    </div>
  );
}

export default page;
