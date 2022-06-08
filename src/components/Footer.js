import React from "react"
import { FooterContainer } from "../css"

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        Carr Electrical © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </FooterContainer>
  )
}
