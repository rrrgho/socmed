import React, {FC} from 'react'
import ThemeTypography from "../../atoms/ThemeTypography";
import {MemberCardType} from "./MemberCard.type";

const MemberCard: FC<MemberCardType> = ({data}) => {
    return (
        <div className={`d-flex mt-3 ${data?.id !== 4 ? "border-bottom" : ""} pb-3`}>
            <div className="col-3">
                <img src={data?.thumbnail} className="rounded float-start w-100 h-100" alt="..." />
            </div>
            <div className="col-9 ps-3">
                <ThemeTypography hero={"h3"} bold style={{color:data?.color}}>{data?.category}</ThemeTypography> <br/>
                <ThemeTypography hero={'body1'}>{data?.account}</ThemeTypography> <br/>
                <ThemeTypography hero={'body1'} bold>{data?.online_status}</ThemeTypography>
            </div>
        </div>
    )
}
export default MemberCard
