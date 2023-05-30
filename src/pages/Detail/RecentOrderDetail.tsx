import React, {useEffect, useState} from "react";

import {SimpleTemplate} from "../PageTemplate";
import {RecentOrders} from "../../components/RecentOrders";
import {PageCards} from "../../components/PageCards";
import {BottomNavigationTab} from "../../types/PageHeaderParam";
import {OrderList, toOrderStatus} from "../../types/Order";
import {getOrderList} from "../../api/Order";

export const RecentOrderDetail: React.FC = () => {

    const [list, setList] = useState<OrderList[]>([]);

    useEffect(() => {
        getOrderList().then((res) => {
            const data = res.data.data.map(
                (item: OrderList) => ({...item, ordersType: toOrderStatus(item.ordersType)})
            )
            setList(data)
        }).catch((err) => console.warn(err))
    }, [])

    return (
        <SimpleTemplate param={{pageHeaderName: "최근 주문 내역", tab: BottomNavigationTab.MYPAGE}}>
            <div style={{paddingTop: "20px"}}>
                {/*<PageCards title="조회 조건" content={<InquiryPeriodContent/>}/>*/}
                <PageCards title="조회 내역" content={<RecentOrders list={list}/>}/>
            </div>
        </SimpleTemplate>
    )
}
