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
    const data= res.finddata.filter((item)=>item.producttype==="special")
    if (data < 1) {
      redirect(`/not-found`)
    }
    else {

      return  data
    }


}

const product= await productdata()
    const data={
        title:"Specials",
        description:"Discover Exclusive Savings: Limited Quantities Available on our Special Deals and Bundles",
        allspecial:product
    }
  return (
    <div>
      <Product title={data.title} description={data.description} data={data.allspecial}/>
    </div>
  );
}

export default page;
