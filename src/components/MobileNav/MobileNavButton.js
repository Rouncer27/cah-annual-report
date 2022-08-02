import React from "react"
import styled from "styled-components"

const MobileNavButton = ({ toggleDrawer, isOpen }) => (
  <MobileButton type="button" isOpen={isOpen} onClick={toggleDrawer}>
    <span>Menu</span>
  </MobileButton>
)

const MobileButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 3rem;
  right: 3rem;
  width: 4.5rem;
  height: 4.5rem;
  margin: 0 auto;
  padding: 0;
  background: transparent;
  border: none;
  color: ${props => props.theme.colorPrimary};
  text-align: center;
  z-index: 99999999;
  cursor: pointer;

  span {
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    position: relative;
    text-transform: uppercase;
    left: -100%;
  }

  &::before,
  &::after {
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    width: 60%;
    height: 0.4rem;
    margin: 0 auto;
    transform: rotate(0);
    transform-origin: center center;
    transition: all 0.2s ease;
    background-color: ${props => props.theme.colorPrimary};
    content: "";
  }

  &:focus {
    outline: none;
  }

  &::before {
    top: ${props => (props.isOpen ? "46%" : "1.5rem")};
    transform: rotate(${props => (props.isOpen ? "135deg" : "0deg")});
  }

  &::after {
    bottom: ${props => (props.isOpen ? "46%" : "1.5rem")};
    transform: rotate(${props => (props.isOpen ? "-135deg" : "0deg")});
  }
`

export default MobileNavButton
