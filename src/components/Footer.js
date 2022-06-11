import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"

import { FooterContainer } from "../css"

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        <div>
          <p>Carr Electrical © {new Date().getFullYear()}</p>
          <span>
            Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a> by{" "}
            <a href="https://github.com/Greggoms">Greg Burton</a>
          </span>
        </div>
        <a href="https://www.facebook.com/CA.EL.SY/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </div>
    </FooterContainer>
  )
}

export default Footer
