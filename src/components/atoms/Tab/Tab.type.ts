import React from "react";

interface TabType {
    children: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    active:boolean
}

export type {
    TabType
}
