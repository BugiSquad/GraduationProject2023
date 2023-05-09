import React from "react";
import { SimpleTemplate } from "../PageTemplate";
import { RecentOrders } from "../../components/RecentOrders";
import { PageCards } from "../../components/PageCards";
import { InquiryPeriodContent } from "../../components/inquiryPeriod";


export const RecentOrderDetail: React.FC = () => {
    return (
        <SimpleTemplate param={{ pageHeaderName: "최근 주문 내역" }}>
            <div style={{ paddingTop: "20px" }}>
                <PageCards title="조회 조건" content={<InquiryPeriodContent />} />
                    

                <PageCards title="조회 내역" content={<RecentOrders />} />
            </div>
        </SimpleTemplate>
    )
}
