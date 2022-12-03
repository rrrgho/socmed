import React from "react";

interface ThemeButtonType {
    children: React.ReactNode,
    hero:string,
    text?:string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type {
    ThemeButtonType
}
