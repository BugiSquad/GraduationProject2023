import React from "react";
import { Badge, Card, Typography } from "@mui/material";
import { EmailOutlined } from '@mui/icons-material';
import { Message } from "../types/Message";
import { Link } from "react-router-dom";

export const MyMessage: React.FC<Message> = (detail: Message) => {
    return (
        <Link to="/mypage/message">
            <Card sx={{
                paddingLeft: '10px',
                paddingRight: '10px',
                display: "flex",
                margin: "20px",
                flex: "1",
                justifyContent: "space-between",
                alignItems: "center",
                minWidth: 300,
                maxWidth: 400,
                minHeight: 30,
                borderRadius: '15px',

            }}>
                <Badge color="secondary" variant="dot" sx={{ maxHeight: "10px" }}>
                    <EmailOutlined color="primary" sx={{ fontSize: 30, maxHeight: "18px" }} />
                </Badge>

                <Typography variant={"body2"}>{detail.content}</Typography>
                <Typography variant={"subtitle2"}>{detail.date}</Typography>
            </Card>
        </Link>
    )
}