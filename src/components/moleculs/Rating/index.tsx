import React, {FC} from 'react'
import ThemeTypography from "../../atoms/ThemeTypography";
import Starfill from '../../../assets/images/star-fill.png'
import Star from '../../../assets/images/star.png'
import ThemeButton from "../../atoms/ThemeButton";

const Rating = () => {
    return (
        <div className="row p-4 p-md-0">
            <div className="col-6 col-md-4 d-flex pt-2">
                <ThemeTypography hero={"h3"} bold>Rating</ThemeTypography>
                <img src={Starfill} style={{width:16, height:16, marginTop:3, marginLeft:20}} />
                <img src={Starfill} style={{width:16, height:16, marginTop:3, marginLeft:2}} />
                <img src={Starfill} style={{width:16, height:16, marginTop:3, marginLeft:2}} />
                <img src={Starfill} style={{width:16, height:16, marginTop:3, marginLeft:2}} />
                <img src={Star} style={{width:16, height:16, marginTop:3, marginLeft:2}} />
            </div>
            <div className="col-5 col-md-4 text-start text-md-end pt-2">
                <ThemeTypography hero={"h3"}>4.5 of 193 reviews</ThemeTypography>
            </div>
            <div className="col-12 col-md-4 mt-4 mt-md-0">
                <ThemeButton hero={'dark'}>Reviews</ThemeButton>
            </div>
        </div>
    )
}

export default Rating
