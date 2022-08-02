import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import MobileNav from "./MobileNav/MobileNav"
import bgDots from "../images/top-dots.png"
import { B1Black, colors, H1Dark, H2White, Btn1One } from "../styles/helpers"

const Header = () => {
  const data = useStaticQuery(graphql`
    query mainImageQuery {
      file(relativePath: { eq: "opening-image.png" }) {
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  const image = getImage(data?.file?.childrenImageSharp[0]?.gatsbyImageData)

  return (
    <StyledHeader>
      <MobileNav />
      <div className="head-wrap">
        <div className="head-left">
          <div className="main-logo">
            <StaticImage
              src="../images/main-logo.png"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
          <div className="head-content">
            <h2>Change the Game</h2>
            <h3>Annual Report 2021 / 2022</h3>
            <div>
              <div></div>
              <div>
                <p>
                  Keep scrolling to read our digital report or download our full
                  report.
                </p>
                <a href="#">Download Full Report</a>
              </div>
            </div>
          </div>
        </div>
        <div className="head-right">
          <div className="main-image">
            <GatsbyImage
              image={image}
              alt="Calgary Adative Hub"
              layout="fixed"
            />
          </div>
        </div>
      </div>
      <div className="bg-dots" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: relative;

  .head-wrap {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    z-index: 10;
  }

  .head-left {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    .main-logo {
      max-width: 50rem;
      padding: 4rem;
    }

    .head-content {
      width: 100%;
      padding: 2rem;
      text-align: center;

      @media (min-width: 768px) {
        padding: 0;
        text-align: right;
      }

      h2 {
        ${H1Dark};
        @media (min-width: 768px) {
          padding-left: 4rem;
        }
      }

      h3 {
        ${H2White};
        padding: 0.5rem 0;
        background-color: ${colors.colorTertiary};

        @media (min-width: 768px) {
          padding: 0.5rem 4rem;
        }
      }

      p {
        ${B1Black};
        @media (min-width: 768px) {
          padding-left: 4rem;
        }
      }

      a {
        ${Btn1One};
      }
    }
  }

  .head-right {
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    .main-image {
      @media (min-width: 768px) {
        position: absolute;
        top: -10rem;
        right: -15rem;
        width: 130%;
      }

      @media (min-width: 1150px) {
        width: 120%;
      }

      @media (min-width: 1350px) {
        width: 120%;
        top: -15rem;
        right: -20rem;
      }

      @media (min-width: 1550px) {
        width: 120%;
        max-width: 110rem;
        top: -15rem;
        right: -30rem;
      }
    }
  }

  .bg-dots {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20rem;
    background-image: url(${bgDots});
    background-position: center;
    background-size: cover;
    z-index: -1;
  }
`

export default Header
