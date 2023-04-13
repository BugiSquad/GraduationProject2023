import React, { useEffect } from "react";
import { SimpleTemplate } from "./PageTemplate";
import { SignupContents } from "../components/SignupContents";

export const Signup: React.FC = () => {
    useEffect(()=>{
        console.log("signup page is loaded")
    })
    return (
        <div className="App container" style={{  }}>
            <SimpleTemplate param={{ pageHeaderName: "회원가입" }}>
                <SignupContents />
            </SimpleTemplate>
        </div>
    );
};