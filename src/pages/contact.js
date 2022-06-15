import React, { useEffect } from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import ContactForm from "../components/ContactForm"
import { ContactPageContainer } from "../css"

const ContactPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [])
  return (
    <ContactPageContainer>
      <GatsbySeo
        title="Contact | Carr Electrical"
        description="Get a free quote for your project now!"
      />
      <div className="content-padding">
        <div className="company-info">
          <div>
            <h3>Carr Electrical Systems</h3>
            <p>
              PO Box 982 <br />
              Bryant, AR 72089
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <a href="mailto:robc@ces-ar.us">robc@ces-ar.us</a>
            <a href="tel: 5016725051">(501) 672-5051</a>
          </div>
        </div>
      </div>
      <div className="form-container">
        <div className="form-content">
          <h2>Send us an email</h2>
          <ContactForm />
        </div>
      </div>
    </ContactPageContainer>
  )
}

export default ContactPage
