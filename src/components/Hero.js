import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Button from "./Button"
import { HeroContainer } from "../css"

const Hero = () => {
  return (
    <HeroContainer>
      <StaticImage src="../images/hero.jpg" alt="Carr Electrical" />
      {/* <h1>Wave your electrical problems goodbye</h1> */}
      <Button link="/contact" text="Get Quote!" />
    </HeroContainer>
  )
}

export default Hero
