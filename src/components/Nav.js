import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Transition, config, animated } from "@react-spring/web"
import { Link } from "gatsby"
import { NavContainer } from "../css"

const Nav = () => {
  const [offset, setOffset] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener("scroll", onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    offset >= 55 ? setShow(true) : setShow(false)
  }, [offset])

  return (
    <NavContainer>
      <div className="nav-content">
        <Transition
          items={show}
          from={{ transform: "translateY(-70%)", opacity: 0 }}
          enter={{ transform: "translateY(0)", opacity: 1, flex: 1 }}
          leave={{ transform: "translateY(-70%)", opacity: 0, flex: 0 }}
          reset={!show && true}
          reverse={show}
          config={config.gentle}
        >
          {(styles, item) =>
            item && (
              <animated.div style={styles}>
                <Link to="/">
                  <StaticImage
                    src="../images/favicon.png"
                    alt="Carr Electical Logo"
                    width={40}
                  />
                </Link>
              </animated.div>
            )
          }
        </Transition>
        <Link
          to="/contact"
          activeStyle={{ color: "#B9E1FF", textDecoration: "none" }}
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
      </div>
    </NavContainer>
  )
}

export default Nav
