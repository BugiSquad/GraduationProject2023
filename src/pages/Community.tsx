import {SimpleTemplate} from "./PageTemplate";
import {BottomNavigationTab} from "../types/PageHeaderParam";
import React from "react";
import {BoardCard} from "../components/BoardCard";

export const Community: React.FC = () => {
    return (
        <SimpleTemplate param={{pageHeaderName: "커뮤니티", tab: BottomNavigationTab.COMMUNITY}}>
            <Content></Content>
        </SimpleTemplate>
    )

}
const Content: React.FC = () => {
    return (<>
        <BoardCard title={"공지사항"} content={<></>} link={""}/>
        <BoardCard title={"투표하기"} content={<></>} link={""}/>
    </>)
}