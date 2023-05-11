import React, {useEffect, useState} from "react";
import {OrderList} from "../types/Order";
import {RecentOrder} from "./RecentOrder";
import {getOrderList} from "../api/Order";

export const RecentOrders: React.FC = () => {
    const [list, setList] = useState<OrderList[]>([]);

    useEffect(() => {
        getOrderList().then((res) => {
            const data = res.data.data.map((item: OrderList) => item)
            setList(data)
            console.log(data)
        })
    }, [])
    return (
        <div style={{width: "100%"}}>
            {list.map((item, idx) => {
                return <RecentOrder key={idx} ordersId={item.ordersId} totalPrice={item.totalPrice}
                                    ordersType={item.ordersType}
                                    memberId={item.memberId} paymentDto={item.paymentDto}
                                    menuOrdersItemDtoList={item.menuOrdersItemDtoList}/>
            })}
        </div>
    )
}
