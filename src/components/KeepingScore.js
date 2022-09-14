import React, { useEffect } from "react"
import styled from "styled-components"
import {
  B1Black,
  colors,
  H1Black,
  H1White,
  medWrapper,
} from "../styles/helpers"

import cah from "../images/icons/cah.png"
import hands from "../images/icons/hands-heart.png"
import info from "../images/icons/info.png"
import mic from "../images/icons/mic.png"
import paper from "../images/icons/paper.png"
import play from "../images/icons/play.png"
import bgImage from "../images/keeping-score-bg.jpg"
import bgDots from "../images/top-dots-reversed.png"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const KeepingScore = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".score .icon-stat__stat--number")

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#keeping-score",
          markers: false,
          start: "top 25%",
          toggleActions: "play none none none",
        },
      })
      .from(items, {
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
    <StyledSection id="keeping-score">
      <div className="inner">
        <div className="wrapper">
          <div className="title">
            <h2>Keeping Score</h2>
          </div>
          <div className="scores">
            <div className="score score-one">
              <div className="icon-stat">
                <div className="icon-stat__icon">
                  <img src={cah} alt="" />
                </div>
                <div className="icon-stat__stat">
                  <span className="icon-stat__stat--number">35</span>
                  <span>+</span>
                </div>
              </div>
              <p>
                adapted sport and recreation providers partnered with CAH in
                2021 / 2022
              </p>
            </div>
            <div className="score score-two">
              <div className="icon-stat">
                <div className="icon-stat__icon">
                  <img src={hands} alt="" />
                </div>
                <div className="icon-stat__stat">
                  <span className="icon-stat__stat--number">20</span>
                </div>
              </div>
              <p>
                inclusive and accessible programs offered by CAH partners (an
                increase of 250% over year one)
              </p>
            </div>
            <div className="score score-three">
              <div className="icon-stat">
                <div className="icon-stat__icon">
                  <img src={info} alt="" />
                </div>
                <div className="icon-stat__stat">
                  <span className="icon-stat__stat--number">6</span>
                </div>
              </div>
              <p>
                new adapted sports and activities introduced to participants
              </p>
            </div>
            <div className="score score-four">
              <div className="icon-stat">
                <div className="icon-stat__icon">
                  <img src={mic} alt="" />
                </div>
                <div className="icon-stat__stat">
                  <span className="icon-stat__stat--number">538</span>
                </div>
              </div>
              <p>
                children and youth benefitted from participating in
                CAH-supported programs (up 272% over year one)
              </p>
            </div>
            <div className="score score-five">
              <div className="icon-stat">
                <div className="icon-stat__icon">
                  <img src={paper} alt="" />
                </div>
                <div className="icon-stat__stat">
                  <span className="icon-stat__stat--number">71</span>
                </div>
              </div>
              <p>
                families accessed personalized navigation services (517% more
                than in year one)
              </p>
            </div>
            <div className="score score-six">
              <div className="icon-stat">
                <div className="icon-stat__icon">
                  <img src={play} alt="" />
                </div>
                <div className="icon-stat__stat">
                  <span className="icon-stat__stat--number">4</span>
                </div>
              </div>
              <p>research projects currently underway</p>
            </div>
          </div>
        </div>
        <div className="bg-image" />
        <div className="bg-overlay" />
      </div>
      <div className="bg-dots" />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  padding-top: 5rem;

  .bg-dots {
    position: absolute;
    top: -15rem;
    left: 0;
    width: 100%;
    height: 20rem;
    background-image: url(${bgDots});
    background-position: center;
    background-size: cover;
    z-index: -1;
  }

  .inner {
    position: relative;
    padding: 5rem 0;

    .bg-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${bgImage});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 1;
    }

    .bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(4, 59, 73, 0.5);
      z-index: 2;
    }
  }

  .wrapper {
    ${medWrapper};
    position: relative;
    z-index: 5;
  }

  .title {
    width: 100%;
    padding: 2.5rem 0;
    text-align: center;

    h2 {
      ${H1White};
    }
  }

  .scores {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    .score {
      width: 100%;
      margin: 2rem 0;
      padding: 2rem;
      background-color: ${colors.white};
      border-radius: 18px;
      box-shadow: 4px 6px 6px 0 rgba(0, 0, 0, 0.16);

      @media (min-width: 768px) {
        width: calc(50%);
        margin: 2rem;
      }

      @media (min-width: 1025px) {
        width: calc(33.333333% - 4rem);
        margin: 2rem;
      }

      .icon-stat {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;

        &__icon {
          width: 12rem;
          margin-left: 0;
          padding-bottom: 2rem;
          padding-right: 2rem;
        }

        &__stat {
          margin-right: auto;
          padding-left: 1rem;

          span {
            ${H1Black};
            margin: 0;
          }
        }
      }

      p {
        ${B1Black};
        margin: 0;
      }
    }
  }
`

export default KeepingScore
