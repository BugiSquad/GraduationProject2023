import React from "react";
import { SimpleTemplate } from "./PageTemplate";
import { UserInfo } from "../types/UserInfo";
import { EditMyInfoContents } from "../components/EditMyInfoContent";

export const EditMyInfo: React.FC = () => {
  return (
    <SimpleTemplate param={{ pageHeaderName: "내 정보 수정" }}>
        <EditMyInfoContents userInfo={{
        name: "",
        email: "",
        profilePic: null
      }} onSave={function (userInfo: UserInfo): void {
        throw new Error("Function not implemented.");
      } } />
    </SimpleTemplate>
  );
};
