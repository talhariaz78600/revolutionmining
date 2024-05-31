import React from 'react';
import Product from '@/components/product/Product';
const page = async() => {
    const productdata = async () => {
  
        const response = await fetch(`https://revolutionbackend.vercel.app/api/product/getProducts`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          cache: "no-store"
        })
        const res = await response.json();
        const data= res.finddata.filter((item)=>item.producttype==="equipment")
        if (data < 1) {
          redirect(`/not-found`)
        }
        else {
  
          return  data
        }
  
  
    }

    const product= await productdata()
  
    const data={
        title:"Bitcoin Mining Equipment",
        description:"We offer the latest cryptocurrency mining ASICS for mining Bitcoin and altcoins. Contact us and we'll help you find the right crypto miner for you.",
        allspecial:product
    
    }
  return (
    <div>
      <Product title={data.title} description={data.description} data={data.allspecial} filter={false}/>
    </div>
  );
}

export default page;
