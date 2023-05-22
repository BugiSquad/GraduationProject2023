import React from "react";
import {NoBottomNavigationTemplate} from "./PageTemplate";
import {UserInfoFrame} from "../components/UserInfoFrame";
import {BottomNavigationTab} from "../types/PageHeaderParam";


export const Signup: React.FC = () => {
    return (
        <div className="App container">
            <NoBottomNavigationTemplate param={{pageHeaderName: "회원가입", tab: BottomNavigationTab.APP}}>
                <UserInfoFrame name={""} email={""} userprofilePic={null} isEdit={false}/>
            </NoBottomNavigationTemplate>
        </div>
    );
};