import React from "react";
import {IconButton, Typography} from "@mui/material";
import {AddCircle, FilterAlt} from "@mui/icons-material";
import {PageTemplate, SimpleTemplate} from "./PageTemplate";
import {MatchingFilter} from "./MatchingFilter";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { Posts } from "../components/Posts";

export const Matching: React.FC = () => {
    return (<SimpleTemplate param={{ pageHeaderName: "매칭"}}>
        <Contents/>
    </SimpleTemplate>)
}
const Contents: React.FC = () => {
    return (<>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <div style={{display: "inherit", alignItems: "center"}}>
                    <LocalDiningIcon/>
                    <Typography variant={"body1"} fontWeight={"bold"}>같이 먹어요!</Typography>
                </div>
                <div style={{display: "inherit", alignItems: "center"}}>
                    <IconButton><AddCircle style={{color: '#FE724C'}}/></IconButton>
                    <IconButton><FilterAlt style={{color: '#FE724C'}}/></IconButton>
                </div>
            </div>
            <MatchingFilter></MatchingFilter>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Posts/>
            </div>
        </div>
    </>)
}