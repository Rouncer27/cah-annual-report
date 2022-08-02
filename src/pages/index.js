import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "styled-components"

import Opening from "../components/Opening"
import KeepingScore from "../components/KeepingScore"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="CAH Home Page" />
      <Opening />
      <KeepingScore />
      <SpaceSection id="going-the-distance">
        <h1>Going The distance</h1>
      </SpaceSection>
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
