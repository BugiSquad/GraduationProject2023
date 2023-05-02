import React  from "react";
import { SimpleTemplate } from "./PageTemplate";
import { SignupContents } from "../components/SignupContents";

export const Signup: React.FC = () => {
    return (
        <div className="App container">
            <SimpleTemplate param={{ pageHeaderName: "회원가입" }}>
                <SignupContents />
            </SimpleTemplate>
        </div>
    );
};