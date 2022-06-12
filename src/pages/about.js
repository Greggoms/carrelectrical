import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { AboutPageContainer } from "../css"

const AboutPage = () => {
  return (
    <>
      <GatsbySeo
        title="About | Carr Electrical"
        description="Learn more about my services."
      />
      <AboutPageContainer>
        <div>
          <h1>Who We Are</h1>
          <p>
            We are a small company that is able to provide solutions for all
            your electrical installations and service needs (commercial &
            residential). Fully licensed, bonded, and insured.
          </p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide our customers with a quality product at a
            fair price that exceeds what we would expect in our own lives. We
            believe that attention to detail, combined with the devotion we put
            into each project, will create lasting relationships with our
            customers.
          </p>
          <br />
          <p>
            We dedicate ourselves to providing our customers with quality
            craftsmanship at an affordable price. We strive to provide the same
            level of expertise and professionalism that might be found with
            larger companies but at a smaller, more personal level. When you
            call us you will not speak to an answering service or a secretary
            that has limited knowledge of the field, you will be speaking to a
            member of our team who is a licensed journeyman/master electrician.
            With a background in multiple aspects of the construction industry
            we have the knowledge to ensure that your needs as a customer are
            met fully. We will not leave a job unfinished or leave a mess for
            the customer to clean up.
          </p>
        </div>
      </AboutPageContainer>
    </>
  )
}

export default AboutPage
