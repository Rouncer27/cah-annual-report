import React from "react"
import styled from "styled-components"
import MobileNavItem from "./MobileNavItem"

const MobileNavContainer = ({ toggleDrawer }) => {
  return (
    <MobileNavContainerStyled>
      <ul className="top-level">
        <MobileNavItem
          toggleDrawer={toggleDrawer}
          title="Keeping Score"
          linkid="keeping-score"
        />
        <MobileNavItem
          toggleDrawer={toggleDrawer}
          title="Going the distance"
          linkid="going-the-distance"
        />
        <MobileNavItem
          toggleDrawer={toggleDrawer}
          title="Advocacy in full swing"
          linkid="advocacy"
        />
        <MobileNavItem
          toggleDrawer={toggleDrawer}
          title="Path forward"
          linkid="path-forward"
        />
      </ul>
    </MobileNavContainerStyled>
  )
}

const MobileNavContainerStyled = styled.nav`
  display: block;
  width: 100%;
  padding-bottom: 5rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  ul.top-level {
    text-align: left;
  }
`

export default MobileNavContainer
