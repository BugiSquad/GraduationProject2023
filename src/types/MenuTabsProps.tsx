import React from "react";
import {MenuCategory} from "./MenuCategory";

export interface MenuTabsProps {
    category: MenuCategory;
    onMenuTypeChanges: (event: React.SyntheticEvent, category: MenuCategory) => void;
}