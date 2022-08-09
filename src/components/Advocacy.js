import React from "react"
import styled from "styled-components"
import {
  B1Black,
  B1White,
  Btn1One,
  colors,
  H1White,
  H2DarkTeal,
  standardWrapper,
} from "../styles/helpers"

import imgOne from "../images/advocacy/image-one.jpg"
import imgTwo from "../images/advocacy/image-two.jpg"
import imgThree from "../images/advocacy/image-three.jpg"

import dots from "../images/advocacy/cah-annual-dotspng@3x.png"
import logo from "../images/advocacy/cah-rgb-cah-stamp-rev@3x.png"
import quote from "../images/advocacy/quote.png"

const Advocacy = () => {
  return (
    <StyledSection id="advocacy">
      <div className="upper">
        <div className="wrapper">
          <div className="title">
            <h2>Advocacy in Full Swing</h2>
          </div>
          <div className="content">
            <p>
              Our decisions were guided by a diverse group of community
              volunteers with lived experience who provided feedback on program
              development, research focus, knowledge translation, and community
              engagement. The Community Advisory Committee provides a collective
              voice for accessible, equitable, and inclusive sport and
              recreation opportunities.
            </p>
            <p>
              Their hard work and dedication was recognized with the 2021 City
              of Calgary Accessibility Advocacy Award, an annual award given to
              those demonstrating innovation and exceptional commitment to
              creating an inclusive city.
            </p>
            <a href="https://www.calgaryadaptedhub.com/about/community-advisory-committee">
              Meet the committee members
            </a>
          </div>

          <div className="images">
            <div className="image">
              <img src={imgOne} alt="" />
            </div>
            <div className="image">
              <img src={imgTwo} alt="" />
            </div>
            <div className="image">
              <img src={imgThree} alt="" />
            </div>
          </div>
        </div>
        <div className="stamp" />
        <div className="dots" />
      </div>
      <div className="bottom">
        <div className="wrapper">
          <div className="quote">
            <div className="quote__content">
              <p>
                “Finding Calgary Adaptive Hub was a weight off my shoulders. In
                a few quick conversations, I went from wondering why we didn’t
                seem to have any adaptive programs in Calgary to having more
                options than we could possibly ever take advantage of!”
              </p>
              <p>— Kristen, parent of child, age 5</p>
            </div>
            <div className="quote__image">
              <img src={quote} alt="" />
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .upper {
    position: relative;
    padding: 5rem 0 5rem;
    background-color: ${colors.colorSecondary};
  }

  .stamp {
    position: absolute;
    top: 15rem;
    right: -10rem;
    width: 25rem;
    height: 25rem;
    background-image: url(${logo});
    background-position: center;
    background-size: cover;
    z-index: 1;
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20rem;
    background-image: url(${dots});
    background-position: center;
    background-size: cover;
    z-index: 1;
  }

  .wrapper {
    ${standardWrapper};
    position: relative;
    z-index: 10;
  }

  .title {
    width: 100%;
    max-width: 95rem;
    text-align: center;

    h2 {
      ${H1White};
    }
  }

  .content {
    width: 100%;
    max-width: 95rem;
    text-align: center;

    p {
      ${B1White};
    }

    a {
      ${Btn1One};
    }
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 7.5rem;

    .image {
      width: calc(100% - 4rem);
      margin: 2rem 4rem;
      border-radius: 50%;
      border: solid 0.5rem ${colors.colorTertiary};
      overflow: hidden;

      @media (min-width: 768px) {
        width: calc(50%);
      }

      @media (min-width: 1025px) {
        width: calc(33.333333% - 4rem);
        margin: 2rem;
      }
    }
  }

  .bottom {
    padding: 5rem 0;
    background-color: rgba(98, 167, 196, 0.25);

    @media (min-width: 768px) {
      padding: 12rem 0;
    }

    .quote {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;

      &__content {
        width: 100%;

        @media (min-width: 768px) {
          width: calc(80%);
          text-align: right;
        }

        p:first-of-type {
          ${H2DarkTeal};
        }

        p:last-of-type {
          ${B1Black};
          margin: 0;
        }
      }

      &__image {
        width: 100%;
        margin-top: 2.5rem;

        @media (min-width: 768px) {
          width: calc(20% - 4rem);
          margin-top: 0;
          margin-left: 4rem;
          border-radius: 50%;
          border: solid 0.5rem ${colors.colorAccent};
          overflow: hidden;
        }
      }
    }
  }
`

export default Advocacy
