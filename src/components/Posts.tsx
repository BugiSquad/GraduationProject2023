import React, {useEffect} from "react";
import {Post} from "./Post";
import {PopperPlacementType} from "@mui/material";
import {PostPopper} from "./PostPopper";
import {clearPosts, getPostsFromRemote} from "../store/matching/posts";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {faker} from "@faker-js/faker";

export const Posts: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<PopperPlacementType>("auto");

    const state = useAppSelector(state => state.postItems.posts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(clearPosts())
        dispatch(getPostsFromRemote())
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLDivElement>, newPlacement: PopperPlacementType) => {
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
            {Array.from(state).map((user, idx) =>
                <Post key={idx} title={"밥 먹어요"}
                      memberProfileUrl={faker.image.avatar()}
                    // memberProfileUrl={user.memberProfileUrl}
                      minutesLeftUntilMeal={Number(user.minutesLeftUntilMeal)}
                      interest={user.interest}
                      onClick={handleClick} index={idx}
                />)
            }
        </div>
    )
}
