import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink";


const Navigation = () => {
  return (
    <div className="uk-navbar-container">
      <nav className="uk-navbar">
        <ul className="uk-navbar-nav">
          <li className="nav__item">
            <Link fade to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link fade  to="/about">About</Link>
          </li>
          <li className="nav__item">
            <Link fade  to="/articles">Articles</Link>
          </li>
        </ul>
        <ul className="uk-navbar-nav">
        <li className="">
          <Link>Logo</Link>
        </li>
        </ul>
        
      </nav>
    </div>
  )
}

export default Navigation
