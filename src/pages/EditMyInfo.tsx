import React from "react";
import {SimpleTemplate} from "./PageTemplate";
import {UserInfoFrame} from "../components/UserInfoFrame";
import {BottomNavigationTab} from "../types/PageHeaderParam";

export const EditMyInfo: React.FC = () => {
    return (
        <div className="App container">
            <SimpleTemplate param={{pageHeaderName: "내 정보 수정", tab: BottomNavigationTab.MYPAGE}}>
                <UserInfoFrame name={""} email={""} userprofilePic={null} isEdit={true}/>
            </SimpleTemplate>
        </div>
    );
};
