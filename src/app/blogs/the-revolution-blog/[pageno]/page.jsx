import { redirect } from 'next/navigation'
import React from 'react';
import Blog from '@/components/blog/Blog';
const page = async (context) => {
  const {pageno } = context.params;
  // console.log(context.searchParams.search);


  const blogdata = async () => {
  
      const response = await fetch(`https://revolutionbackend.vercel.app/api/blog/getblogdata?page=${pageno}&limit=${5}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        cache: "no-store"
      })
      const res = await response.json();
      if (res.finddata < 1) {
        redirect(`/not-found`)
      }
      else {

        return { data: res.finddata, total: res.stop,search:"no"};
      }


  }
  const data = await blogdata();

  return (
    <div>
      {data && <Blog title={"/blogs/the-revolution-blog"} data={data} pageno={pageno} />}
    </div>
  );
}

export default page;
