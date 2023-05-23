import {BottomNavigationGroup} from "../components/BottomNavigationGroup";
import React, {FC, ReactNode, useEffect, useRef, useState} from "react";
import {BottomNavigationTab, PageHeaderParam, SimpleHeaderParam} from "../types/PageHeaderParam";
import {PageHeader} from "../components/PageHeaders/PageHeader";
import {SimpleHeader} from "../components/PageHeaders/SimpleHeader";
import '../App.css'
import {wait} from "@testing-library/user-event/dist/utils";
import {checkNotificationSupported, getServiceKey} from "../api/Notification";
import {subscribeWith, SubscriptionPostDto} from "../api/Subscription";

export const PageTemplate: FC<{ children: ReactNode, param: PageHeaderParam }> = ({children, param}) => {
    const [state, setState] = useState<number[]>([0, 0])
    const scroll = useRef(0)
    useEffect(() => {
        function handleScroll() {
            const old = scroll.current
            scroll.current = window.scrollY
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
                <div style={{display: "flex", flexDirection: "column", paddingTop: "1vh", paddingBottom: "10vh"}}>
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
        async function updateToken() {
            const worker = await navigator.serviceWorker.getRegistration()
            if (worker == null) return;
            wait(1000);
            const subscription = await worker.pushManager.subscribe(
                {
                    applicationServerKey: getServiceKey(),
                    userVisibleOnly: true,
                }
            )
            if (subscription == null) {
                alert("구독에 실패했습니다.")
                return;
            }
            const json = subscription.toJSON()
            const a = {
                endpoint: `${json.endpoint}`,
                auth: `${json.keys!!.auth}`,
                p256dh: `${json.keys!!.p256dh}`,
            } as SubscriptionPostDto
            const res = await subscribeWith(a)
        }

        function handleScroll() {
            const old = scroll.current
            scroll.current = window.scrollY
            setState([old, scroll.current])
        }

        window.addEventListener('scroll', handleScroll)

        if (checkNotificationSupported())
            updateToken().then(() => {
                console.log("토큰을 업데이트 했습니다")
            })
        return () => window.removeEventListener('scroll', handleScroll)

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
