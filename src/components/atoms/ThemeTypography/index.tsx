import React, {FC} from "react";
import {ThemeTypographyType} from './ThemeTypography.type'
import {CustomSpan} from "./ThemeTypography.style";

const ThemeTypography: FC<ThemeTypographyType> = ({children, hero, bold, style}) => {
    return (
        <CustomSpan style={style} hero={hero} bold={bold}>
            {children}
        </CustomSpan>
    )
}

export default ThemeTypography
