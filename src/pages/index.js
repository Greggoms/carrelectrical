import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import Hero from "../components/Hero"
import Services from "../components/Services"
import { IndexPageContainer } from "../css"

const IndexPage = () => {
  return (
    <>
      <GatsbySeo
        title="Home | Carr Electrical"
        description="Solve your electrical problems now!"
      />
      <IndexPageContainer>
        <Hero />
        <Services />

        <h2>Testimonials</h2>
        <p>
          Why choose Carr Electrical Systems? See what several of our satisfied
          clients that had the same question have to say!
        </p>
        <h2>...Map and contact info here...</h2>
      </IndexPageContainer>
    </>
  )
}

export default IndexPage
