import React from "react";
import {Avatar, Card, Typography} from "@mui/material";
import { PostItem } from "../types/PostItem";


export const RecentMeet: React.FC<PostItem> = (detail: PostItem) => {
    return (<>
        <Card sx={{paddingLeft:'10px', paddingRight:'10px',display: "flex", margin: "20px", flex: "1", justifyContent: "space-between", alignItems: "center", minWidth: 280, maxWidth:400}}>
            <Avatar src={detail.avatarUrl}/>
            <Typography variant={"body2"}>{'10분 뒤에 같이 먹을 사람 구해요'}</Typography>
            <Typography variant={"subtitle2"}>{detail.postTime}</Typography>
        </Card> </>)
}