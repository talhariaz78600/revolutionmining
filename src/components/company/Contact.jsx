"use client"
import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import "../../assets/css/section-contact-us-form.css"
import axios from 'axios';
const Contact = () => {
  const form = useRef(null)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }
  const contact = async()=>{
    try {
      const response= await axios.post('https://revolutionbackend.vercel.app/api/contact/createContact',{
        Name:data.firstName,
        lastname:data.lastName,
        email:data.email,
        message:data.message
      })
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }

  const sendMail = async(e) => {
    e.preventDefault();
    setLoading(true)
    if (data.firstName !== "" && data.lastName !== "" && data.email !== "" && data.message !== "") {
     await contact()
      emailjs.sendForm("service_iobi7zp", "template_a4z3vmf", form.current, {
          publicKey: "0p6XOqdGf7HCcGNAj",
        })
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            setLoading(false);
            alert("Your Email has been Sent Successfully");
            console.log("User ==>", { data });
            setData({
              firstName: '',
              lastName: '',
              email: '',
              message: '',
            });
          },
          (error) => {
            console.error("Email sending failed:", error);
            setLoading(false);
          }
        )
        .finally(() => {
          setLoading(false);
        });
    }
  }
  return (
    <div>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-500 backdrop-filter backdrop-blur-sm z-50">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <img
            src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
            alt="loader"
            className="rounded-full h-28 w-28"
          />
        </div>
      )}
      <section id="shopify-section-template--14818935111725__1651641292614318a8" class="shopify-section spaced-section">
        <div class="page-width">
          <div class="contact-us contact-us-form">
            <div class="grid">
              <div class="contact-form-wrapper grid__item">
                <h2 class="h3">Contact Us:</h2>
                <form method="post" onSubmit={sendMail} ref={form} id="ContactForm" accept-charset="UTF-8" class="contact-form">
                  <input type="hidden" name="form_type" value="contact" /><input type="hidden" name="utf8" value="✓" /><div class="contact__fields">
                    <div class="cfield">
                      <label class="form__label cfield__label" for="ContactForm-fname">First Name</label>
                      <input class="field__input" required autocomplete="firstName" type="text" id="ContactForm-fname" name="firstName" value={data.firstName} onChange={handleChange} placeholder="First Name" />
                    </div>
                    <div class="cfield">
                      <label class="form__label cfield__label" for="ContactForm-lname">Last Name</label>
                      <input class="field__input" required autocomplete="lastName" type="text" id="ContactForm-lname" name="lastName" value={data.lastName} onChange={handleChange} placeholder="Last Name" />
                    </div>
                    <div class="cfield field--with-error">
                      <label class="form__label cfield__label" for="ContactForm-email">Email Address <span aria-hidden="true">*</span></label>
                      <input autocomplete="email" required type="email" id="ContactForm-email" class="field__input" name="email" spellcheck="false" autocapitalize="off" value={data.email} onChange={handleChange} aria-required="true" placeholder="Email" /></div>
                  </div>
                  <div class="cfield">
                    <label class="form__label cfield__label" for="ContactForm-body">Message</label>
                    <textarea rows="1" id="ContactForm-body" required class="text-area field__input" name="message" value={data.message} onChange={handleChange} placeholder="Comment"></textarea>
                  </div>
                  <div class="contact__button right">
                    <button type="submit" class="button">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
              <div class="contact-info">
                <h2 class="h3">Leave us a message</h2>
                <div class="contact-details">
                  <p>We'll reply back to you shortly </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact