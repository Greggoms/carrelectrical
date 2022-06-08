import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Nav } from "./Nav"
import { HeaderContainer } from "../css"

export const Header = () => (
  <HeaderContainer>
    <div className="header-content">
      <Link to="/">
        <StaticImage
          src="../images/favicon.png"
          width={50}
          height={50}
          alt="Carr Electrical"
        />
      </Link>
      <Nav />
    </div>
  </HeaderContainer>
)
