import React from "react"
import { FooterContainer } from "../css"

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        <div>
          Carr Electrical © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
        <div>facebook link...</div>
      </div>
    </FooterContainer>
  )
}

export default Footer
