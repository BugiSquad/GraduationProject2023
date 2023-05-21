import React, {useEffect, useState} from "react";
import {RecentMeet} from "./RecentMeet";
import {Typography} from "@mui/material";
import {normalTypography} from "./styled/Text";
import {getPromise} from "../api/Promise";

export interface MemberMeetingDto {
    id: number;
    name: number;
    profileUrl: string;
}

export interface MeetingInfo {
    promiseId: number;
    location: string;
    promisedTime: string; // LocalDateTime은 문자열로 표현됩니다.
    memberMeetingDto: MemberMeetingDto[];
}

export const RecentMeets: React.FC = () => {
    const [meetingInfo, setMeetingInfo] = useState<MeetingInfo[]>([])
    useEffect(() => {
        getPromise().then((res) => {
            const data = res.data.data as MeetingInfo[]
            setMeetingInfo(data)
            console.log(data)
        })
    }, [])
    return (
        <div style={{width: "100%"}}>
            {meetingInfo.length === 0 ? <Typography sx={normalTypography} color={"lightgrey"}>최근 만남이
                없습니다.</Typography> : meetingInfo.map(
                (meeting, idx) =>
                    <RecentMeet key={idx} meetingInfo={meeting}></RecentMeet>)
            }
        </div>
    )
}
