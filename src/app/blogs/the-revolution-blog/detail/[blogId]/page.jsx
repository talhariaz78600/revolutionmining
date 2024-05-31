import BlogDetail from '../../../../../components/blog/Blogdetail';
import React from 'react';

const page = async (context) => {
  const {blogId}=context.params;
  console.log(context.searchParams.pageno);

    const blogdata = async () => {
    
      const response = await fetch(`https://revolutionbackend.vercel.app/api/blog/getsingleblog/${blogId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        cache: "no-store"
      })
      const res = await response.json();
      // console.log(res.data);
      if (!res.data) {
        redirect(`/not-found`)
      }
      else {
  
        return  res.data ;
      }
  
  
  
    }
const data = await blogdata();
  return (
    <div>
      <BlogDetail data={data} id={blogId} pageno={context.searchParams.pageno}/>
    </div>
  );
}

export default page;
