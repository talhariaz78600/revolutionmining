import React from 'react'
import "../../assets/css/customer.css"
import Link from 'next/link'
const Login = () => {
  return (
    <div>
        <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex="-1">
      
<div className="customer login">
  <h1 id="recover" tabindex="-1">
    Reset your password
  </h1>
  <div>
    <p>
      We will send you an email to reset your password
    </p><form method="post" action="/account/recover" accept-charset="UTF-8"><input type="hidden" name="form_type" value="recover_customer_password"/><input type="hidden" name="utf8" value="✓"/>
      <div className="field">
        <input type="email" value="" name="email" id="RecoverEmail" autocorrect="off" autocapitalize="off" autocomplete="email" placeholder="Email"/>
        <label for="RecoverEmail">
          Email
        </label>
      </div><button>
        Submit
      </button>

      <a href="#login">
        Cancel
      </a></form></div>

  <h1 id="login" tabindex="-1">
    Login
  </h1>
  <div><form method="post" action="/account/login" id="customer_login" accept-charset="UTF-8" data-login-with-shop-sign-in="true" novalidate="novalidate"><input type="hidden" name="form_type" value="customer_login"/><input type="hidden" name="utf8" value="✓"/><div className="field">        
        <input type="email" name="customer[email]" id="CustomerEmail" autocomplete="email" autocorrect="off" autocapitalize="off" placeholder="Email"/>
        <label for="CustomerEmail">
          Email
        </label>
      </div><div className="field">          
          <input type="password" value="" name="customer[password]" id="CustomerPassword" autocomplete="current-password" placeholder="Password"/>
          <label for="CustomerPassword">
            Password
          </label>
        </div>

        <a href="#recover">
          Forgot your password?
        </a><button>
        Sign in
      </button>
      <Link href="/authentication/signup">
        Create account
      </Link></form></div></div>

      
    </main>
    </div>
  )
}

export default Login