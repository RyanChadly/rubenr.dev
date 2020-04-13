import React from "react"

import Header from "../Header"
import Footer from "../Footer"
import MobileNav from "../MobileNav"

import "font-awesome/css/font-awesome.min.css"
import "../../styles/spectre.scss"
import "../../styles/theme.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <div id="page-wrapper">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
        <MobileNav />
      </>
    )
  }
}

export default Layout
