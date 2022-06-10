import React from "react"
import { navigate } from "gatsby"

const Button = props => {
  const styles = {
    border: "none",
    padding: "15px",
  }
  return (
    <button style={styles} onClick={() => navigate(props.link)}>
      {props.text}
    </button>
  )
}

export default Button
