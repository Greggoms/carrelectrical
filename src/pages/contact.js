import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import ContactForm from "../components/ContactForm"
import { ContactPageContainer } from "../css"

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <GatsbySeo
        title="Contact | Carr Electrical"
        description="Get a free quote for your project now!"
      />
      <div className="company-info">
        <h3>Carr Electrical Systems</h3>
        <p>
          PO Box 982 <br />
          Bryant, AR 72089
        </p>
        <a href="mailto:robc@ces-ar.us">robc@ces-ar.us</a>
        <a href="tel: 5016725051">(501) 672-5051</a>
      </div>

      <ContactForm />
    </ContactPageContainer>
  )
}

export default ContactPage
