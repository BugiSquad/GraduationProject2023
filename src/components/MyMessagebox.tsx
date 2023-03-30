import React from "react";
import { MyMessage } from "./MyMessage";

export const MyMessagebox: React.FC = () => {
    return (
        <div>
            <MyMessage content="안녕하세요." date="2022-02-01" />
            <MyMessage content="반갑습니다." date="2022-02-02" />
            <MyMessage content="언제 만나요?" date="2022-02-03" />
        </div>

    )
}