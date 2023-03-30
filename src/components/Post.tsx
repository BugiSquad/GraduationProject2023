import React from "react";
import {Avatar, Card, Typography} from "@mui/material";
import { PostItem } from "../types/PostItem";


export const Post: React.FC<PostItem> = (detail: PostItem) => {
    return (<>
        <Card sx={{display: "flex", margin: "10px", flex: "1", justifyContent: "space-between", alignItems: "center",}}>
            <Avatar src={detail.avatarUrl}/>
            <Typography variant={"body2"}>{detail.postName}</Typography>
            <Typography variant={"subtitle2"}>{detail.postTime}</Typography>
        </Card> </>)
}