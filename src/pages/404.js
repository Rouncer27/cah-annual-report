import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "styled-components"
import { B1Black, Btn1One, H1Dark, standardWrapper } from "../styles/helpers"
import { Link } from "gatsby"

const NotFoundPage = props => {
  const location = props.location
  return (
    <Layout location={location}>
      <Seo title="404: Not Found" />
      <StyledSection>
        <div className="wrapper">
          <div className="content">
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Link to="/">Home</Link>
          </div>
        </div>
      </StyledSection>
    </Layout>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${standardWrapper};
    align-items: center;
    min-height: 50vh;
  }

  .content {
    text-align: center;

    h1 {
      ${H1Dark};
    }

    p {
      ${B1Black};
    }

    a {
      ${Btn1One};
    }
  }
`

export default NotFoundPage
