import React, {FC} from 'react'
import {TabType} from "./Tab.type";
import {Wrapper} from "./Tab.styled";
import ThemeTypography from "../ThemeTypography";
import Theme from "../../../config/Theme";

const Tab: FC<TabType> = ({children, active, onClick}) => {
    return (
        <Wrapper active={active} onClick={onClick}>
            <ThemeTypography hero={"h3"} style={{color: active ? Theme.color.primary : '#333'}} bold>{children}</ThemeTypography>
        </Wrapper>
    )
}
export default Tab
