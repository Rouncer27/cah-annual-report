import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "styled-components"

import Opening from "../components/Opening"
import KeepingScore from "../components/KeepingScore"
import GoingDistance from "../components/GoingDistance"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="CAH Home Page" />
      <Opening />
      <KeepingScore />
      <GoingDistance />
      <SpaceSection id="advocacy">
        <h1>Advocacy in Full Swing</h1>
      </SpaceSection>
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
