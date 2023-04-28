import React, {useEffect} from "react";
import {Post} from "./Post";
import {PopperPlacementType} from "@mui/material";
import {PostPopper} from "./PostPopper";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {getPostsFromRemote} from "../store/matching/posts";

export const Posts: React.FC = () => {
    const items = useAppSelector((state) => state.postItems)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPostsFromRemote())
    }, [])

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
            {Array.from(items.posts).map((user, idx) =>
                <Post key={idx} title={user.title}
                      memberProfileUrl={user.memberProfileUrl}
                      minutesLeftUntilMeal={user.minutesLeftUntilMeal}
                      onClick={handleClick} index={idx}
                />)
            }
        </div>
    )
}
