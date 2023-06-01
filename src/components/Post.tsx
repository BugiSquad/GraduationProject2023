import React from "react";
import { Avatar, Card, Chip, PopperPlacementType, Typography } from "@mui/material";
import { normalCard } from "./styled/Cards";

export interface PostDetail {
    title: string;
    memberProfileUrl: string;
    minutesLeftUntilMeal: number;
    index: number;
    interest: string[];
    onClick: (event: React.MouseEvent<HTMLDivElement>, newPlacement: PopperPlacementType) => void;
}

export const Post: React.FC<PostDetail> = (detail: PostDetail) => {
    if (detail.minutesLeftUntilMeal < 0) return <></>
    return (<>
        <Card id={detail.index + ""}
            sx={{ ...normalCard, marginLeft: "0px", marginRight: "0px", backgroundColor: "#fca992", borderRadius: "2rem", padding:"13px" }}
            onClick={(event) => {
                detail.onClick(event, "auto");
            }}>
            <Avatar src={detail.memberProfileUrl == null ? "" : detail.memberProfileUrl} />
            <Typography sx={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", width: "100px" }}
                variant={"body2"} fontSize={13}
                fontWeight={'bold'}>{detail.title}</Typography>
            <div>
                <HobbyChips interest={detail.interest}></HobbyChips>
            </div>
            <Typography variant={"subtitle2"}>{getTimeFrom(detail.minutesLeftUntilMeal)} 후</Typography>
        </Card> </>)
}
const sx = {
    margin: "3px"
}
export const HobbyChips: React.FC<{ interest: string[] }> = (props) => {
    if (props.interest.length === 0) return (<></>)
    else if (props.interest.length === 1) return (<Chip sx={sx} label={props.interest[0]} />)
    else
        return (<>
            <Chip sx={sx} label={props.interest[0]} />
            <Chip sx={sx} label={`${props.interest.length - 1}+`}></Chip>
        </>)
}
export const getTimeFrom = (minutesLeftUntilMeal: number): string => {
    const hours = Math.floor(minutesLeftUntilMeal / 60)
    const minutes = minutesLeftUntilMeal % 60
    if (hours >= 24) return `${Math.floor(hours / 24)}일`
    if (hours >= 1) return `${Math.floor(hours)}시간`
    else return `${Math.floor(minutes)}분`
}