import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  return (
    <>
      <GatsbySeo
        title="Contact | Carr Electrical"
        description="Get a free quote for your project now!"
      />
      <ContactForm />
    </>
  )
}

export default ContactPage
