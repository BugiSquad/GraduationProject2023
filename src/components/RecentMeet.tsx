import React from "react";
import {Avatar, Card, Typography} from "@mui/material";
import {MeetingInfo} from "./RecentMeets";
import { normalCard } from "./styled/Cards";

interface RecentMeetProps {
    meetingInfo: MeetingInfo
}

export const RecentMeet: React.FC<RecentMeetProps> = (detail) => {
    const date = new Date(detail.meetingInfo.promisedTime)
    const year = String(date.getFullYear()).substring(2, 4);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}년 ${month}월 ${day}일`;
    return (<>
        <Card sx={normalCard}>
            <Avatar src={detail.meetingInfo.memberMeetingDto[0].profileUrl}/>
            <Typography variant={"body2"}>{`${detail.meetingInfo.memberMeetingDto[0].name} 와의 약속`}</Typography>
            <Typography variant={"subtitle2"}>{formattedDate}</Typography>
        </Card> </>)
}