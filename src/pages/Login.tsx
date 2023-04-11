import React from "react";
import { SimpleTemplate } from "./PageTemplate";
import { LoginContents } from "../components/LoginContents";

export const Login: React.FC = () => {
  return (
    <div className="App container" style={{ display: "flex" }}>
      <SimpleTemplate param={{ pageHeaderName: "로그인" }}>
        <LoginContents />
      </SimpleTemplate>
    </div>
  );
};

