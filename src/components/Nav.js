import { Link } from "gatsby"
import React from "react"

export const Nav = () => {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link
        to="/contact"
        activeStyle={{ color: "#B9E1FF", textDecoration: "none" }}
      >
        Get a quote
      </Link>
      <Link
        to="/services"
        activeStyle={{ color: "#B9E1FF", textDecoration: "none" }}
      >
        Services
      </Link>
      <Link
        to="/about"
        activeStyle={{ color: "#B9E1FF", textDecoration: "none" }}
      >
        About
      </Link>
    </nav>
  )
}
