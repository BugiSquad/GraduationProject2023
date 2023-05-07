import React from "react";
import {Avatar, Card, Typography} from "@mui/material";
import {PostItem} from "../types/PostItem";

function truncate(str: string, n: number): string {
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
}


const str = "10분 뒤에 같이 먹을 사람 구해요";
const truncatedStr = truncate(str, 13);

export const RecentMeet: React.FC<PostItem> = (detail: PostItem) => {
    return (<>
        <Card sx={{paddingLeft: '10px',
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
                boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.3)"}}>
            <Avatar src={detail.memberProfileUrl}/>
            <Typography variant={"body2"}>{truncatedStr}</Typography>
            <Typography variant={"subtitle2"}>{detail.minutesLeftUntilMeal}</Typography>
        </Card> </>)
}