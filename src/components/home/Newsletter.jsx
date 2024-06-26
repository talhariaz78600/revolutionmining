"use client"
import React from 'react';
import { useState } from 'react';
import "../../assets/css/component-newsletter.css";
import { toast } from 'react-toastify';
import axios from 'axios';
const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [loader, setLoader] = useState(false);
    const suscribe = async (e) => {
        e.preventDefault();
        try {
            if (email !== "") {
                setLoader(true);

                const response = await axios.post(`https://revolutionbackend.vercel.app/api/suscriber/createSuscribe`, {
                    email
                })
                if (response.status === 200) {
                    toast.success("Thank you for subscribing! 🎉 Check your inbox for our welcome email.", {

                        autoClose: 5000,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setEmail("");
                    setLoader(false);
                }
            }
        } catch (error) {
            setLoader(false);
            toast.error(error.message)
        }

    }
    return (
        <div>
            <section id="shopify-section-template--14480007561261__164429854417234f57" className="shopify-section spaced-section spaced-section--full-width">
                <div className="newsletter ">
                    <div className="color-background-1 gradient grid grid--1-col grid--2-col-tablet">
                        <div className="grid__item">
                            <h3 className="h4">Subscribe to our Newsletter</h3>

                            <div className="newsletter__subheading1 rte"><p>Stay up-to-date with authentic articles, research, news, and exclusive offers.  </p></div>
                        </div>
                        <div className="grid__item">
                            <form onSubmit={suscribe} id="contact_form" acceptCharset="UTF-8" className="newsletter-form"><input type="hidden" name="form_type" /><input type="hidden" name="utf8" />
                                <input type="hidden" name="contact[tags]" />
                                <div className="newsletter-form__field-wrapper">
                                    <div className="field">
                                        <input id="NewsletterForm--template--14480007561261__164429854417234f57" type="email" name="email" value={email} className="field__input text-black" onChange={(e) => {
                                            setEmail(e.target.value);
                                        }} aria-required="true" autoCorrect="off" autoCapitalize="off" autoComplete="email" placeholder="Email address" required="" />
                                        <label className="field__label" htmlFor="NewsletterForm--template--14480007561261__164429854417234f57">
                                            Email address
                                        </label>
                                        <button type="submit" className="button button--primary" name="commit" id="Subscribe" aria-label="Subscribe">      {loader ? <div
                                            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                            role="status">
                                            <span
                                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                            >Loading...</span
                                            >
                                        </div> : "Suscribe"}</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>


            </section>

        </div>
    );
}

export default Newsletter;
