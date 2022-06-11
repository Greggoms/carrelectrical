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
        <StaticImage src="../images/commercial.jpg" alt="Commercial Services" />
        <div className="info">
          <h2>Commercial Services</h2>
          <ul>
            {serviceList.commercial.map(service => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="service residential">
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
        <div className="overlay"></div>
      </div>

      <div className="entergy">
        <h2>Energy Conservation</h2>
        <span>With</span>
        <StaticImage src="../images/entergy.png" alt="Partnered with Entergy" />
        <p>
          We have partnered with Entergy Arkansas to offer energy saving
          lighting options to our customers. This is a rebate program that can
          pay up to 100% of the installation costs for the customer.
        </p>
      </div>
    </ServicesContainer>
  )
}

export default Services
