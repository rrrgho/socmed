import React, {FC} from 'react'
import ThemeTypography from "../../atoms/ThemeTypography";
import {FriendCardType} from "./FriendCard.type";
import Avatar from "../../atoms/Avatar";

const FriendCard: FC<FriendCardType> = ({data}) => {
    return (
        <div className={`d-flex mt-3 ${data?.id !== 3 ? "border-bottom" : ""} pb-3`}>
            <div className="col-3">
                <Avatar style={{width:80, height:80}} thumbnail={data.thumbnail} />
                {/*<img src={data?.thumbnail} className="rounded float-start w-100 h-100" alt="..." />*/}
            </div>
            <div className="col-9 ps-3">
                <ThemeTypography hero={"h3"} bold>
                    {data?.account}
                    <i style={{marginLeft: 4, color: '#2882F5'}} className="fa fa-certificate"></i>
                </ThemeTypography> <br/>
                <ThemeTypography hero={'body1'}>{data?.bio}</ThemeTypography>
            </div>
        </div>
    )
}
export default FriendCard
