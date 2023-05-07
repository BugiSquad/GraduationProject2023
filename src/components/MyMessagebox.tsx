import React from "react";
import { MyMessage } from "./MyMessage";

export const MyMessagebox: React.FC = () => {
    return (
        <div>
            <MyMessage content="안녕하세요." count={2} isGroup={false} msgLinkTo={""} />
        </div>

    )
}