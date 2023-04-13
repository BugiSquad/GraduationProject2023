import React from "react";
import { SimpleTemplate } from "./PageTemplate";

export const WeekPopMenu: React.FC = () => {
    return (
        <div className="App container" >
            <SimpleTemplate param={{ pageHeaderName: "이번 주 인기메뉴" }}>
            </SimpleTemplate>
        </div>
    );
};