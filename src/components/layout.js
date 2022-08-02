import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import Header from "./Header"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"

const Layout = ({ children }) => {
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
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()} &middot; Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
