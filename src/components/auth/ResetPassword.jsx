"use client"
import React from 'react'
import "../../assets/css/customer.css"
import Link from 'next/link';
import { toast } from 'react-toastify';
import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { useState } from 'react';
const ResetPassword = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const searchParams = useSearchParams();
  const userdata = searchParams.get('data');
  const parsedData = JSON.parse(decodeURIComponent(userdata));
  // console.log(parsedData.user);
  const [data, setData] = useState({ confirmpassword:'', newpassword: "" })
  const login = async (e) => {
    e.preventDefault();
    // console.log(data);
    try {

      if (data.confirmpassword !== "" || data.newpassword !== "" || data.confirmpassword!==data.newpassword ) {
        setLoader(true);

        const response = await axios.post(`https://revolutionbackend.vercel.app/api/auth/forgot-password/${parsedData.user.id}/${parsedData.Verificationid}/set_new_password`, {password:data.confirmpassword})
        console.log(response);
        if (response.status === 200) {
          setLoader(false)
       
          toast.success(response.data.message);
          
          router.push("/authentication")
        }
      }
    } catch (error) {
      toast.error("Invalid request");
      setLoader(false)

    }
  }
  const onchang = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex="-1">
        <div className="customer login">
          <h1 id="login" tabindex="-1">
            Change password
          </h1>
          <div><form onSubmit={login} accept-charset="UTF-8" data-login-with-shop-sign-in="true" novalidate="novalidate"><input type="hidden" name="form_type" value="customer_login" /><input type="hidden" name="utf8" value="✓" /><div className="field">
          <input type="password" required value={data.newpassword} onChange={onchang} name="newpassword" id="CustomerPassword" autocomplete="current-password" placeholder="Password" />
              <label htmlFor="CustomerPassword">
             New  Password
              </label>
          </div><div className="field">
              <input type="password" required value={data.confirmpassword} onChange={onchang} name="confirmpassword" id="CustomerPassword" autocomplete="current-password" placeholder="Password" />
              <label htmlFor="CustomerPassword">
                Confirm Password
              </label>
            </div>

           <button type='submit'>
            {loader ? <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
              </div> : "Change password"}
            </button>
            <Link href="/authentication/signup">
              Cancel
            </Link></form></div></div>


      </main>
    </div>
  )
}

export default ResetPassword;