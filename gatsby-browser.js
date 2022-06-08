import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import Layout from "./src/components/Layout"
import { theme } from "./src/themes/theme"

export const wrapRootElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
      <ToastContainer newestOnTop={true} containerId="notifyToast" />
    </ThemeProvider>
  )
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    font-family: ${theme.fonts.main};
    font-display: fallback; /* <- this can be added to each @font-face definition */
    min-height: 100vh;

    background: linear-gradient(to right bottom, #F25C05, 
      #F2B705,
      #049DBF 100%);
  }

   #gatsby-focus-wrapper {
    height: 100%;
  }

.Toastify__toast-container {
  /* width: max-content !important; */
  max-width: 700px;
  
  .Toastify__toast {
    background: ${theme.colors.colorDark};
    color: ${theme.colors.text};
  }
  
  .Toastify__toast-icon {
    align-self: flex-start;
    margin-top: 4px;
  }
  
  .Toastify__close-button {
      color: ${theme.colors.text};
      svg {
        width: 30px;
        height: 30px;
      }
  }
}
`
