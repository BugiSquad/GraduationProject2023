import React from "react";
import {SimpleTemplate} from "./PageTemplate";
import {BottomNavigationTab} from "../types/PageHeaderParam";
import { LikedMenuContents } from "../components/LikedMenuContents";

export const LikedMenu: React.FC = () => {
    return (
        <div className="App container">
            <SimpleTemplate param={{pageHeaderName: "내가 찜한 메뉴", tab: BottomNavigationTab.MYPAGE}}>
                <LikedMenuContents />
            </SimpleTemplate>
        </div>
    );
};
