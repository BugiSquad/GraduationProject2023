import React from "react";
import {Avatar, Card, Chip, PopperPlacementType, Typography} from "@mui/material";
import {useAppDispatch} from "../store/hooks";
import {setSelectedWith} from "../store/matching/posts";

export interface PostDetail {
    title: string;
    memberProfileUrl: string;
    minutesLeftUntilMeal: number;
    index: number;
    interest: string[];
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
            <Avatar src={detail.memberProfileUrl == null ? "" : detail.memberProfileUrl}/>
            <Typography variant={"body2"}>{detail.title}</Typography>
            {detail.interest.map((interest, idx) => <Chip label={`#${interest}`}></Chip>)}
            <Typography variant={"subtitle2"}>{getTimeFrom(detail.minutesLeftUntilMeal)}전</Typography>
        </Card> </>)
}
const getTimeFrom = (minutesLeftUntilMeal: number): string => {
    const hours = Math.floor(minutesLeftUntilMeal / 60)
    const minutes = minutesLeftUntilMeal % 60
    if (hours >= 1) return `${hours}시간 ${minutes}분`
    else return `${minutes}분`
}