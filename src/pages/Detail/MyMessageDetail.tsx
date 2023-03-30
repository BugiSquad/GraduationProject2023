import React from "react";
import {PageTemplate} from "../PageTemplate";

export const MyMessageDetail: React.FC = () => {
    return (
        <PageTemplate param={{variant: "WithName", pageHeaderName: "나의 쪽지함", showBackButton: true}}>
            <div>
            </div>
        </PageTemplate>
    )
}
