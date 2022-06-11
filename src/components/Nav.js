import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link
        to="/contact"
        activeStyle={{ color: "#B9E1FF", textDecoration: "none" }}
        style={{ display: "none" }}
      >
        Get a quote
      </Link>
      <Link
        to="/team"
        activeStyle={{ color: "#B9E1FF", textDecoration: "none" }}
      >
        Team
      </Link>
      <Link
        to="/about"
        activeStyle={{ color: "#B9E1FF", textDecoration: "none" }}
      >
        About
      </Link>

      {/* Using a component instead of a page */}
      {/* <Link
          to="/services"
          activeStyle={{ color: "#B9E1FF", textDecoration: "none" }}
        >
          Services
        </Link> */}
    </nav>
  )
}

export default Nav
