import React from "react";
import {SimpleTemplate} from "./PageTemplate";
import {BottomNavigationTab} from "../types/PageHeaderParam";
import {MeetingInfo, MemberMeetingDto} from "../components/RecentMeets";
import {useLoaderData} from "react-router-dom";
import {getPromise} from "../api/Promise";
import {Avatar, Card, Typography} from "@mui/material";

export const RecentMeetInfo: React.FC = () => {
    return (
        <SimpleTemplate param={{pageHeaderName: "최근 만남", tab: BottomNavigationTab.MYPAGE}}>
            <div>
                <Content/>
            </div>
        </SimpleTemplate>
    )
}

const Content: React.FC = () => {
    const info = useLoaderData() as MeetingInfo
    console.log(info)
    return (
        <Card>
            <Typography variant={"subtitle1"}>{info.promisedTime}</Typography>
            <Typography variant={"subtitle1"}>{info.location}</Typography>
            {info.memberMeetingDto.map((item: MemberMeetingDto) => {
                return (
                    <div>
                        <Avatar src={item.profileUrl}></Avatar>
                        <Typography variant={"subtitle1"}>{item.name}</Typography>
                    </div>)
            })}
        </Card>
    )
}

// @ts-ignore
export async function recentMeetInfoLoader({params}) {
    let id = Number(params.id)
    const meeting = await getPromise();
    const data = meeting.data.data as MeetingInfo[]
    return {...data.filter((item: MeetingInfo) => item.promiseId === id)[0]}
}