import React from "react";
import {PageTemplate, SimpleTemplate} from "../PageTemplate";
import { MyMeetings } from "../../components/MyMeetings";

export const MyMeetingsDetail: React.FC = () => {
    return (
        <SimpleTemplate param={{ pageHeaderName: "나의 모임" }}>
            <div>
                <MyMeetings />
            </div>
        </SimpleTemplate>
    )
}
