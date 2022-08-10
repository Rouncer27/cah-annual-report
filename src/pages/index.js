import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Opening from "../components/Opening"
import KeepingScore from "../components/KeepingScore"
import GoingDistance from "../components/GoingDistance"
import Advocacy from "../components/Advocacy"
import PathForward from "../components/PathForward"

import Testimonial from "../components/Testimonial"

const IndexPage = props => {
  const location = props.location
  return (
    <Layout location={location}>
      <Seo title="CAH Home Page" />
      <Opening />
      <KeepingScore />
      <GoingDistance />
      <Testimonial />
      <Advocacy />
      <PathForward />
    </Layout>
  )
}

export default IndexPage
