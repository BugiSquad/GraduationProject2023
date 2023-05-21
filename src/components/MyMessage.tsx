import React from "react";
import {Card, Typography} from "@mui/material";
import {Message} from "../types/Message";
import {Link} from "react-router-dom";

export const MyMessage: React.FC<Message> = ({msgLinkTo, isGroup, content, count}) => {
    return (
        <Link to={msgLinkTo} style={{textDecoration: "none"}}>
            <Card sx={{
                paddingLeft: '10px',
                paddingRight: '10px',
                display: "flex",
                margin: "20px",
                justifyContent: "space-between",
                alignItems: "center",
                minWidth: 300,
                maxWidth: 400,
                minHeight: 30,
                backgroundColor: '#F4F4F4',
                borderRadius: '15px',
                padding: "0.5rem",
                boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.3)"

            }}>
                <Typography fontSize={16} fontWeight={"bold"}>{isGroup ? "[단체]" : "[개인]"}</Typography>
                <Typography fontSize={14} fontWeight={"bold"}>{content}</Typography>
                <Typography fontSize={16} fontWeight={"bold"}></Typography>
            </Card>
        </Link>
    )
}