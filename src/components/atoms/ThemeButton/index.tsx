import React, {FC} from 'react'
import {Button} from "./ThemeButton.styled";
import ThemeTypography from "../ThemeTypography";
import {ThemeButtonType} from "./ThemeButton.type";

const ThemeButton: FC<ThemeButtonType> = ({children, text, hero, onClick}) => {
    return (
        <Button hero={hero} onClick={onClick}>
            {children}
        </Button>
    )
}
export default ThemeButton
