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
      <Seo
        title="Calgary Adapted Hub - Annual Report - Change the Game"
        description="Calgary Adapted Hub - Annual Report.Calgary Adapted Hub believes no one should have to sit on the sidelines. We’re working collectively to remove barriers to participation in sport programming at the community level. And we’re paving the way for organizations across the country to follow."
      />
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
