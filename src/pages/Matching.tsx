import React from "react";
import {IconButton, Typography} from "@mui/material";
import {AddCircle, FilterAlt} from "@mui/icons-material";
import {PageTemplate} from "./PageTemplate";
import {MatchingFilter} from "./MatchingFilter";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { Posts } from "../components/Posts";

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