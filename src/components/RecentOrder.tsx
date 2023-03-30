import React from "react";
import {Card, Typography} from "@mui/material";
import { Order } from "../types/Order";

export const RecentOrder: React.FC<Order> = (detail:Order) => {
    return (<>
        <Card sx={{display: "flex", margin: "10px", flex: "1", justifyContent: "space-between", alignItems: "center",}}>
            <Typography variant={"body2"}>{detail.order_detail}</Typography>
            <Typography variant={"subtitle2"}>{detail.order_status}</Typography>
        </Card> </>)
}