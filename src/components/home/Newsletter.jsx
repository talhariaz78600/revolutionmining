import React from 'react';
import "../../assets/css/component-newsletter.css"
const Newsletter = () => {
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
                            <form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8" className="newsletter-form"><input type="hidden" name="form_type" value="customer" /><input type="hidden" name="utf8" value="✓" />
                                <input type="hidden" name="contact[tags]" value="newsletter" />
                                <div className="newsletter-form__field-wrapper">
                                    <div className="field">
                                        <input id="NewsletterForm--template--14480007561261__164429854417234f57" type="email" name="contact[email]" className="field__input" value="" aria-required="true" autocorrect="off" autocapitalize="off" autocomplete="email" placeholder="Email address" required="" />
                                        <label className="field__label" for="NewsletterForm--template--14480007561261__164429854417234f57">
                                            Email address
                                        </label>
                                        <button type="submit" className="button button--primary" name="commit" id="Subscribe" aria-label="Subscribe">Subscribe</button>
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
