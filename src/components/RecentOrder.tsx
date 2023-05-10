import React from "react";
import {Card, Typography} from "@mui/material";
import {OrderList, OrderStatus} from "../types/Order";

const randomStatus = () => {
    const statuses = Object.values(OrderStatus); // OrderStatus 열거형 값 배열
    const randomIndex = Math.floor(Math.random() * statuses.length); // 0부터 statuses.length - 1 까지의 랜덤한 인덱스 생성
    return statuses[randomIndex]; // 랜덤한 인덱스에 해당하는 OrderStatus 값 반환
};
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
            <Typography variant={"subtitle2"} fontWeight='bold' style={{color: "#FE724C"}}>{randomStatus()}</Typography>
        </Card> </>)
}