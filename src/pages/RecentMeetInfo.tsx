import React from "react";
import { SimpleTemplate } from "./PageTemplate";
import { BottomNavigationTab } from "../types/PageHeaderParam";
import { MeetingInfo, MemberMeetingDto } from "../components/RecentMeets";
import { useLoaderData } from "react-router-dom";
import { getPromise } from "../api/Promise";
import { Avatar, Card, Typography } from "@mui/material";
import { normalTypography } from "../components/styled/Text";

export const RecentMeetInfo: React.FC = () => {
    return (
        <SimpleTemplate param={{ pageHeaderName: "최근 만남", tab: BottomNavigationTab.MYPAGE }}>
            <div>
                <Content />
            </div>
        </SimpleTemplate>
    )
}

const Content: React.FC = () => {
    const info = useLoaderData() as MeetingInfo
    console.log(info)
    const dateObject: Date = new Date(info.promisedTime);
    const formattedDate: string = `${dateObject.getFullYear()}년 ${dateObject.getMonth() + 1}월 ${dateObject.getDate()}일 ${dateObject.getHours()}시 ${dateObject.getMinutes()}분`;


    return (
        <div style={{ display: "flex", flexDirection: "column", paddingTop:"20px" }}>

            <Card sx={{ minHeight: "600px", flexDirection: "column", marginBottom: "1rem", backgroundColor: "white", color: "black", padding: "24px",borderRadius: "1rem", boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.3)" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography fontWeight={'bold'} fontSize={20}>언제 만났었나요?</Typography>
                    <Typography variant={"subtitle1"}>{formattedDate}</Typography>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingTop: "100px" }}>
                    <Typography fontWeight={'bold'} fontSize={20}>어디서 만났었나요?</Typography>
                    <Typography variant={"subtitle1"}>{info.location}</Typography>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingTop: "100px" }}>
                    <Typography fontWeight={'bold'} fontSize={20}>누구와 만났었나요?</Typography>

                    {info.memberMeetingDto.map((item: MemberMeetingDto) => {
                        return (
                            <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
                                <Avatar src={item.profileUrl}></Avatar>
                                <Typography sx={{ paddingLeft: "20px" }} variant={"subtitle1"}>{item.name}</Typography>
                            </div>)
                    })}
                </div>


            </Card>
        </div>


    )
}

// @ts-ignore
export async function recentMeetInfoLoader({ params }) {
    let id = Number(params.id)
    const meeting = await getPromise();
    const data = meeting.data.data as MeetingInfo[]
    return { ...data.filter((item: MeetingInfo) => item.promiseId === id)[0] }
}