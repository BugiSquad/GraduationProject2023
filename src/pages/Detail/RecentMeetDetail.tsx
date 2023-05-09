import React from "react";
import {SimpleTemplate} from "../PageTemplate";
import {RecentMeets} from "../../components/RecentMeets";
import {BottomNavigationTab} from "../../types/PageHeaderParam";

export const RecentMeetDetail: React.FC = () => {
    return (
        <SimpleTemplate param={{pageHeaderName: "최근 만남", tab: BottomNavigationTab.MYPAGE}}>
            <div>
                <RecentMeets/>
            </div>
        </SimpleTemplate>
    )
}
