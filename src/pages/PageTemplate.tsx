import {BottomNavigationGroup} from "../components/BottomNavigationGroup";
import React, {FC, ReactNode} from "react";
import {PageHeaderParam} from "../types/PageHeaderParam";
import {PageHeader} from "../components/PageHeaders/PageHeader";

export const PageTemplate: FC<{ children: ReactNode, param: PageHeaderParam }> = ({children, param}) => {
    return (
        <>
            <div className="App container">
                <PageHeader {...param}/>
                {children}
                <BottomNavigationGroup/>
            </div>
        </>)

}
