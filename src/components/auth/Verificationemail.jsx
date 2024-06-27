"use client"
import React from 'react'
import "../../assets/css/customer.css"
import Link from 'next/link';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const Verificationemail = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({ email: '' })
  const sendmail = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      if (data.email !== "") {
        setLoader(true);
        const response = await axios.post(`https://revolutionbackend.vercel.app/api/auth/verification`, data)
        console.log(response);
        if (response.status === 200) {
          setLoader(false)
          router.push("/authentication")
          setData({ email: "" })
          toast.success("We have send email to you for reset password");
        }
      }
    } catch (error) {
      toast.error(error.message);
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
          <h1  >
            Reset your password
          </h1>
          <div>
            <p>
              We will send you an email to reset your password
            </p><form onSubmit={sendmail}><input type="hidden" name="form_type" value="recover_customer_password" /><input type="hidden" name="utf8" value="✓" />
              <div className="field">
                <input type="email" value={data.data} onChange={onchang} name="email" id="RecoverEmail" autocorrect="off" autocapitalize="off" autocomplete="email" placeholder="Email" />
                <label htmlFor="RecoverEmail">
                  Email
                </label>
              </div><button>
                {loader ? <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status">
                  <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                  >Loading...</span
                  >
                </div> : "Submit"}
              </button>

              <Link href="/authentication">
                Cancel
              </Link>
            </form>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Verificationemail;