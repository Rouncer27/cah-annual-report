import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "styled-components"
import { B1Black, H1Dark, H2DarkTeal } from "../styles/helpers"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="CAH Home Page" />
      <SectionStyled>
        <h1>CAH Annual Return</h1>
        <h2>CAH Annual Return</h2>
        <p>CAH Annual Return</p>
      </SectionStyled>
    </Layout>
  )
}

const SectionStyled = styled.section`
  h1 {
    ${H1Dark};
  }

  h2 {
    ${H2DarkTeal};
  }

  p {
    ${B1Black}
  }
`

export default IndexPage
