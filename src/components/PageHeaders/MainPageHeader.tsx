import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import logo from '../../images/logo.png';


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
            <Link to={"/app"}><img src={logo} style={{ paddingTop:"10px", width: '50%', height: '50%', objectFit: 'cover' }}/></Link>
            <Link to={"/login"} style={{color:"black", fontSize:"14px"}}>로그인하기</Link>
            {/* <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/> */}
        </div>)
}
