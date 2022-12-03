import React, {FC} from 'react'
import {MeetupCardType} from "./MeetupCard.type";
import ThemeTypography from "../../atoms/ThemeTypography";


const MeetupCard: FC<MeetupCardType> = ({data}) => {
    return (
        <>
                <div className={`row mt-3 pb-3`}>
                    <div className="col-3 col-md-3 col-lg-1">
                        <img src={data?.thumbnail} style={{width:67, height:67}} className="rounded float-start" alt="..." />
                    </div>
                    <div className="col-9 ps-0 ps-lg-5">
                        <ThemeTypography hero={"h3"} bold>
                            {data?.title}
                        </ThemeTypography> <br/>
                        <ThemeTypography hero={'body1'}>{data?.desc}</ThemeTypography>
                    </div>
                </div>
        </>
    )
}
export default MeetupCard
