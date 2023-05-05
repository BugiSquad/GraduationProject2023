import React from "react";
import { SimpleTemplate } from "./PageTemplate";
import { UserInfoFrame } from "../components/UserInfoFrame";
import { UserInfo } from "../types/UserInfo";



export const Signup: React.FC = () => {
    return (
        <div className="App container">
            <SimpleTemplate param={{ pageHeaderName: "회원가입" }}>
                <UserInfoFrame name={""} email={""} userprofilePic={null} isEdit={false} />
            </SimpleTemplate>
        </div>
    );
};