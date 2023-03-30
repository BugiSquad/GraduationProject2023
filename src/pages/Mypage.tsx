import React from "react";
import { PageTemplate } from "./PageTemplate";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Card, Typography } from "@mui/material";
import { RecentOrders } from "../components/RecentOrders";
import { MypageCards } from "../components/MypageCards";
import { RecentMeets } from "../components/RecentMeets";
import { MyMeetings } from "../components/MyMeetings";
import { MyMessagebox } from "../components/MyMessagebox";


export const Mypage: React.FC = () => {
    return (
        <PageTemplate param={{ variant: "WithName", pageHeaderName: "마이페이지", showBackButton: true }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant={"h6"} fontWeight={'bold'}>
                    <ArrowBackIosNewIcon fontSize="small" /> 마이페이지</Typography>
                <div style={{ display: "inherit", alignItems: "center" }}>
                    <a href="">내 정보 수정</a>
                </div>
            </div>
            <Card sx={{
                minWidth: 200,
                maxWidth: 1000,
                minHeight: 490,
                padding: '10px 10',
                margin: '10px'
            }}>
                <MypageCards title="최근 주문 내역" content={<RecentOrders />} />
                <MypageCards title="최근 만남" content={<RecentMeets />} />
                <MypageCards title="나의 모임" content={<MyMeetings />} />
                <MypageCards title="나의 쪽지함" content={<MyMessagebox />} />
            </Card>
        </PageTemplate>
    )
}
