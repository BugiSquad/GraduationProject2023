import React from "react";
import { PageTemplate, SimpleTemplate } from "../PageTemplate";
import { RecentMeets } from "../../components/RecentMeets";

export const RecentMeetDetail: React.FC = () => {
    return (
        <SimpleTemplate param={{ pageHeaderName: "최근 만남" }}>
            <div>
                <RecentMeets />
            </div>
        </SimpleTemplate>
    )
}
