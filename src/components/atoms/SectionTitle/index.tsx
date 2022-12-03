import React, {FC} from 'react'
import {SectionTitleType} from "./SectionTitle.type";
import ThemeTypography from "../ThemeTypography";

const SectionTitle: FC<SectionTitleType> = ({text}) => {
    return (
        <div className="d-flex pb-3 border-bottom">
            <div className="col-12">
                <ThemeTypography hero={'h3'} bold>{text ?? "Your section title here"}</ThemeTypography>
            </div>
        </div>
    )
}
export default SectionTitle
