import React, {useState} from "react";
import {faker} from "@faker-js/faker"
import {Post} from "../components/Post";
import {IconButton, Typography} from "@mui/material";
import {AddCircle, FilterAlt} from "@mui/icons-material";
import {PageTemplate} from "./PageTemplate";
import {MatchingFilter} from "./MatchingFilter";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import {DrawerContainer, DrawerType} from "../components/DrawerContainer";
import {CreateMatch} from "./CreateMatch";

export const Matching: React.FC = () => {
    return (
        <PageTemplate param={{variant: "WithName", pageHeaderName: "매칭", showBackButton: true}}>
            <Contents/>
        </PageTemplate>)
}

const Contents: React.FC = () => {
    const [state, setState] = useState(false);
    const [state2, setState2] = useState(false);
    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')) {
                return;
            }
            setState(open);
        };
    const toggleDrawer2 = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')) {
                return;
            }
            setState2(open);
        };
    return (<>
        <div style={{display: "flex", flexDirection: "column", width: "90%"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <div style={{display: "inherit", alignItems: "center"}}>
                    <LocalDiningIcon/>
                    <Typography variant={"h6"} fontWeight={"bold"}>같이 먹어요!</Typography>
                </div>
                <div style={{display: "inherit", alignItems: "center"}}>
                    <IconButton onClick={toggleDrawer2(true)}>
                        <AddCircle style={{color: "orange"}}/>
                    </IconButton>
                    <IconButton onClick={toggleDrawer(true)}>
                        <FilterAlt style={{color: "orange"}}/>
                    </IconButton>
                    <DrawerContainer param={{type: DrawerType.BOTTOM, setState: toggleDrawer2, state: state2}}>
                        <CreateMatch/>
                    </DrawerContainer>
                    <DrawerContainer param={{type: DrawerType.BOTTOM, setState: toggleDrawer, state: state}}>
                        <MatchingFilter/>
                    </DrawerContainer>
                </div>
            </div>
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
