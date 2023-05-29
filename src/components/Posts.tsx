import React, {useEffect, useState} from "react";
import {PopperPlacementType} from "@mui/material";
import {getPosts} from "../api/Post";
import {PostItem} from "../types/PostItem";
import {PostPopper} from "./PostPopper";
import {Post} from "./Post";

interface PostsProps {
    queryString: string
}

export const Posts: React.FC<PostsProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<PopperPlacementType>("auto");

    // const state = useAppSelector(state => state.postItems.posts)
    const [posts, setPosts] = useState<PostItem[]>([])
    const [selected, setSelected] = useState<PostItem>({} as PostItem)

    useEffect(() => {
        getPosts(props.queryString).then(res => {
            const data = res.data.data.content.map((item: PostItem) => item);
            setPosts(data)
        })
    }, [props.queryString])

    const handleClick = (event: React.MouseEvent<HTMLDivElement>, newPlacement: PopperPlacementType, selected: PostItem) => {
        setAnchorEl(event.currentTarget);
        setSelected(selected)
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return (
        <div style={{width: "100%"}}>
            <PostPopper anchorEl={anchorEl} open={open}
                        onClose={(b: boolean) => {
                            setOpen(b)
                        }} placement={placement}
                        postItem={selected}
            />
            {posts.sort((a, b) => Number(a.minutesLeftUntilMeal) - Number(b.minutesLeftUntilMeal)).map((postItem, idx) => {
                // console.log(postItem);
                return (<><Post key={idx} title={`${postItem.title}`}
                                memberProfileUrl={`${postItem.memberProfileUrl == null ? "" : postItem.memberProfileUrl}`}
                                minutesLeftUntilMeal={Number(postItem.minutesLeftUntilMeal)}
                                interest={postItem.interest}
                                onClick={(event, newPlacement) => {
                                    handleClick(event, newPlacement, postItem)
                                }} index={idx}
                /></>)
            })}
        </div>
    )
}
