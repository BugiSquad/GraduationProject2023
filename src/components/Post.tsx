import React from "react";
import {Avatar, Card, PopperPlacementType, Typography} from "@mui/material";
import {useAppDispatch} from "../store/hooks";
import {setSelectedWith} from "../store/matching/posts";

export interface PostDetail {
    title: string;
    memberProfileUrl: string;
    minutesLeftUntilMeal: string;
    index: number;
    onClick: (event: React.MouseEvent<HTMLDivElement>, newPlacement: PopperPlacementType) => void;
}

export const Post: React.FC<PostDetail> = (detail: PostDetail) => {
    const dispatch = useAppDispatch()
    return (<>
        <Card id={detail.index + ""}
              sx={{display: "flex", margin: "10px", flex: "1", justifyContent: "space-between", alignItems: "center",}}
              onClick={(event) => {
                  detail.onClick(event, "auto");
                  dispatch(setSelectedWith(Number(event.currentTarget.id)))
              }}>
            <Avatar src={detail.memberProfileUrl}/>
            <Typography variant={"body2"}>{detail.title}</Typography>
            <Typography variant={"subtitle2"}>{detail.minutesLeftUntilMeal}</Typography>
        </Card> </>)
}