"use client"
import React from 'react'
import "../../assets/css/customer.css"
import Link from 'next/link';
import { toast } from 'react-toastify';
import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';
const Login = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({ email: '', password: "" })
  const login = async (e) => {
    e.preventDefault();
    console.log(data);
    try {

      if (data.email !== "" || data.password !== "") {
        setLoader(true);

        const response = await axios.post(`https://revolutionbackend.vercel.app/api/auth/login`, data)
        console.log(response);
        if (response.status === 200) {
          setLoader(false)
          setData({ email: '', password: "" });
          toast.success(response.data.message);
          localStorage.setItem("userprofile", JSON.stringify({
            firstname: response.data.user.firstname, lastname: response.data.user.lastname, email: response.data.user.email
            , sessionExpiration: response.data.user.sessionExpiration
          }));
          localStorage.setItem("login", false)
          router.push("/")
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
            Login
          </h1>
          <div><form onSubmit={login} accept-charset="UTF-8" data-login-with-shop-sign-in="true" novalidate="novalidate"><input type="hidden" name="form_type" value="customer_login" /><input type="hidden" name="utf8" value="✓" /><div className="field">
            <input type="email" name="email" required value={data.email} onChange={onchang} id="CustomerEmail" autocomplete="email" autocorrect="off" autocapitalize="off" placeholder="Email" />
            <label htmlFor="CustomerEmail">
              Email
            </label>
          </div><div className="field">
              <input type="password" required value={data.password} onChange={onchang} name="password" id="CustomerPassword" autocomplete="current-password" placeholder="Password" />
              <label htmlFor="CustomerPassword">
                Password
              </label>
            </div>

            <Link href="/authentication/verification">
              Forgot your password?
            </Link><button type='submit'>
            {loader ? <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
              </div> : "Sign in"}
            </button>
            <Link href="/authentication/signup">
              Create account
            </Link></form></div></div>


      </main>
    </div>
  )
}

export default Login;