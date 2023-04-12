import React, { useEffect } from "react";
import { SimpleTemplate } from "./PageTemplate";

export const Signup: React.FC = () => {
    useEffect(()=>{
        console.log("signup page is loaded")
    })
    return (
        <div className="App container" style={{ display: "flex" }}>
            <SimpleTemplate param={{ pageHeaderName: "회원가입" }}>
            </SimpleTemplate>
        </div>
    );
};