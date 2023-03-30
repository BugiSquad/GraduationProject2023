import React from "react";
import {faker} from "@faker-js/faker"
import {Post} from "../components/Post";
import {IconButton, Typography} from "@mui/material";
import {AddCircle, FilterAlt} from "@mui/icons-material";
import {PageTemplate} from "./PageTemplate";
import {MatchingFilter} from "./MatchingFilter";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

export const Matching: React.FC = () => {
    return (<PageTemplate param={{variant: "WithName", pageHeaderName: "매칭", showBackButton: true}}>
        <Contents/>
    </PageTemplate>)
}
const Contents: React.FC = () => {
    return (<>
        <div style={{display: "flex", flexDirection: "column", width: "90%"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <div style={{display: "inherit", alignItems: "center"}}>
                    <LocalDiningIcon/>
                    <Typography variant={"h6"} fontWeight={"bold"}>같이 먹어요!</Typography>
                </div>
                <div style={{display: "inherit", alignItems: "center"}}>
                    <IconButton><AddCircle style={{color: "orange"}}/></IconButton>
                    <IconButton><FilterAlt style={{color: "orange"}}/></IconButton>
                </div>
            </div>
            <MatchingFilter></MatchingFilter>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Posts/>
            </div>
        </div>
    </>)
}
export const Posts: React.FC = () => {
    const list: Array<Post> = [];
    for (let i = 0; i < 100; i++) {
        list.push({
            "name": faker.name.fullName(),
            "avatar": faker.image.avatar(),
            "postTime": Math.trunc(Math.random() * 60) + "분 전"
        })
    }
    return (<>
        <div style={{width: "100%"}}>
            {list.map((user, idx) =>
                <Post key={idx} postName={user.name} avatarUrl={user.avatar} postTime={user.postTime}/>)
            }
        </div>
    </>)
}

interface Post {
    name: string;
    avatar: string;
    postTime: string;
}
