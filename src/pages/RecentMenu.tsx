import React from "react";
import { SimpleTemplate } from "./PageTemplate";
import { MenuList } from "../components/MenuList";


export const RecentMenu: React.FC = () => {
    return (
        <div className="App container" >
            <SimpleTemplate param={{ pageHeaderName: "최근에 선택한 메뉴" }}>
            <MenuList />
            </SimpleTemplate>
        </div>
    );
};