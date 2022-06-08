import { Link } from "gatsby"
import React from "react"

export const Nav = () => {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link
        to="/about"
        activeStyle={{ color: "#B9E1FF", textDecoration: "none" }}
      >
        About
      </Link>
    </nav>
  )
}
