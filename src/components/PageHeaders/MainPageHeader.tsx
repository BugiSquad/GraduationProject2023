import {Avatar} from "@mui/material";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from '../../images/logo.png';
import {getMyID, getMyToken} from "../../api/Common";
import profilePic from '../../images/default.png'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface PageHeaderParam {
    pageHeaderName: String;
    variant: String;
    showBackButton: Boolean;
}

export const MainPageHeader: React.FC<PageHeaderParam>
    = (pageHeaderParam: PageHeaderParam) => {

    const navigate = useNavigate()
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: "1rem",
            paddingLeft: '1rem',
            paddingRight: '1rem'
        }}>
            <ShoppingCartIcon onClick={() => navigate("/cart")}></ShoppingCartIcon>
            <Link to={"/app"} onClick={() => {
                console.log(getMyID(), getMyToken())
            }}><img src={logo} style={{paddingTop: "10px", width: '50%', height: '50%', objectFit: 'cover'}}/></Link>
            {((getMyID()) != -1) ? <Link to={"/mypage"} onClick={() => {
                    console.log(getMyID())
                }}><Avatar src={profilePic}></Avatar></Link> :
                <Link to={"/login"} style={{color: "black", fontSize: "14px"}}>로그인하기</Link>}
        </div>)
}
