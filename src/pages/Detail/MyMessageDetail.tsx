import React from "react";
import { PageTemplate, SimpleTemplate } from "../PageTemplate";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { MyMessage } from "../../components/MyMessage";


export function handleGoBack() {
    window.history.back();
}

export const MyMessageDetail: React.FC = () => {
    return (
        <SimpleTemplate param={{ pageHeaderName: "쪽지함 목록" }}>
            <div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingRight: "20px" }}>
                    <div></div>
                    <IconButton><DeleteOutlineIcon /></IconButton>
                </div>
                <MyMessage content="안녕하세요." date="2022-02-01" />
                <MyMessage content="반갑습니다." date="2022-02-02" />
            </div>
        </SimpleTemplate>
    )
}
