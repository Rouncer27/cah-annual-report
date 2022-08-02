import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(3.2, 5.7, 76.8, 150, 3)};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.95;
  letter-spacing: normal;
`

export const H1Black = css`
  ${H1Base};
  color: ${colors.black};
`

export const H1White = css`
  ${H1Base};
  color: ${colors.white};
`

export const H1Dark = css`
  ${H1Base};
  color: ${colors.colorShad};
`

// Headline Styles #2 //
export const H2Base = css`
  ${fontSizer(2.5, 3.5, 76.8, 150, 2.5)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: normal;
`

export const H2White = css`
  ${H2Base};
  color: ${colors.white};
`

export const H2Black = css`
  ${H2Base};
  color: ${colors.black};
`

export const H2DarkTeal = css`
  ${H2Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #3 //
export const H3Base = css`
  ${fontSizer(2, 2.6, 76.8, 150, 2)}
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`

// Headline Styles #4 //
export const H4Base = css`
  ${fontSizer(2, 2.6, 76.8, 160, 2)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`
