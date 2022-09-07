import React, { useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import MobileNav from "./MobileNav/MobileNav"
import bgDots from "../images/top-dots.png"
import { B1Black, colors, H1Dark, H2White, Btn1One } from "../styles/helpers"

import pdfDownload from "../images/priorities/pdf-download-2.png"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Header = ({ homepage }) => {
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

  useEffect(() => {
    const waves = document.querySelector(".main-logo")
    const dots = document.querySelector(".bg-dots")
    const headerContent = document.querySelector(".head-content")

    if (homepage) {
      gsap.fromTo(
        waves,
        { autoAlpha: 0, x: -200, ease: "power2.out" },
        { autoAlpha: 1, x: 0, ease: "power2.out" }
      )

      gsap.fromTo(
        dots,
        { autoAlpha: 0, x: -500, ease: "power2.out", duration: 3 },
        { autoAlpha: 1, x: 0, ease: "power2.out", duration: 3 }
      )

      if (headerContent) {
        const h2Header = headerContent.querySelector("h2")
        const h3Header = headerContent.querySelector("h3")
        const pHeader = headerContent.querySelector(".linkbtn p")
        const linkHeader = headerContent.querySelector(".linkbtn__link")
        const pdfHeader = document.querySelector(".download__image")

        gsap.fromTo(
          h2Header,
          { autoAlpha: 0, y: -50, ease: "power2.out", duration: 1.5 },
          { autoAlpha: 1, y: 0, ease: "power2.out", duration: 1.5 }
        )

        gsap.fromTo(
          h3Header,
          { autoAlpha: 0, x: -100, ease: "power2.out", duration: 1 },
          { autoAlpha: 1, x: 0, ease: "power2.out", duration: 1 }
        )

        gsap.fromTo(
          pHeader,
          { autoAlpha: 0, y: 100, ease: "power2.out", duration: 1 },
          { autoAlpha: 1, y: 0, ease: "power2.out", duration: 1 }
        )

        gsap.fromTo(
          linkHeader,
          { autoAlpha: 0, x: 100, ease: "power2.out", duration: 1 },
          { autoAlpha: 1, x: 0, ease: "power2.out", duration: 1 }
        )

        gsap.fromTo(
          pdfHeader,
          { autoAlpha: 0, x: -200, ease: "power2.out", duration: 1 },
          { autoAlpha: 1, x: 0, ease: "power2.out", duration: 1 }
        )
      }
    }
  }, [])

  return (
    <StyledHeader id="header-intro">
      {homepage && <MobileNav />}
      <div className="head-wrap">
        <div className="head-left">
          <div className="main-logo">
            <Link to="/">
              <StaticImage
                src="../images/main-logo.png"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </Link>
          </div>
          {homepage && (
            <div className="head-content">
              <h2>Change the Game</h2>
              <h3>Annual Report 2021 / 2022</h3>
              <div className="head-content__wrapper">
                <div className="download">
                  <div className="download__image">
                    <img src={pdfDownload} alt="" />
                  </div>
                </div>
                <div className="linkbtn">
                  <p>
                    Keep scrolling to read our digital report or download our
                    full report.
                  </p>
                  <div className="linkbtn__link">
                    <a href="#">Download Full Report</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {homepage && (
          <div className="head-right">
            <div className="main-image">
              <GatsbyImage
                image={image}
                alt="Calgary Adative Hub"
                layout="fixed"
              />
            </div>
          </div>
        )}
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

      &__wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .download {
          width: 100%;

          @media (min-width: 768px) {
            width: 50%;
          }

          &__image {
            max-width: 20rem;
            margin-right: auto;
            margin-left: auto;

            @media (min-width: 768px) {
              margin-right: 0;
              margin-left: auto;
            }
          }
        }

        .linkbtn {
          width: 100%;

          @media (min-width: 768px) {
            width: 50%;
          }
        }
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
      display: none;

      @media (min-width: 768px) {
        display: block;
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
