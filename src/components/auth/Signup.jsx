import React from 'react'
import "../../assets/css/customer.css"
const Signup = () => {
  return (
    <>
<main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex="-1">
<div className="customer register">
  <svg style={{display: "none"}}>
    <symbol id="icon-error" viewBox="0 0 13 13">
      <circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"></circle>
      <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7"></circle>
      <path d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z" fill="white"></path>
      <path d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z" fill="white" stroke="#EB001B" stroke-width="0.7">
    </path></symbol>
  </svg>
  <h1>
    Create account
  </h1><form method="post" action="/account" id="create_customer" accept-charset="UTF-8" data-login-with-shop-sign-up="true" novalidate="novalidate">
  <input type="hidden" name="form_type" value="create_customer"/>
  <input type="hidden" name="utf8" value="✓"/>
  <div className="field">      
      <input type="text" name="customer[first_name]" id="RegisterForm-FirstName" autocomplete="given-name" placeholder="First name"/>
      <label htmlFor="RegisterForm-FirstName">
        First name
      </label>
    </div>
    <div className="field">
      <input type="text" name="customer[last_name]" id="RegisterForm-LastName" autocomplete="family-name" placeholder="Last name"/>
      <label htmlFor="RegisterForm-LastName">
        Last name
      </label>
    </div>
    <div className="field">      
      <input type="email" name="customer[email]" id="RegisterForm-email" spellcheck="false" autocapitalize="off" autocomplete="email" aria-required="true" placeholder="Email"/>
      <label htmlFor="RegisterForm-email">
        Email
      </label>
    </div><div className="field">     
      <input type="password" name="customer[password]" id="RegisterForm-password" aria-required="true" placeholder="Password"/>
      <label htmlFor="RegisterForm-password">
        Password
      </label>
    </div><button>
      Create
    </button>
    <input name="return_to" type="hidden" value="/checkout"/>

    </form>
    </div>

      
    </main>
    </>
  )
}

export default Signup