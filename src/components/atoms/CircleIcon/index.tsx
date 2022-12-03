import React, {FC} from 'react'
import {Wrapper} from "./CircleIcon.styled";
import {CircleIconType} from "./CircleIcon.type";

const CircleIcon: FC<CircleIconType> = ({children, style}) => {
    return (
        <Wrapper style={style}>
            {children ?? <i style={{fontSize:'12px'}} className="fa fa-user"></i> }
        </Wrapper>
    )
}
export default CircleIcon
