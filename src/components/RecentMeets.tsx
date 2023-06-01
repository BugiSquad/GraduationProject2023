import React, {useEffect, useState} from "react";
import {RecentMeet} from "./RecentMeet";
import {Typography} from "@mui/material";
import {normalTypography} from "./styled/Text";
import {getPromise} from "../api/Promise";
import {Link} from "react-router-dom";

const memberMeeting: MemberMeetingDto[] = [
    {
      id: 1, // 가상 멤버 ID
      name: 1234, // 가상 멤버 이름
      profileUrl: "https://example.com/profile.jpg" // 가상 프로필 URL
    },
    {
      id: 2, // 가상 멤버 ID
      name: 1234, // 가상 멤버 이름
      profileUrl: "https://example.com/profile.jpg" // 가상 프로필 URL
    }
  ];

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
                    <Link style={{textDecoration:"none"}} key={idx} to={`/mypage/recentmeetinfo/${meeting.promiseId}`}><RecentMeet
                        meetingInfo={meeting}></RecentMeet></Link>)
            }
            
        </div>
    )
}
