import React from 'react'
import Avatar from "../../atoms/Avatar";
import ThemeTypography from "../../atoms/ThemeTypography";

const ProfileInfo = () => {
    return (
        <div className="row pb-3 border-bottom bg-white">
            <div className="col-2 col-md-1">
                <Avatar/>
            </div>
            <div className="col-8 col-md-10 p-0 ps-4 ps-md-0">
                <ThemeTypography hero={"h2"} bold>
                    @xuixian_98
                    <i style={{marginLeft: 4, color: '#2882F5'}} className="fa fa-certificate"></i></ThemeTypography>
                <br/>
                <ThemeTypography hero={"body1"} bold>
                    <i style={{color: '#45C99A', fontSize: 10, marginRight:3}} className="fa fa-circle"></i>
                    Online Now
                </ThemeTypography>
                <br/>
                <ThemeTypography hero={"body1"}>
                    İ’m your manic pixie dream girl ~ <br/>
                    Design student and anime weeb. Coffee addict. Anime fan and games. Come say hi!
                </ThemeTypography>
            </div>
            <div className="col-2 col-md-1 text-center pt-3">
                <i className="fa fa-list"></i>
            </div>
        </div>
    )
}
export default ProfileInfo
