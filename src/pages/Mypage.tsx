import React from "react";
import {SimpleTemplate} from "./PageTemplate";
import {Card} from "@mui/material";
import {RecentOrders} from "../components/RecentOrders";
import {MypageCards} from "../components/MypageCards";
import {RecentMeets} from "../components/RecentMeets";
import {MyMessagebox} from "../components/MyMessagebox";

export const Mypage: React.FC = () => {
    return (
        <div className="App contaier">
        <SimpleTemplate param={{ pageHeaderName: "마이페이지" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginRight:"10px" }}>
                <div></div>
                <a href="/mypage/editmyinfo" style={{color: 'black'}}>내 정보 수정</a>
            </div>
            <Card sx={{
                minWidth: 200,
                maxWidth: 1000,
                minHeight: 490,
                padding: '10px 10',
                margin: '10px',
            }}>

                <MypageCards title="최근 주문 내역" content={<RecentOrders/>} link="/mypage/recentorderdetail"/>
                <MypageCards title="최근 만남" content={<RecentMeets/>} link="/mypage/recentmeetdetail"/>
                {/*
                추후에 구현하는 것으로 변경
                <MypageCards title="나의 모임" content={<MyMeetings />} link="/mypage/mymeetingsdetail" />*/}
                <MypageCards title="나의 쪽지함" content={<MyMessagebox/>} link="/mypage/mymessagedetail"/>
            </Card>
        </SimpleTemplate>
        </div>
    )
}