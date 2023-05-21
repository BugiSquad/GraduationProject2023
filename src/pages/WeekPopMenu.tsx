import React from "react";
import {SimpleTemplate} from "./PageTemplate";
import {MenuList} from "../components/MenuList";
import {BottomNavigationTab} from "../types/PageHeaderParam";

export const WeekPopMenu: React.FC = () => {
    return (
        <div className="App container">
            <SimpleTemplate param={{pageHeaderName: "이번 달 인기메뉴", tab: BottomNavigationTab.APP}}>
                <MenuList/>
            </SimpleTemplate>
        </div>
    );
};