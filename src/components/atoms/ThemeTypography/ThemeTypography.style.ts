import styled from "styled-components";
import {ThemeTypographyType} from './ThemeTypography.type'
import FontConfig from "./ThemeTypography.config";

const CustomSpan = styled('span')<ThemeTypographyType>`
  font-size: ${props => props.hero === "h1" && FontConfig.h1.fontSize} ${props => props.hero === "h2" && FontConfig.h2.fontSize} ${props => props.hero === "h3" && FontConfig.h3.fontSize} ${props => props.hero === "body1" && FontConfig.body1.fontSize};
  font-weight: ${props => props.bold ? 500 : 200};
  color: #333;

  @media (max-width: 720px) {
    font-size: ${props => props.hero === "h1" && FontConfig.h1.fontSize} ${props => props.hero === "h2" && FontConfig.h2.fontSize} ${props => props.hero === "h3" && FontConfig.h3.fontSize} ${props => props.hero === "body1" && FontConfig.body1.fontSize}
  }
`
export {
    CustomSpan
}
