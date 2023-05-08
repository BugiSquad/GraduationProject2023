import {Avatar, IconButton, Typography} from "@mui/material";
import {AddCircle, FilterAlt} from "@mui/icons-material";
import React from "react";

export const PostsHeader = () => {
    return (<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <div style={{display: "inherit", alignItems: "center"}}>
            <Avatar src={"https://www.svgrepo.com/download/265489/tray-dinner.svg"}/>
            <Typography variant={"h6"} fontWeight={"bold"}>같이 먹어요!</Typography>
        </div>
        <div style={{display: "inherit", alignItems: "center"}}>
            <IconButton style={{background: "#FE724C"}}><AddCircle
                style={{background: "#FE724C", color: "white"}}/></IconButton>
            <IconButton style={{background: "#FE724C"}}><FilterAlt style={{color: "white"}}/></IconButton>
        </div>
    </div>)
}
