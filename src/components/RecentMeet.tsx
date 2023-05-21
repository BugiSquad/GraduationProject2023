import React from "react";
import {Avatar, Card, Typography} from "@mui/material";
import {MeetingInfo} from "./RecentMeets";

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
        <Card sx={{
            paddingLeft: '10px',
            paddingRight: '10px',
            display: "flex",
            margin: "20px",
            flex: "1",
            justifyContent: "space-between",
            alignItems: "center",
            minWidth: 300,
            maxWidth: 400,
            minHeight: 30,
            backgroundColor: '#F4F4F4',
            borderRadius: '15px',
            padding: "0.5rem",
            boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.3)"
        }}>
            <Avatar src={detail.meetingInfo.memberMeetingDto[0].profileUrl}/>
            <Typography variant={"body2"}>{`${detail.meetingInfo.memberMeetingDto[0].name} 와의 약속`}</Typography>
            <Typography variant={"subtitle2"}>{formattedDate}</Typography>
        </Card> </>)
}