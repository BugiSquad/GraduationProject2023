import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

interface PageHeaderParam {
    pageHeaderName: String;
    variant: String;
    showBackButton: Boolean;
}

export const MainPageHeader: React.FC<PageHeaderParam>
    = (pageHeaderParam: PageHeaderParam) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: "1rem",
            paddingLeft: '1rem',
            paddingRight: '1rem'
        }}>
            <MenuIcon></MenuIcon>
            <Link to={"/app"}><Typography variant={"h5"} fontWeight={'bold'} fontFamily={"sans-serif"}>한성맛남</Typography></Link>
            <Link to={"/login"} style={{color:"black", fontSize:"10px"}}>로그인하기</Link>
            {/* <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/> */}
        </div>)
}
