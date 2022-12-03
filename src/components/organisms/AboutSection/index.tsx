import React, {FC} from 'react'
import IdentityPost from "../../moleculs/IdentityPost";
import ThemeTypography from "../../atoms/ThemeTypography";
import {AboutSectionType} from "./AboutSection.type";
import Rating from "../../moleculs/Rating";

const AboutSection: FC<AboutSectionType> = ({data}) => {
    return (
        <div className="row rounded-bottom bg-white p-0 p-md-4 mt-4">
            <div className="col-12">
                <IdentityPost />
            </div>
            <div className="col-12 mt-2">
                <div className="row p-4 p-md-0">
                    <div className="col-4 col-md-3">
                        <div className="col">
                            <ThemeTypography hero={"h3"} bold>Age</ThemeTypography>
                        </div>
                        <div className="col">
                            <ThemeTypography hero={"h3"} bold>Race</ThemeTypography>
                        </div>
                        <div className="col">
                            <ThemeTypography hero={"h3"} bold>Languages</ThemeTypography>
                        </div>
                        <div className="col">
                            <ThemeTypography hero={"h3"} bold>Height</ThemeTypography>
                        </div>
                        <div className="col">
                            <ThemeTypography hero={"h3"} bold>Sexual Orientation</ThemeTypography>
                        </div>
                        <div className="col">
                            <ThemeTypography hero={"h3"} bold>Meetups</ThemeTypography>
                        </div>
                        <div className="col">
                            <ThemeTypography hero={"h3"} bold>Responsiveness</ThemeTypography>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="col">
                            <ThemeTypography hero={"h3"}>{data.age}</ThemeTypography>
                        </div>
                        <div className="col">
                            <ThemeTypography hero={"h3"}>{data.race}</ThemeTypography>
                        </div>
                        <div className="col">
                            <ThemeTypography hero={"h3"}>{data.language}</ThemeTypography>
                        </div>
                        <div className="col">
                            <ThemeTypography hero={"h3"}>{data.height}</ThemeTypography>
                        </div>
                        <div className="col">
                            <ThemeTypography hero={"h3"}>{data.sexual}</ThemeTypography>
                        </div>
                        <div className="col">
                            <ThemeTypography hero={"h3"}>{data.meetups}</ThemeTypography>
                        </div>
                        <div className="col">
                            <ThemeTypography hero={"h3"}>{data.responsive}</ThemeTypography>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-2">
                <Rating />
            </div>
        </div>
    );
}
export default AboutSection
