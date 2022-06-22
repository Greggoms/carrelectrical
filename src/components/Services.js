import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ServicesContainer } from "../css"

const Services = () => {
  const serviceList = {
    commercial: [
      "Design & build to suit client’s needs",
      "Ground up plan specified projects",
      "Repair and maintenance",
      "Equipment installation",
      "Temporary emergency power",
    ],
    residential: [
      "Remodels",
      "Home repairs",
      "Automatic standby generators",
      "Storm damage repairs",
    ],
  }
  return (
    <ServicesContainer>
      <div className="service commercial">
        <div className="under-path" />
        <div className="path" />
        <StaticImage src="../images/commercial.jpg" alt="Commercial Services" />
        <div className="info">
          <h2>Commercial Services</h2>
          <ul>
            {serviceList.commercial.map(service => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="service residential">
        <div className="under-path-reverse" />
        <div className="path-reverse" />
        <StaticImage
          src="../images/residential.jpg"
          alt="Residential Services"
        />
        <div className="info">
          <h2>Residential Services</h2>
          <ul>
            {serviceList.residential.map(service => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </ServicesContainer>
  )
}

export default Services
