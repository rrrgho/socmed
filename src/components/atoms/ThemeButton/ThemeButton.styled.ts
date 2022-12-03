import styled from "styled-components";
import ButtonConfig from "./ThemeButton.config";

interface Props {
    hero:string
}

const Button = styled('button')<Props>`
  background: ${props => props.hero === 'danger' && ButtonConfig.danger.background_rgb} ${props => props.hero === 'danger_selected' && ButtonConfig.danger.background} ${props => props.hero === 'danger_light' && '#fff'} ${props => props.hero === 'dark' && ButtonConfig.dark.background_rgb};
  border: ${props => props.hero === 'danger_light' ? 'solid 1px #888' : 'none'};
  border-radius: 100px;
  width: 100%;
  padding: 10px;
  color: ${props => props.hero === 'danger_selected' ? '#fff' : props.hero === 'danger_light' && ButtonConfig.danger.background}
`

export {
    Button
}
