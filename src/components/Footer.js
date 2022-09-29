import React from "react"
import styled from "styled-components"
import { B1White, medWrapper, fontSizer, colors } from "../styles/helpers"

import Instagram from "../Icons/Instagram"
import Facebook from "../Icons/Facebook"
import Twitter from "../Icons/Twitter"
import { Link } from "gatsby"

import downloadFile from "../downloads/CalgaryAdaptedHub-Annual21-22.pdf"

const Footer = () => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="foot-sec footer-download">
          <h3>Download Report</h3>
          <a href={downloadFile} download>
            Download Full Report
          </a>
        </div>
        <div className="foot-sec footer-info">
          <h3>For More Information Go To</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.calgaryadaptedhub.com/programs"
          >
            Program Info
          </a>
        </div>
        <div className="foot-sec footer-website">
          <h3>Visit Our Full Website</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.calgaryadaptedhub.com/"
          >
            Website Info
          </a>
        </div>
        <div className="foot-sec footer-social">
          <ul>
            <StyledIcon>
              <a
                title="Follow us on Facebook - Link will open in new window"
                target="_blank"
                rel="noreferrer"
                href="https://facebook.com"
              >
                <i>
                  <Facebook />
                  <span className="visuallyhidden">Facebook</span>
                </i>
              </a>
            </StyledIcon>
            <StyledIcon>
              <a
                target="_blank"
                rel="noreferrer"
                title="Follow us on Instagram - Link will open in new window"
                href="https://instagram.com"
              >
                <i>
                  <Instagram />
                  <span className="visuallyhidden">Instagram</span>
                </i>
              </a>
            </StyledIcon>
            <StyledIcon>
              <a
                title="Follow us on Twitter - Link will open in new window"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com"
              >
                <i>
                  <Twitter />
                  <span className="visuallyhidden">Twitter</span>
                </i>
              </a>
            </StyledIcon>
          </ul>

          <div className="page-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span> | </span>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: #707070;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .wrapper {
    ${medWrapper};
  }

  .foot-sec {
    width: calc(100%);
    margin-bottom: 2.5rem;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(25%);
      margin-bottom: 0;
      text-align: left;
    }

    h3 {
      ${B1White};
      ${fontSizer(1.2, 1.4, 76.8, 150, 1.8)};
      margin: 0;
      text-transform: uppercase;
    }

    a {
      ${B1White};
      ${fontSizer(1.2, 1.4, 76.8, 150, 1.8)};
      font-weight: bold;
      text-transform: uppercase;

      &:hover {
        color: ${colors.colorPrimary};
      }
    }
  }

  ul {
    text-align: center;
  }

  .page-links {
    margin-top: 2.5rem;
    text-align: center;

    @media (min-width: 768px) {
      margin-top: 1rem;
    }

    span {
      color: ${colors.white};
    }
  }
`

const StyledIcon = styled.li`
  display: inline-block;
  margin-right: 1rem;
  margin-left: 1rem;

  &:first-of-type {
    margin-left: 0;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${colors.colorAccent};

    @media (min-width: 768px) {
      width: 4rem;
      height: 4rem;
    }
    @media (min-width: 1025px) {
      width: 4rem;
      height: 4rem;
    }

    &:focus {
      outline: 0.4rem solid #003b49;
      transition: outline-width 0.35s ease-in-out;
    }

    &:hover {
      background-color: ${colors.colorTertiary};
    }

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    svg {
      display: block;
      width: 2rem;
      height: 2rem;
      margin: auto;
      transition: all 0.3s ease-out;
      fill: ${colors.white};

      @media (min-width: 768px) {
        width: 2rem;
        height: 2rem;
      }
      @media (min-width: 1025px) {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`

export default Footer
