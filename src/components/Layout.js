import React from "react"
import { Location } from "@reach/router"
import Header from "./Header"
import Nav from "./Nav"
import Hero from "./Hero"
import Footer from "./Footer"
import { LayoutContainer } from "../css"

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Nav />

      {/* 
      Below is what's needed to conditionally render a component 
      based on page url. Thanks @reach/router

      https://stackoverflow.com/questions/63818282/how-do-i-conditionally-render-a-component-in-gatsby-based-on-specific-page 
      
      apena answer 
      */}
      <Location>
        {({ location }) => {
          if (location.pathname === "/") return <Hero />
        }}
      </Location>

      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
