import React from "react"
import { navigate } from "gatsby"
import { theme } from "../themes/theme"

const Button = props => {
  const styles = {
    border: "none",
    padding: "15px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: `1px 1px 5px ${theme.grayscale.dark2}`,
  }
  return (
    <button
      style={styles}
      className={props.className}
      onClick={() => navigate(props.link)}
    >
      {props.text}
    </button>
  )
}

export default Button
