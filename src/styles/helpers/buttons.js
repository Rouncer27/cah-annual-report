import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"

const Btn1Base = css`
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.8)};
  position: relative;
  display: inline-block;
  padding: 0.25rem 3rem;
  border: none;
  border-radius: 3rem;
  transition: all 0.3s ease;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: center;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Btn1One = css`
  ${Btn1Base};
  background-color: ${colors.colorAccent};
  color: ${colors.white};

  &:hover {
    color: ${colors.colorTertiary};
    background-color: ${colors.colorPrimary};
  }

  &:focus {
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: ${colors.white};
      color: ${colors.colorPrimary};
      cursor: not-allowed;
    }
  }
`
