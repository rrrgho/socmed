import React from 'react'
import ThemeTypography from "../../atoms/ThemeTypography";

const HeaderPage = () => {
    return (
        <div className="row bg-white border-bottom p-4">
            <div className="col-1 text-center">
                <i className="fa fa-arrow-left"></i>
            </div>
            <div className="col-11 text-center">
                <ThemeTypography hero={"h1"} bold>Profile</ThemeTypography>
            </div>
        </div>
    )
}
export default HeaderPage
