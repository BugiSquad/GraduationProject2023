import React from "react";
import {PageHeaderParam} from "../../types/PageHeaderParam";
import {PageHeaderWithName} from "./PageHeaderWithName";
import {MainPage} from "../../pages/MainPage";
import {MainPageHeader} from "./MainPageHeader";

export const PageHeader: React.FC<PageHeaderParam>
    = (param: PageHeaderParam) => {
    switch (param.variant) {
        case "WithName":
            return (<PageHeaderWithName {...param}/>)
        case "MainPage":
            return (<MainPageHeader {...param}/>)
        default:
            return (<PageHeaderWithName {...param}/>)
    }
}
