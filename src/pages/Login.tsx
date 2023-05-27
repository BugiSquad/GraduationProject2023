import React, {useEffect} from "react";
import {SimpleTemplate} from "./PageTemplate";
import {LoginContents} from "../components/LoginContents";
import {BottomNavigationTab} from "../types/PageHeaderParam";
import { OrangeButton, WhiteButton } from "../components/styled/Buttons";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
 
    useEffect(() => {
        console.log("login page is loaded")
    })

  
    return (

        <div className="App container" style={{display: "flex"}}>
            <SimpleTemplate param={{pageHeaderName: "로그인", tab: BottomNavigationTab.APP}}>
                <LoginContents/>
            </SimpleTemplate>
    </div>
  );
};

