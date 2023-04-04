import React from "react";
import {Avatar, Card, Typography} from "@mui/material";

interface PostDetail {
    postName: string;
    avatarUrl: string;
    postTime: string;
}

export const Post: React.FC<PostDetail> = (detail: PostDetail) => {
    return (<>
        <Card sx={{display: "flex", margin: "10px", flex: "1", justifyContent: "space-between", alignItems: "center",}}
              onClick={() => {
                  alert(`${detail.postName} ${detail.postTime}`)
              }}>
            <Avatar src={detail.avatarUrl}/>
            <Typography variant={"body2"}>{detail.postName}</Typography>
            <Typography variant={"subtitle2"}>{detail.postTime}</Typography>
        </Card> </>)
}