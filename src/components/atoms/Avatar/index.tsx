import React from 'react'
import {Wrapper} from "./Avatar.styled";
import Photo from '../../../assets/images/photo.png'

interface Props {
    thumbnail?:any,
    style?:object
}

const Avatar = ({thumbnail,style}:Props) => {
    return (
        <Wrapper style={style}>
            <img src={thumbnail ?? Photo} style={{width: '100%', height:'100%', borderRadius:100}} />
        </Wrapper>
    )
}
export default Avatar
