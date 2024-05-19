import React from 'react'
import "../../assets/css/section-rich-text.css"
import "../../assets/css/component-rte.css"
import Contact from '../company/Contact'
import ContactSechdule from './ContactSechdule'
import LatestBlog from '../home/LatestBlog'
const ContactHeading = () => {
  return (
    <>
        <section id="shopify-section-template--14480007397421__5550441d-21b2-4b50-b7bc-34d6501738ab" class="shopify-section spaced-section spaced-section--full-width">
<div class="">
  <div class="rich-text color-background-1 gradient rich-text--full-width">
    <div class="rich-text__blocks">
    <h1 class="h3"></h1>
    <div class="rich-text__text rte"><p>If you have any questions, comments, or feedback, please do not hesitate to contact us. We're committed to providing you with the best possible service and will respond to your inquiry as soon as possible.</p></div></div>
  </div>
</div>
</section>
<br></br>
<br></br>

<Contact/><br></br>
<ContactSechdule/>
<LatestBlog/>
    </>
  )
}

export default ContactHeading