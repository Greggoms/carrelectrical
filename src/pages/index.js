import React, { useEffect } from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { StaticImage } from "gatsby-plugin-image"

import Services from "../components/Services"
import Reviews from "../components/Reviews"
import { IndexPageContainer } from "../css"
import ContactForm from "../components/ContactForm"

const IndexPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [])
  return (
    <>
      <GatsbySeo
        title="Home | Carr Electrical"
        description="Solve your electrical problems now!"
      />
      <IndexPageContainer>
        <div className="content-padding">
          <Services />

          <div className="entergy">
            <h2>Energy Conservation</h2>
            <span>With</span>
            <StaticImage
              src="../images/entergy.png"
              alt="Partnered with Entergy"
            />
            <p>
              We have partnered with Entergy Arkansas to offer energy saving
              lighting options to our customers. This is a rebate program that
              can pay up to 100% of the installation costs for the customer.
            </p>
          </div>

          <Reviews />
        </div>

        <div className="form-container">
          <div className="form-content">
            <h2>Don't wait for too late</h2>
            <p>Contact us today!</p>
            <ContactForm />
          </div>
        </div>
      </IndexPageContainer>
    </>
  )
}

export default IndexPage
