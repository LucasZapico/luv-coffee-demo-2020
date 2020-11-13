import PropTypes from "prop-types"
import Link from "gatsby-plugin-transition-link/AniLink"

import React, { useState } from "react"
import { useSpring, animated as a } from "react-spring"
import { useCurrentWidth } from "../hooks"
import { IoIosMenu, IoIosClose, IoIosCart } from "react-icons/io"
import Navigation from "./nav"
import Img from "gatsby-image"

const Header = ({ siteTitle, img }) => {
  const [showMenu, setShowMenu] = useState(false)
  const width = useCurrentWidth()
  const props = useSpring({
    width: showMenu === false ? "0%" : "100%",
    config: { duration: 1000 },
  })

  return (
    <header className="">
      <div
        className="bg__tri grow z-3 fixed br-100 w3 h3  top-1 flex justify-center items-center ma2 "
        onClick={() => setShowMenu(!showMenu)}
      >
        <a>Menu</a>
      </div>
      <a
        className="bg__pri grow z-3 fixed br-100 w3 h3  top-1 right-1 flex justify-center items-center ma2 "
        onClick={() => setShowMenu(!showMenu)}
      >
        <div>
          <IoIosCart className="f3" />
        </div>
      </a>

      <a.div className="bg__quad fixed overflow-hidden z-2" style={props}>
        <div className=" relative" style={{ width: "100vw" }}>
          <nav className="dt w-100  vh-100 left-0 top-0 center bg__quad flex flex-wrap ">
            <div className="w-50-l w-100 mt6 pa3">
              <Link
                swipe
                direction="right"
                to="/"
                className="f2 tc script db mv2"
              >
                Home
              </Link>
              <Link
                swipe
                direction="left"
                to="/shop"
                className="f2 tc script db mv2"
              >
                Shop
              </Link>
              <a className="f2 tc script db">Our Story</a>
              <hr className="bg__pri" />
              <div className="tc mv5">
                <Link
                  swipe
                  direction="left"
                  to="/about"
                  className=" f2 head db mv2"
                >
                  About Demo
                </Link>
                <Link
                  swipe
                  direction="left"
                  to="/style-guide"
                  className=" f2 head db mv2"
                >
                  Style Guide
                </Link>
              </div>
            </div>
            <div className="w-50-l w-100  pa3 ">
              <Img
                fluid={img.childImageSharp.fluid}
                objectFit="cover"
                className="absolute bottom--2 right-0"
              />
            </div>
          </nav>
        </div>
      </a.div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
