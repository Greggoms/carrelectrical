import React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import Layout from "./src/components/Layout"
import { theme } from "./src/themes/theme"

export const wrapRootElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway:200,400,700&display=swap"
        />
        <script
          src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
          nonce="{NONCE}"
          async
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script>
      </Helmet>
      <Layout {...props}>{element}</Layout>
      <ToastContainer newestOnTop={true} />
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
    font-family: "Raleway", sans-serif;

    /*
    Not sure if this min-height is needed.
    I'm pretty sure it's messing with jumpy navigation
    on mobile...  
    */
    /* min-height: 100vh; */
    background: ${props => props.theme.grayscale.dark3}
  }

   #gatsby-focus-wrapper {
    height: 100%;
  }

.Toastify__toast-container {
  width: 100% !important;
  max-width: 700px;
  
  .Toastify__toast {
    background: ${theme.colors.colorDark};
    color: ${theme.grayscale.light1};
    overflow-y: scroll;
    
    @media ${theme.breakpoints.tablet} {
      overflow: hidden;

    }
  }
  
  .Toastify__toast-icon {
    align-self: flex-start;
    margin-top: 4px;
  }
  
  .Toastify__close-button {
      color: ${theme.grayscale.light1};
      svg {
        width: 30px;
        height: 30px;
      }
  }

  .fake-email {
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
      text-align: center;
      font-size: 10pt;
      margin-top: 15px;
    }
  }
}

/* https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone */
/* lortschi answer */
@supports (-webkit-overflow-scrolling: touch) {
  input, textarea {
    font-size: 16px;
  }
}
`
