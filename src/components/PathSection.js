import React, { useEffect } from "react"
import styled from "styled-components"
import {
  B1Black,
  H1Dark,
  H2DarkTeal,
  medWrapper,
  H2White,
  colors,
  Btn1One,
} from "../styles/helpers"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const PathSection = ({ img, title, content, icon, reverse, index }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#item-trigger-${index}`,
          markers: false,
          start: "top 30%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        `#item-trigger-${index} .priority__image`,
        {
          autoAlpha: 0,
          x: `${index === 2 ? 200 : -200}`,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1.5,
        }
      )
      .fromTo(
        `#item-trigger-${index} .priority__content`,
        {
          autoAlpha: 0,
          y: 200,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 1.5,
        },
        "start"
      )
      .fromTo(
        `#item-trigger-${index} .priority__icon`,
        {
          autoAlpha: 0,
          x: `${index === 2 ? -200 : 200}`,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1.5,
        },
        "start"
      )
  }, [])

  return (
    <div
      id={`item-trigger-${index}`}
      className={`priority${reverse ? " priority-reverse" : ""}`}
    >
      <div className="priority__image">
        <img src={img} alt="" />
      </div>
      <div className="priority__content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className="priority__icon">
        <img src={icon} alt="" />
      </div>
    </div>
  )
}

export default PathSection
