import React from "react";
import { SimpleTemplate } from "./PageTemplate";
import { MenuList } from "../components/MenuList";

export const WeekPopMenu: React.FC = () => {
    return (
        <div className="App container" >
            <SimpleTemplate param={{ pageHeaderName: "이번 주 인기메뉴" }}>
                <MenuList />
            </SimpleTemplate>
        </div>
    );
};