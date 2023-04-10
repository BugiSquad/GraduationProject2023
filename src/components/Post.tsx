import React from "react";
import {Avatar, Card, PopperPlacementType, Typography} from "@mui/material";

export interface PostDetail {
    postName: string;
    avatarUrl: string;
    postTime: string;
    onClick: (event: React.MouseEvent<HTMLDivElement>, newPlacement: PopperPlacementType) => void;
}

export const Post: React.FC<PostDetail> = (detail: PostDetail) => {

    return (<>
        <Card sx={{display: "flex", margin: "10px", flex: "1", justifyContent: "space-between", alignItems: "center",}}
              onClick={(event) => {
                  detail.onClick(event, "auto");
              }}>
            <Avatar src={detail.avatarUrl}/>
            <Typography variant={"body2"}>{detail.postName}</Typography>
            <Typography variant={"subtitle2"}>{detail.postTime}</Typography>
        </Card> </>)
}