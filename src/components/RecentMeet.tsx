import React from "react";
import {Avatar, Card, Typography} from "@mui/material";
import { PostItem } from "../types/PostItem";

function truncate(str: string, n: number): string {
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
};


const str = "10분 뒤에 같이 먹을 사람 구해요";
const truncatedStr = truncate(str, 13);

export const RecentMeet: React.FC<PostItem> = (detail: PostItem) => {
    return (<>
        <Card sx={{paddingLeft:'10px', paddingRight:'10px',display: "flex", margin: "20px", flex: "1", justifyContent: "space-between", alignItems: "center", minWidth: 280, maxWidth:400, borderRadius: '20px',
               }}>
            <Avatar src={detail.avatarUrl}/>
            <Typography variant={"body2"}>{truncatedStr}</Typography>
            <Typography variant={"subtitle2"}>{detail.postTime}</Typography>
        </Card> </>)
}