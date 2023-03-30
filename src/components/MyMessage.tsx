import React from "react";
import { Card, Typography } from "@mui/material";
import { EmailOutlined } from '@mui/icons-material';
import { Message } from "../types/Message";

export const MyMessage: React.FC<Message> = (detail: Message) => {
    return (
        <Card sx={{
            paddingLeft: '10px',
            paddingRight: '10px',
            display: "flex",
            margin: "20px",
            flex: "1",
            justifyContent: "space-between",
            alignItems: "center",
            minWidth: 280,
            maxWidth: 400
        }}>
            <EmailOutlined color="primary" sx={{ fontSize: 30 }} />
            <Typography variant={"body2"}>{detail.content}</Typography>
            <Typography variant={"subtitle2"}>{detail.date}</Typography>
        </Card>
    )
}