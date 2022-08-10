import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, H2DarkTeal, medWrapper } from "../styles/helpers"

import david from "../images/devid-legg.png"
import carolyn from "../images/carolyn-emery.png"

import DavidLegg from "./DavidLegg"
import Carolyn from "./Carolyn"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(DrawSVGPlugin)

const Opening = () => {
  useEffect(() => {
    const david = document.querySelector(".david-sign .david")
    const l = document.querySelector(".david-sign .l")
    const egg = document.querySelector(".david-sign .egg")
    const stick = document.querySelector(".david-sign .stick")

    const carolyn = document.querySelector(".carolyn-svg .carolyn-svg-first")
    const emery = document.querySelector(".carolyn-svg .carolyn-svg-last")

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#david-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
          scrub: false,
        },
      })
      .add("start")
      .fromTo(
        david,
        { drawSVG: "100% 100%" },
        { duration: 1.5, drawSVG: "0% 100%", ease: "none" }
      )
      .fromTo(
        stick,
        { drawSVG: 0 },
        { duration: 0.25, drawSVG: "100%", ease: "none" }
      )
      .fromTo(
        l,
        { drawSVG: 0 },
        { duration: 1.25, drawSVG: "100%", ease: "none" },
        "+=0.5"
      )
      .fromTo(
        egg,
        { drawSVG: 0 },
        { duration: 1.25, drawSVG: "100%", ease: "none" }
      )
      .fromTo(
        carolyn,
        { drawSVG: 0 },
        { duration: 1, drawSVG: "100%", ease: "none" }
      )
      .fromTo(
        emery,
        { drawSVG: 0 },
        { duration: 1, drawSVG: "100%", ease: "none" }
      )
  }, [])

  const data = useStaticQuery(graphql`
    query openingImagesQuery {
      imgOne: file(relativePath: { eq: "opening-one.jpg" }) {
        childrenImageSharp {
          gatsbyImageData
        }
      }

      imgTwo: file(relativePath: { eq: "opening-two.jpg" }) {
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const imageOne = getImage(
    data?.imgOne?.childrenImageSharp[0]?.gatsbyImageData
  )
  const imageTwo = getImage(
    data?.imgTwo?.childrenImageSharp[0]?.gatsbyImageData
  )
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="images">
          <div className="image image-one">
            <GatsbyImage
              image={imageOne}
              alt="Calgary Adative Hub"
              layout="fixed"
            />
          </div>
          <div className="image image-two">
            <GatsbyImage
              image={imageTwo}
              alt="Calgary Adative Hub"
              layout="fixed"
            />
          </div>
        </div>
        <div className="content">
          <div className="title">
            <h2>
              Now, more than ever, everyone needs equitable, diverse, and
              inclusive access to physical activity.
            </h2>
          </div>
          <div className="opening-content">
            <p>
              As partners in participation, Calgary Adapted Hub has an important
              role to play in creating inclusive change, not just for our
              community, but for the whole country.
            </p>
            <p>
              We’ve been given an opportunity to return to sport in a
              sustainable way; to not only build sport and recreation back, but
              build it back better.
            </p>
            <p>
              It’s those of us on the ground that can do it. Our willingness to
              collaborate makes Calgary Adapted Hub uniquely positioned to
              enhance the development and delivery of adapted sport and
              recreation programming in the city of Calgary.
            </p>
            <p>
              Working alongside our collective partners, we will take careful
              and considerate steps to build a system in which everyone has the
              opportunity to play—today and everyday. Removing barriers to sport
              and recreation for Canada’s youth is a long game. But rest
              assured, when the bell rings, we’ll be ready. Sincerely,
            </p>
            <div className="signature">
              <div className="signature__images">
                <DavidLegg />
                <Carolyn />
                {/* <img src={david} alt="" />
                <img src={carolyn} alt="" /> */}
              </div>
              <p>Dr. David Legg & Dr. Carolyn Emery</p>
              <p>Co-Chairs, Calgary Adapted Hub powered by Jumpstart</p>
            </div>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin-top: 5rem;
  margin-bottom: 5rem;

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(33.333333% - 4rem);
      margin-right: 4rem;
    }

    .image {
      margin-bottom: 2rem;
      width: calc(50% - 0.5rem);

      @media (min-width: 768px) {
        width: calc(100%);
        margin-bottom: 2rem;
      }

      &.image-one {
        margin-right: 0.5rem;
      }

      &.image-two {
        margin-left: 0.5rem;
      }
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(66.666666% - 5rem);
      margin-left: 5rem;
    }

    .title {
      width: 100%;

      h2 {
        ${H2DarkTeal};
      }
    }

    .opening-content {
      width: 100%;

      p {
        ${B1Black};
      }
    }

    .signature {
      width: 100%;

      &__images {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        .david-sign {
          margin-right: 3rem;
        }

        .carolyn-svg {
          margin-left: 3rem;
        }
      }

      p {
        ${B1Black};
      }

      p:first-of-type {
        margin: 0;
        margin-top: 2.75rem;
        font-weight: bold;
      }
    }
  }
`

export default Opening
