import React, { useEffect } from "react"
import styled from "styled-components"
import { B1Black, H2DarkTeal, medWrapper, Btn1One } from "../styles/helpers"
import logo from "../images/cah-logo.png"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Testimonial = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#test-trigger`,
          markers: false,
          start: "top 0%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        `.testimonial__logo`,
        {
          rotate: 360,
        },
        {
          ease: "power2.out",
          rotate: 0,
          duration: 2,
        }
      )
      .add("start")
      .fromTo(
        `.testimonial__content--para`,
        {
          autoAlpha: 0,
          x: 150,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1.5,
        },
        "1-=start"
      )
      .fromTo(
        `.testimonial__content--name`,
        {
          autoAlpha: 0,
          x: 150,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1,
        },
        "1.25-=start"
      )
      .fromTo(
        `.testimonial__content--org`,
        {
          autoAlpha: 0,
          x: 150,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1,
        },
        "1.5-=start"
      )
      .fromTo(
        `.testimonial__content a`,
        {
          autoAlpha: 0,
          x: 150,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1,
        },
        "1.75-=start"
      )
  }, [])

  return (
    <StyledSection>
      <div className="wrapper">
        <div id="test-trigger" className="testimonial">
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
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }
  .testimonial {
    width: 100%;
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &__logo {
      width: 100%;
      margin-bottom: 2.5rem;
      transform-origin: center center;

      @media (min-width: 768px) {
        width: 20%;
        margin-bottom: 0;
      }

      img {
        max-width: 25rem;
      }
    }

    &__content {
      width: 100%;

      @media (min-width: 768px) {
        width: 80%;
        padding-left: 4.1rem;
      }

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

export default Testimonial
