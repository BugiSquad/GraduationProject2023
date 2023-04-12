import React, { useEffect } from "react";
import { SimpleTemplate } from "./PageTemplate";
import { LoginContents } from "../components/LoginContents";

export const Login: React.FC = () => {
  useEffect(()=>{
    console.log("login page is loaded")
})
  return (
    
    <div className="App container" style={{ display: "flex" }}>
      <SimpleTemplate param={{ pageHeaderName: "로그인" }}>
        <LoginContents />
      </SimpleTemplate>
    </div>
  );
};

