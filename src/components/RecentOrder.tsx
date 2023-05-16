import React from "react";
import {Card, Typography} from "@mui/material";
import {OrderList} from "../types/Order";

export const RecentOrder: React.FC<OrderList> = (detail: OrderList) => {
    return (<>
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
            <Typography variant={"subtitle2"} fontWeight='bold'>{detail.ordersId}</Typography>
            <Typography
                variant={"subtitle2"}>{detail.paymentDto.detail != null ? detail.paymentDto.detail : ""}</Typography>
            <Typography variant={"subtitle2"} fontWeight='bold'
                        style={{color: "#FE724C"}}>{detail.ordersType}</Typography>
        </Card> </>)
}