import React from "react";
import { Card, Typography } from "@mui/material";
import { Message } from "../types/Message";
import { Link } from "react-router-dom";
import { normalCard } from "./styled/Cards";

export const MyMessage: React.FC<Message> = ({ msgLinkTo, isGroup, content, count }) => {
    return (
        <Link to={msgLinkTo} style={{ textDecoration: "none" }}>
            <Card sx={normalCard}>
                <Typography fontSize={16} fontWeight={"bold"}>{isGroup ? "[단체]" : "[개인]"}</Typography>
                <Typography fontSize={14} fontWeight={"bold"}>{content}</Typography>
                <Typography fontSize={16} fontWeight={"bold"}></Typography>
            </Card>
        </Link>
    )
}