import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header
          homepage={props.location.pathname === "/"}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
        <main>{props.children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
