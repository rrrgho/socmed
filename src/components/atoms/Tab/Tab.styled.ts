import styled from "styled-components";
import Theme from "../../../config/Theme";

interface Props{
    active:boolean,
    onClick?:any
}

const Wrapper = styled('div')<Props>`
  width: 100%;
  text-align: center;
  border-bottom: ${props => props.active ? `solid 1.5px ${Theme.color.primary}` : 'none'};
  height: 48px;
  line-height: 48px;
  cursor: pointer;
`

export {
    Wrapper
}
