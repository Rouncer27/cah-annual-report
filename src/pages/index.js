import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "styled-components"

import Opening from "../components/Opening"
import KeepingScore from "../components/KeepingScore"
import GoingDistance from "../components/GoingDistance"
import Advocacy from "../components/Advocacy"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="CAH Home Page" />
      <Opening />
      <KeepingScore />
      <GoingDistance />
      <Advocacy />
      <SpaceSection id="path-forward">
        <h1>The Path Forward</h1>
      </SpaceSection>
    </Layout>
  )
}

const SpaceSection = styled.div`
  min-height: 500px;
`

export default IndexPage
