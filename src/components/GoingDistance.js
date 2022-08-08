import React from "react"
import styled from "styled-components"
import {
  B1Black,
  H1Black,
  H1Dark,
  H2DarkTeal,
  medWrapper,
  Btn1One,
} from "../styles/helpers"

import families from "../images/distance/families.jpg"
import peopleReached from "../images/distance/people-reached.jpg"
import social from "../images/distance/social.jpg"
import subscibers from "../images/distance/subscibers.jpg"
import unique from "../images/distance/unique.jpg"
import views from "../images/distance/views.jpg"
import topGrahpic from "../images/top-graphic.png"
import logo from "../images/cah-logo.png"

const GoingDistance = () => {
  return (
    <StyledSection id="going-the-distance">
      <div className="wrapper">
        <div className="title">
          <h2>Going the Distance</h2>
          <p>
            We brought the Hub to Calgarians with public awareness campaigns,
            content marketing, public presentations, and our Research &
            Community Engagement Seminar series. We also expanded our network to
            include 50+ disability service providers, physicians, social
            workers, and physical therapists who regularly refer their clients
            to Calgary Adapted Hub.
          </p>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="box__image">
              <img src={peopleReached} alt="" />
            </div>
            <div className="box__content">
              <p>780+</p>
              <p>
                people reached at 16 public events, conferences, trade shows,
                and seminars (up 338% over year one)
              </p>
            </div>
          </div>

          <div className="box">
            <div className="box__image">
              <img src={views} alt="" />
            </div>
            <div className="box__content">
              <p>527</p>
              <p>
                views of 9 Research & Community Engagement Seminars (live and
                on-demand)
              </p>
            </div>
          </div>

          <div className="box">
            <div className="box__image">
              <img src={families} alt="" />
            </div>
            <div className="box__content">
              <p>300+</p>
              <p>families reached at 4 Family Resource Fairs in the region</p>
            </div>
          </div>

          <div className="box">
            <div className="box__image">
              <img src={unique} alt="" />
            </div>
            <div className="box__content">
              <p>XXX</p>
              <p>
                unique visitors accessed calgaryadaptedhub.com each week, on
                average
              </p>
            </div>
          </div>

          <div className="box">
            <div className="box__image">
              <img src={subscibers} alt="" />
            </div>
            <div className="box__content">
              <p>245</p>
              <p>subscribers received the CAH newsletter each month</p>
            </div>
          </div>

          <div className="box">
            <div className="box__image">
              <img src={social} alt="" />
            </div>
            <div className="box__content">
              <p>1,340</p>
              <p>
                followers on social media and growing (an increase of 74% over
                year one)
              </p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="testimonial__logo">
            <img src={logo} alt="" />
          </div>
          <div className="testimonial__content">
            <p className="testimonial__content--para">
              “Having CAH as collaborators means we are only limited by our
              imagination as resources and partnerships are more readily
              available now than we could ever have imagined.”
            </p>
            <p className="testimonial__content--name">
              — Scott Godfrey, Program Coordinator, Active Life,
            </p>
            <p className="testimonial__content--org">
              Autism Aspergers Friendship Society of Calgary
            </p>
            <a href="https://www.calgaryadaptedhub.com/about">
              Connect and Collaborate with us
            </a>
          </div>
        </div>
      </div>
      <div className="top-graphic" />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  padding-top: 2.5rem;

  .top-graphic {
    position: absolute;
    top: 0;
    right: 0;
    width: 14vw;
    height: 14vw;
    max-width: 22.5rem;
    max-height: 22.5rem;
    background-image: url(${topGrahpic});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }

  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;
    max-width: 95rem;
    margin-left: 0;
    margin-right: auto;

    h2 {
      ${H1Dark};
    }

    p {
      ${B1Black};
    }
  }

  .boxes {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 5rem;

    .box {
      width: 100%;
      border: solid 2px #62a7c4;

      @media (min-width: 768px) {
        width: calc(33.333333% - 1rem);
        margin: 0.5rem;
      }

      &__image {
        width: 100%;
        border-bottom: solid 8px #f9a11b;
      }

      &__content {
        padding: 3.1rem;

        @media (min-width: 768px) {
          padding: 3.1rem;
        }

        p {
          margin: 0;
        }

        p:first-of-type {
          ${H1Black};
          color: #62a7c4;
        }

        p:last-of-type {
          ${B1Black};
          margin-top: 0.75rem;
        }
      }
    }
  }

  .testimonial {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &__logo {
      width: 20%;
      padding-right: 4.1rem;
    }

    &__content {
      width: 80%;

      &--para {
        ${H2DarkTeal};
        margin-bottom: 1.5rem;
      }

      &--name {
        ${B1Black};
        margin: 0;
      }

      &--org {
        ${B1Black};
      }

      a {
        ${Btn1One};
      }
    }
  }
`

export default GoingDistance
