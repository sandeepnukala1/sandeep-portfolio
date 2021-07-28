import React from "react"
import { Link } from "gatsby"
import "../style.css"

const Layout = props => {
  return (
    <>
      <header>
        <nav className="nav">
          <Link to="/"><h1 className="nav__logo">Header</h1></Link>
          <div className="nav__links">
            <Link to="/blog">BLOG</Link>
            <Link to="/projects">Projects</Link>
            <a href="">Github</a>
            <a href="">LinkedIN</a>
          </div>
        </nav>
      </header>
      <main className="main">{props.children}</main>
      <footer className="footer">
        <h1>Footer</h1>
      </footer>
    </>
  )
}

export default Layout
