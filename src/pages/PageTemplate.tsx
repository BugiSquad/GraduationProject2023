import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, Typography} from "@mui/material";
import {MainPage} from "./MainPage";
import {BottomNavigationGroup} from "../components/BottomNavigationGroup";
import React, {FC, ReactNode} from "react";

interface PageTemplateProps {
    children: ReactNode;
}

export const PageTemplate: FC<{children:ReactNode}> = ({ children }) => {
    return (<div className="App container">
        <br/>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: "1rem",
            paddingLeft: '1rem',
            paddingRight: '1rem'
        }}>
            <MenuIcon></MenuIcon>
            <Typography variant={"h5"} fontFamily={"serif"}>한성맛남</Typography>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
        </div>
        <br/>
        {children}
        <BottomNavigationGroup/>
    </div> )

}
