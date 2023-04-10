import React from "react";
import { SimpleTemplate} from "../PageTemplate";
import { RecentOrders } from "../../components/RecentOrders";

export const RecentOrderDetail: React.FC = () => {
    return (
        <SimpleTemplate param={{ pageHeaderName: "최근 주문 내역"}}>
            <div>
                <RecentOrders />
            </div>
        </SimpleTemplate>
    )
}
