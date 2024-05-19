import React from 'react'
import "../../assets/css/section-contact-us-form.css"
const Contact = () => {
  return (
    <div>
        <section id="shopify-section-template--14818935111725__1651641292614318a8" class="shopify-section spaced-section">
<div class="page-width">
  <div class="contact-us contact-us-form">
    <div class="grid">
      <div class="contact-form-wrapper grid__item">
        <h2 class="h3">Contact Us:</h2>
        <form method="post" action="/contact#ContactForm" id="ContactForm" accept-charset="UTF-8" class="contact-form">
        <input type="hidden" name="form_type" value="contact"/><input type="hidden" name="utf8" value="✓"/><div class="contact__fields">
            <div class="cfield">
              <label class="form__label cfield__label" for="ContactForm-fname">First Name</label>
              <input class="field__input" autocomplete="first_name" type="text" id="ContactForm-fname" name="contact[first_name]" value="" placeholder="First Name"/>
            </div>
            <div class="cfield">
              <label class="form__label cfield__label" for="ContactForm-lname">Last Name</label>
              <input class="field__input" autocomplete="last_name" type="text" id="ContactForm-lname" name="contact[last_name]" value="" placeholder="Last Name"/>
            </div>
            <div class="cfield field--with-error">
              <label class="form__label cfield__label" for="ContactForm-email">Email Address <span aria-hidden="true">*</span></label>
              <input autocomplete="email" type="email" id="ContactForm-email" class="field__input" name="contact[email]" spellcheck="false" autocapitalize="off" value="" aria-required="true" placeholder="Email"/></div>
          </div>
          <div class="cfield">
            <label class="form__label cfield__label" for="ContactForm-body">Message</label>
            <textarea rows="1" id="ContactForm-body" class="text-area field__input" name="contact[Comment]" placeholder="Comment"></textarea>
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