import {SimpleTemplate} from "./PageTemplate";
import {BottomNavigationTab} from "../types/PageHeaderParam";
import React from "react";

export const Community: React.FC = () => {
    return (
        <SimpleTemplate param={{pageHeaderName: "커뮤니티", tab: BottomNavigationTab.CART}}>
            <Content></Content>
        </SimpleTemplate>
    )

}
const Content: React.FC = () => {
    return (<>

    </>)
}