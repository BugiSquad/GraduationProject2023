import React from "react";
import {PostItem} from "../types/PostItem";
import {faker} from "@faker-js/faker";
import {Post} from "./Post";
import { Order, OrderStatus } from "../types/Order";

export const RecentOrders: React.FC = () => {
    const list: Array<Order> = [];
    const list_status: Array<OrderStatus> = [];
    for (let i = 0; i < 100; i++) {
        list.push({
            "order_id": faker.finance.account(),
            "order_detail": faker.random.word(),
            "order_status": list_status[(Math.random() * 60)/2]+""
        })
    }
    return (
        <div style={{width: "100%"}}>
            {list.map((user, idx) =>
                <Post key={idx} postName={user.postName} avatarUrl={user.avatarUrl} postTime={user.postTime}/>)
            }
        </div>
    )
}
