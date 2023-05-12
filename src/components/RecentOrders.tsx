import React, { useEffect, useState } from "react";
import { OrderList } from "../types/Order";
import { RecentOrder } from "./RecentOrder";
import { getOrderList } from "../api/Order";
import { Typography } from "@mui/material";
import { normalTypography } from "./styled/Text";

export const RecentOrders: React.FC = () => {
    const [list, setList] = useState<OrderList[]>([]);

    useEffect(() => {
        getOrderList().then((res) => {
            const data = res.data.data.map((item: OrderList) => item)
            setList(data)
            console.log(data)
        }).catch((err) => console.warn(err))
    }, [])
    return (<>
        {list.length > 0 ?
            <div style={{ width: "100%" }}>
                {list.map((item, idx) => {
                    return <RecentOrder key={idx} ordersId={item.ordersId} totalPrice={item.totalPrice}
                        ordersType={item.ordersType}
                        memberId={item.memberId} paymentDto={item.paymentDto}
                        menuOrdersItemDtoList={item.menuOrdersItemDtoList} />
                })}
            </div> : <Typography sx={normalTypography} color={"lightgrey"}>조회 내역이 없습니다.</Typography>}
    </>)
}
