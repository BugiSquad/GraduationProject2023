import React from "react";
import { SimpleTemplate } from "./PageTemplate";
import { UserInfo } from "../types/UserInfo";
import { UserInfoFrame } from "../components/UserInfoFrame";

export const EditMyInfo: React.FC = () => {
  return (
    <div className="App container">
      <SimpleTemplate param={{ pageHeaderName: "내 정보 수정" }}>
        <UserInfoFrame name={""} email={""} userprofilePic={null} isEdit={true}   />
      </SimpleTemplate>
    </div>
  );
};
