//////////////////////////
// Not currently in use //
//////////////////////////

import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { StaticImage } from "gatsby-plugin-image"
import { ServicesPageContainer } from "../css"

const ServicesPage = () => {
  const services = [
    {
      text: "Electrical set up and rewiring",
      image: <StaticImage src="../images/service-1.jpg" alt="" />,
    },
    {
      text: "Electrical panel installation, upgrading, and replacement",
      image: <StaticImage src="../images/service-2.jpg" alt="" />,
    },
    {
      text: "Whole house surge protection",
      image: <StaticImage src="../images/service-3.jpg" alt="" />,
    },
    {
      text: "Outlet installation and repair",
      image: <StaticImage src="../images/service-4.jpg" alt="" />,
    },
    {
      text: "Ceiling fan installation and repair",
      image: <StaticImage src="../images/service-5.jpg" alt="" />,
    },
    {
      text: "All lighting requirements – fixture installation, replacement, and repair",
      image: <StaticImage src="../images/service-6.jpg" alt="" />,
    },
    {
      text: "Smoke and carbon monoxide detector installations",
      image: <StaticImage src="../images/service-7.jpg" alt="" />,
    },
    {
      text: "Exhaust fan installations",
      image: <StaticImage src="../images/service-8.jpg" alt="" />,
    },
    {
      text: "Pool and hot tub wiring",
      image: <StaticImage src="../images/service-9.jpg" alt="" />,
    },
    {
      text: "Electrical safety inspections",
      image: <StaticImage src="../images/service-10.jpg" alt="" />,
    },
  ]
  return (
    <>
      <GatsbySeo
        title="Services | Carr Electrical"
        description="See what I can do for you."
      />
      <ServicesPageContainer>
        <h1>Our Services</h1>
        <p>
          We provide free estimates for a full line of services for any size
          commercial and residential jobs. Ask how we can help utilize funding
          for energy conservation that could cover all your installation costs!
        </p>
        <ul>
          {services.map(service => (
            <li key={service.text}>
              <p>{service.text}</p>
              {service.image}
            </li>
          ))}
        </ul>
      </ServicesPageContainer>
    </>
  )
}

export default ServicesPage
