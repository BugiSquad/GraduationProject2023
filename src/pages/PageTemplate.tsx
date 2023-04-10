import {BottomNavigationGroup} from "../components/BottomNavigationGroup";
import React, {FC, ReactNode} from "react";
import {PageHeaderParam, SimpleHeaderParam} from "../types/PageHeaderParam";
import {PageHeader} from "../components/PageHeaders/PageHeader";
import { SimpleHeader } from "../components/PageHeaders/SimpleHeader";

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

export const SimpleTemplate: FC<{ children: ReactNode, param: SimpleHeaderParam }> = ({children, param}) => {
    return (
        <>
            <div className="App container">
                <SimpleHeader {...param}/>
                {children}
                <BottomNavigationGroup/>
            </div>
        </>)

}