import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"

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
        <Reviews />
        {/* 
        to avoid making the parent display: flex;
        and prevents a component creation
        */}
        <div className="lower-cta">
          <h2>Don't wait for too late!</h2>
          <Button link="/contact" text="Request Free Quote" />
        </div>
      </IndexPageContainer>
    </>
  )
}

export default IndexPage
