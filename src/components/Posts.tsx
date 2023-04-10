import React from "react";
import {PostItem} from "../types/PostItem";
import {faker} from "@faker-js/faker";
import {Post} from "./Post";
import {PopperPlacementType} from "@mui/material";
import {PostPopper} from "./PostPopper";

export const Posts: React.FC = () => {
    const list: Array<PostItem> = [];
    for (let i = 0; i < 100; i++) {
        list.push({
            "postName": faker.name.fullName(),
            "avatarUrl": faker.image.avatar(),
            "postTime": Math.trunc(Math.random() * 60) + "분 전"
        })
    }
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<PopperPlacementType>("auto");

    const handleClick =
        (event: React.MouseEvent<HTMLDivElement>, newPlacement: PopperPlacementType) => {
            setAnchorEl(event.currentTarget);
            setOpen((prev) => placement !== newPlacement || !prev);
            setPlacement(newPlacement);
        };

    return (
        <div style={{width: "100%"}}>
            <PostPopper anchorEl={anchorEl} open={open}
                        onClose={(b: boolean) => {
                            setOpen(b)
                        }} placement={placement}/>
            {list.map((user, idx) =>
                <Post key={idx} postName={user.postName}
                      avatarUrl={user.avatarUrl}
                      postTime={user.postTime}
                      onClick={handleClick}
                />)
            }
        </div>
    )
}
