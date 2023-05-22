import {BottomNavigationGroup} from "../components/BottomNavigationGroup";
import React, {FC, ReactNode, useEffect, useRef, useState} from "react";
import {BottomNavigationTab, PageHeaderParam, SimpleHeaderParam} from "../types/PageHeaderParam";
import {PageHeader} from "../components/PageHeaders/PageHeader";
import {SimpleHeader} from "../components/PageHeaders/SimpleHeader";
import '../App.css'

export const PageTemplate: FC<{ children: ReactNode, param: PageHeaderParam }> = ({children, param}) => {
    const [state, setState] = useState<number[]>([0, 0])
    const scroll = useRef(0)
    useEffect(() => {
        function handleScroll() {
            const old = scroll.current
            scroll.current = window.scrollY
            console.log(scroll.current)
            setState([old, scroll.current])
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            <div className="App container">
                <PageHeader {...param}/>
                <div style={{display: "flex", flexDirection: "column", paddingTop: "2vh", paddingBottom: "10vh"}}>
                    {children}
                </div>
                <BottomNavigationGroup scroll={state} tab={BottomNavigationTab.APP}/>
            </div>
        </>)

}

export const SimpleTemplate: FC<{ children: ReactNode, param: SimpleHeaderParam }> = ({children, param}) => {
    const cur = param.tab
    const [state, setState] = useState<number[]>([0, 0])
    const scroll = useRef(0)
    useEffect(() => {
        function handleScroll() {
            const old = scroll.current
            scroll.current = window.scrollY
            console.log(scroll.current)
            setState([old, scroll.current])
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div className="App container">
                <SimpleHeader {...param}/>
                <div style={{display: "flex", flexDirection: "column", paddingTop: "2vh", paddingBottom: "10vh"}}>
                    {children}
                </div>
                <BottomNavigationGroup scroll={state} tab={cur}/>
            </div>
        </>)
}
export const NoBottomNavigationTemplate: FC<{ children: ReactNode, param: SimpleHeaderParam }>
    = ({children, param}) => {
    return (
        <>
            <div className="App container">
                <SimpleHeader {...param}/>
                <div style={{display: "flex", flexDirection: "column", paddingTop: "2vh", paddingBottom: "10vh"}}>
                    {children}
                </div>
            </div>
        </>)
}
