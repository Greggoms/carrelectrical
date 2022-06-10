import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "./Nav"
import { HeaderContainer } from "../css"

const Header = () => (
  <HeaderContainer>
    <div className="header-content">
      <Link to="/">
        <StaticImage
          src="../images/logo.png"
          loading="eager"
          width={400}
          alt="Carr Electrical Logo"
        />
      </Link>
      <Nav />
    </div>
  </HeaderContainer>
)

export default Header
