import React from "react"
import styled from "styled-components"
import { colors, H2DarkTeal } from "../../styles/helpers"
import scrollTo from "gatsby-plugin-smoothscroll"

const MobileNavItem = ({ toggleDrawer, title, linkid }) => {
  return (
    <MobileNavItemStyled>
      <button
        type="button"
        onClick={() => {
          toggleDrawer()
          scrollTo(`#${linkid}`)
        }}
      >
        {title}
      </button>
    </MobileNavItemStyled>
  )
}

const MobileNavItemStyled = styled.li`
  position: relative;
  width: 100%;
  border: none;
  border-bottom: 0.1rem solid #f9a11b;
  text-align: left;

  button {
    ${H2DarkTeal};
    display: block;
    width: 100%;
    padding: 2rem;
    border: none;
    background-color: transparent;
    font-weight: normal;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      color: ${colors.colorPrimary};
    }

    &[aria-current="page"] {
      color: ${colors.colorSecondary};
      background-color: ${colors.colorTertiary};

      &:hover {
        cursor: default;
      }
    }
  }
`

export default MobileNavItem
