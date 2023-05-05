import React from "react";
import {MenuTabsProps} from "../types/MenuTabsProps";
import {MenuCategory, toLocalizedName} from "../types/MenuCategory";
import {Tab, Tabs} from "@mui/material";

export const MenuTabs: React.FC<MenuTabsProps> = ({category, onMenuTypeChanges}) => {
    let values = Object.values(MenuCategory)
    return (<Tabs value={category} onChange={onMenuTypeChanges}>
        {values.map((item) => {
            return <Tab label={toLocalizedName(item)} value={item}/>
        })}
    </Tabs>)
}