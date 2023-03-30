import React from "react";
import {faker} from "@faker-js/faker";
import { Order, OrderStatus } from "../types/Order";
import { RecentOrder } from "./RecentOrder";

export const RecentOrders: React.FC = () => {
    const list: Array<Order> = [];
    const list_status: Array<OrderStatus> = [];

    for (let i = 0; i < 5; i++) {
        list.push({
            "order_id": faker.finance.account(),
            "order_detail": faker.random.word(),
            "order_status": list_status[0], //데이터타입때문에 일단 이렇게 넣었습니다.
            "order_time": new Date(),
            total_price: 0,
            member_id: 0,
            shop_id: 0,
            payment_id: 0
        })
    }
    return (
        <div style={{width: "100%"}}>
            {list.map((user, idx) =>
                <RecentOrder key={idx} 
                order_id={user.order_id} 
                order_detail={user.order_detail} 
                order_status={user.order_status} 
                order_time={new Date()} 
                total_price={0} 
                member_id={0} 
                shop_id={0} 
                payment_id={0}/>)
            }
        </div>
    )
}
