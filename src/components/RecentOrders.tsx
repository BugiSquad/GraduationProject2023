import React from "react";
import {OrderList} from "../types/Order";
import {RecentOrder} from "./RecentOrder";
import {Typography} from "@mui/material";
import {normalTypography} from "./styled/Text";


export const RecentOrders: React.FC<{ list: OrderList[] }> = (props) => {
    return (<div style={{width: "100%"}}>
        {props.list.length > 0 ?
            <div style={{width: "100%"}}>
                {props.list.map((item, idx) => {
                    return <RecentOrder key={idx} ordersId={item.ordersId} totalPrice={item.totalPrice}
                                        ordersType={item.ordersType}
                                        paymentDto={item.paymentDto}
                                        menuOrdersItemDtoList={item.menuOrdersItemDtoList}/>
                })}
            </div> : <Typography sx={normalTypography} color={"lightgrey"}>조회 내역이 없습니다.</Typography>}
    </div>)
}
