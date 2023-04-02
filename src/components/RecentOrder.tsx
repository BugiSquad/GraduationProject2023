import React from "react";
import { Card, Typography } from "@mui/material";
import { Order, OrderStatus } from "../types/Order";

const randomStatus = () => {
    const statuses = Object.values(OrderStatus); // OrderStatus 열거형 값 배열
    const randomIndex = Math.floor(Math.random() * statuses.length); // 0부터 statuses.length - 1 까지의 랜덤한 인덱스 생성
    return statuses[randomIndex]; // 랜덤한 인덱스에 해당하는 OrderStatus 값 반환
};

const getRandomFood = () => {
    const foodList = [
        "돈까스카레동","에비카레동","치킨가라아카레동","간장돼불덮밥","참치마요",
        "매콤참치마요","새우튀김알밥","제육덮밥","소불고기잡채밥","등심돈까스",
        "치즈돈까스","소떡소떡","닭강정","오므라이스","양념치킨오므라이스",
        "함박스테이크오므라이스","돈까스오므라이스","대왕소시지오므라이스","라면",
        "치즈라면", "유부우동", "꼬치어묵우동","새우튀김우동","돈까스우동정식",
        "존슨부대찌개", "치즈존슨부대찌개", "공기밥"
    ];
    const randomIndex = Math.floor(Math.random() * foodList.length);
    return foodList[randomIndex];
}

export const RecentOrder: React.FC<Order> = (detail: Order) => {
    return (<>
        <Card sx={{ paddingLeft: '10px', paddingRight: '10px', display: "flex", margin: "20px", flex: "1", justifyContent: "space-between", alignItems: "center", minWidth: 280, maxWidth: 400 }}>
            <Typography variant={"subtitle2"} fontWeight='bold'>{detail.order_id}</Typography>
            <Typography variant={"subtitle2"}>{getRandomFood()}</Typography>
            <Typography variant={"subtitle2"} fontWeight='bold' style={{ color: "#FE724C" }}>{randomStatus()}</Typography>
        </Card> </>)
}