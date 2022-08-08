import React from "react"
import styled from "styled-components"
import { B1Black, H1Dark, H2DarkTeal, medWrapper } from "../styles/helpers"

import imgOne from "../images/priorities/mask-group-22@3x.jpg"
import imgTwo from "../images/priorities/mask-group-24@3x.jpg"
import imgThree from "../images/priorities/mask-group-25@3x.jpg"

import iconOne from "../images/priorities/group-3549@3x.png"
import iconTwo from "../images/priorities/group-3551@3x.png"
import iconThree from "../images/priorities/group-3554@3x.png"

const PathForward = () => {
  return (
    <StyledSection id="path-forward">
      <div className="wrapper">
        <div className="main-title">
          <h2>The Path Forward</h2>
        </div>
        <div className="main-content">
          <p>
            Calgary Adapted Hub believes no one should have to sit on the
            sidelines. We’re working collectively to remove barriers to
            participation in sport programming at the community level. And we’re
            paving the way for organizations across the country to follow.
          </p>
        </div>

        <div className="priorities">
          <div className="priorities-title">
            <h3>Our Strategic Priorities</h3>
          </div>

          <div className="priority">
            <div className="priority__image">
              <img src={imgOne} alt="" />
            </div>
            <div className="priority__content">
              <h3>Partner Expansion</h3>
              <p>
                We will reach more families, and facilitate more pathways to
                participation, by aligning programming that has been
                historically fragmented and incredibly difficult for families to
                navigate.
              </p>
            </div>
            <div className="priority__icon">
              <img src={iconOne} alt="" />
            </div>
          </div>

          <div className="priority priority-reverse">
            <div className="priority__image">
              <img src={imgTwo} alt="" />
            </div>
            <div className="priority__content">
              <h3>Knowledge Translation</h3>
              <p>
                We will highlight the excellent research being done in adapted
                sport and recreation, and continue to integrate research into
                CAH-supported programs, collecting and analyzing data, as we
                work to define best practices and deliver the highest quality
                programs possible.
              </p>
            </div>
            <div className="priority__icon">
              <img src={iconTwo} alt="" />
            </div>
          </div>

          <div className="priority">
            <div className="priority__image">
              <img src={imgThree} alt="" />
            </div>
            <div className="priority__content">
              <h3>Increase Capacity</h3>
              <p>
                We will continue to connect families to quality inclusive sport
                and recreation programs, while fostering countless
                collaborations and relationships within the Calgary community,
                by making the most of our funding, resources, and dedicated
                supports.
              </p>
            </div>
            <div className="priority__icon">
              <img src={iconThree} alt="" />
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .main-title {
    width: 100%;

    h2 {
      ${H1Dark};
      color: #043b49;
    }
  }

  .main-content {
    width: 100%;
    max-width: 95rem;
    margin-left: 0;
    margin-right: auto;

    p {
      ${B1Black};
    }
  }

  .priorities {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    .priorities-title {
      width: 100%;
      margin-bottom: 2.5rem;

      h3 {
        ${H2DarkTeal};
      }
    }

    .priority {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin-bottom: 10rem;

      &.priority-reverse {
        flex-direction: row-reverse;
      }

      &__image {
        width: 100%;

        @media (min-width: 768px) {
          width: calc(25%);
        }
      }

      &__content {
        width: 100%;

        @media (min-width: 768px) {
          width: calc(65%);
          padding: 0 7rem;
        }

        h3 {
          ${H2DarkTeal};
        }

        p {
          ${B1Black};
          margin: 0;
        }
      }

      &__icon {
        width: 100%;

        @media (min-width: 768px) {
          width: calc(10%);
        }
      }
    }
  }
`

export default PathForward
