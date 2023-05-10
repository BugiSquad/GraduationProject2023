import React from "react";
import {SimpleTemplate} from "../PageTemplate";
import {MyMeetings} from "../../components/MyMeetings";
import {BottomNavigationTab} from "../../types/PageHeaderParam";

export const MyMeetingsDetail: React.FC = () => {
    return (
        <SimpleTemplate param={{pageHeaderName: "나의 모임", tab: BottomNavigationTab.MYPAGE}}>
            <div>
                <MyMeetings/>
            </div>
        </SimpleTemplate>
    )
}
