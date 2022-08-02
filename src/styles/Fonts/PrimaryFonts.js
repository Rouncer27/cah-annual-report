import * as primary from "./primary"
import { css } from "styled-components"

const PrimaryFonts = css`
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    src: local(""), url("${primary.WOFF2_4}") format("woff2"),
      url("${primary.WOFF_4}") format("woff");
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    src: local(""), url("${primary.WOFF2_5}") format("woff2"),
      url("${primary.WOFF_5}") format("woff");
  }
`

export default PrimaryFonts
