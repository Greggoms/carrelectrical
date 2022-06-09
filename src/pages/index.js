import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { StaticImage } from "gatsby-plugin-image"
import { IndexPageContainer } from "../css"

const IndexPage = () => (
  <IndexPageContainer>
    <GatsbySeo
      title="Home | Carr Electrical"
      description="Solve your electrical problems now!"
    />
    <div className="under-construction">
      <StaticImage
        src="../images/logo.png"
        loading="eager"
        alt="Carr Electrical Logo"
      />
      <div className="under-construction__heading">
        <h1>Welcome</h1>
        <p>This website is under construction!</p>
      </div>
    </div>
  </IndexPageContainer>
)

export default IndexPage
