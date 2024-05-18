import React from 'react';
import Product from '@/components/product/Product';
const page = () => {
    const data={
        title:"Bitcoin Mining Equipment",
        description:"We offer the latest cryptocurrency mining ASICS for mining Bitcoin and altcoins. Contact us and we'll help you find the right crypto miner for you.",
        allspecial:[{
            name:"Iceriver KAS KS3M 6 TH",
            price:"$9,650",
            condition:"New",
            machine:"6 TH/s | 3400 Watts",
            hostingfee:"$175/month",
            onlinedate:"June 2024",
            src:"/images/ks5big_533x.png",
            power:null
        },
        {
            name:"Iceriver KAS KS3M 6 TH",
            price:"$9,650",
            condition:"New",
            machine:"6 TH/s | 3400 Watts",
            hostingfee:"$175/month",
            onlinedate:"June 2024",
            src:"/images/ks5big_533x.png",
            power:null
        },
        {
            name:"Iceriver KAS KS3M 6 TH",
            price:"$9,650",
            condition:"New",
            machine:"6 TH/s | 3400 Watts",
            hostingfee:"$175/month",
            onlinedate:"June 2024",
            src:"/images/ks5big_533x.png",
            power:null
        },
        {
            name:"Iceriver KAS KS3M 6 TH",
            price:"$9,650",
            condition:"New",
            machine:"6 TH/s | 3400 Watts",
            hostingfee:"$175/month",
            onlinedate:"June 2024",
            src:"/images/ks5big_533x.png",
            power:null
        },
        {
            name:"Iceriver KAS KS3M 6 TH",
            price:"$9,650",
            condition:"New",
            machine:"6 TH/s | 3400 Watts",
            hostingfee:"$175/month",
            onlinedate:"June 2024",
            src:"/images/ks5big_533x.png",
            power:null
        },
        {
            name:"Iceriver KAS KS3M 6 TH",
            price:"$9,650",
            condition:"New",
            machine:"6 TH/s | 3400 Watts",
            hostingfee:"$175/month",
            onlinedate:"June 2024",
            src:"/images/ks5big_533x.png",
            power:null
        },
        {
            name:"Iceriver KAS KS3M 6 TH",
            price:"$9,650",
            condition:"New",
            machine:"6 TH/s | 3400 Watts",
            hostingfee:"$175/month",
            onlinedate:"June 2024",
            src:"/images/ks5big_533x.png",
            power:null
        },
        {
            name:"Iceriver KAS KS3M 6 TH",
            price:"$9,650",
            condition:"New",
            machine:"6 TH/s | 3400 Watts",
            hostingfee:"$175/month",
            onlinedate:"June 2024",
            src:"/images/ks5big_533x.png",
            power:null
        }
    ]
    }
  return (
    <div>
      <Product title={data.title} description={data.description} data={data.allspecial} filter={true}/>
    </div>
  );
}

export default page;
