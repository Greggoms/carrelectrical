import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { StaticImage } from "gatsby-plugin-image"

import Services from "../components/Services"
import Reviews from "../components/Reviews"
import Button from "../components/Button"
import { IndexPageContainer } from "../css"

const IndexPage = () => {
  return (
    <>
      <GatsbySeo
        title="Home | Carr Electrical"
        description="Solve your electrical problems now!"
      />
      <IndexPageContainer>
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
            lighting options to our customers. This is a rebate program that can
            pay up to 100% of the installation costs for the customer.
          </p>
        </div>
        <Reviews />
        {/* 
        to avoid making the parent display: flex;
        and prevents a component creation
        */}
        <div className="lower-cta">
          <h2>Don't wait for too late!</h2>
          <Button link="/contact" text="Contact us today!" />
        </div>
      </IndexPageContainer>
    </>
  )
}

export default IndexPage
