import React from 'react'
import ThemeTypography from "../../atoms/ThemeTypography";
import CircleIcon from "../../atoms/CircleIcon";

const IdentityPost = () => {
    return(
        <div className="mt-3 p-4 p-md-0">
            <div className="row">
                <div className="col">
                    <ThemeTypography hero={"h2"} bold>Xiuxian, 22</ThemeTypography>
                </div>
            </div>
            <div className="col d-flex justify-content-start mt-2 border-bottom pb-3">
                <div className="col-4 col-md-2 d-flex">
                    <CircleIcon>
                        <i style={{fontSize:12}} className="fa fa-graduation-cap"></i>
                    </CircleIcon>
                    <ThemeTypography style={{marginLeft:10, marginTop:2}} hero={"h3"} bold>SIM-UOL</ThemeTypography>
                </div>
                <div className="col p-0 d-flex">
                    <CircleIcon>
                        <i style={{fontSize:12}} className="fa fa-briefcase"></i>
                    </CircleIcon>
                    <ThemeTypography style={{marginLeft:10, marginTop:2}} hero={"h3"} bold>Student at University</ThemeTypography>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <ThemeTypography hero={"h3"}>
                        Gemini. Art student and tall. <br/>
                        Coffee, cold showers and early morning walks!
                    </ThemeTypography>
                </div>
            </div>
        </div>
    )
}
export default IdentityPost
