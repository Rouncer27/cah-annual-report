import React, { useEffect } from "react"
import styled from "styled-components"
import { B1Black, H1Black, H1Dark, medWrapper } from "../styles/helpers"

import families from "../images/distance/families.jpg"
import peopleReached from "../images/distance/people-reached.jpg"
import social from "../images/distance/social.jpg"
import subscibers from "../images/distance/subscibers.jpg"
import unique from "../images/distance/unique.jpg"
import views from "../images/distance/views-2.jpg"
import topGrahpic from "../images/top-graphic.png"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const GoingDistance = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#going-the-distance`,
          markers: false,
          start: "top 10%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        `.box`,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 2,
          stagger: {
            each: 0.4,
          },
        }
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#going-the-distance",
          markers: false,
          start: "top 0%",
          toggleActions: "play none none none",
        },
      })
      .from(".box__content--number", {
        textContent: 0,
        duration: 2,
        ease: "power1.in",
        snap: { textContent: 1 },
        stagger: {
          each: 0.25,
          onUpdate: function () {
            this.targets()[0].innerHTML = numberWithCommas(
              Math.ceil(this.targets()[0].textContent)
            )
          },
        },
      })

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }, [])

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
              <p className="box__content--number">780</p>
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
              <p className="box__content--number">527</p>
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
              <p className="box__content--number">300</p>
              <p>families reached at 4 Family Resource Fairs in the region</p>
            </div>
          </div>

          <div className="box">
            <div className="box__image">
              <img src={unique} alt="" />
            </div>
            <div className="box__content">
              <p className="box__content--number">1500</p>
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
              <p className="box__content--number">245</p>
              <p>subscribers received the CAH newsletter each month</p>
            </div>
          </div>

          <div className="box">
            <div className="box__image">
              <img src={social} alt="" />
            </div>
            <div className="box__content">
              <p className="box__content--number">1340</p>
              <p>
                followers on social media and growing (an increase of 74% over
                year one)
              </p>
            </div>
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
  padding-bottom: 5rem;

  @media (min-width: 768px) {
    padding-bottom: 0;
  }

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
      margin: 2rem 0;
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
`

export default GoingDistance
