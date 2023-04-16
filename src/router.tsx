import {createBrowserRouter} from "react-router-dom";
import {action as rootAction, loader as rootLoader, Root} from "./pages/root";
import {ErrorPage} from "./error-page";
import Contact, {loader as contactLoader} from "./pages/contact";
import EditContact, {action as editAction} from "./routes/edit";
import App from "./App";
import {Cart} from "./pages/Cart";
import {Mypage} from "./pages/Mypage";
import {NavBarTest} from "./pages/NavBarTest";
import {Matching} from "./pages/Matching";
import {EditMyInfo} from "./pages/EditMyInfo";
import {RecentOrderDetail} from "./pages/Detail/RecentOrderDetail";
import {RecentMeetDetail} from "./pages/Detail/RecentMeetDetail";
import {MyMeetingsDetail} from "./pages/Detail/MyMeetingsDetail";
import {MyMessageDetail} from "./pages/Detail/MyMessageDetail";
import {Message} from "./pages/Message";
import {MakeAppointment} from "./pages/MakeAppointment";
import React from "react";
import {APITest} from "./pages/APITest";

export const router = createBrowserRouter([
    //이하의 객체는 개별의 Route임
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact/>,
                loader: contactLoader,
            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact/>,
                loader: contactLoader,
                action: editAction,
            },
        ]
    },
    {
        path: "/app",
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/cart",
        element: <Cart/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/mypage",
        element: <Mypage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/navbartest",
        element: <NavBarTest/>,
        errorElement: <ErrorPage/>,
    }
    , {
        path: "/community",
        element: <Matching/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/mypage/editmyinfo",
        element: <EditMyInfo userInfo={{
            name: '',
            email: '',
            profilePic: null
        }} onSave={function (userInfo: { name: string; email: string; profilePic: string | null; }): void {
            throw new Error('Function not implemented.');
        }}/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/mypage/recentorderdetail",
        element: <RecentOrderDetail/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/mypage/recentmeetdetail",
        element: <RecentMeetDetail/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/mypage/mymeetingsdetail",
        element: <MyMeetingsDetail/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/mypage/mymessagedetail",
        element: <MyMessageDetail/>,
        errorElement: <ErrorPage/>,
    },

    {
        path: "/mypage/message",
        element: <Message/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/mypage/message/makeappointment",
        element: <MakeAppointment/>,
        errorElement: <ErrorPage/>,
    },

    {
        path: "/api",
        element: <APITest/>,
        errorElement: <ErrorPage/>,
    }
    //<Route path="/" element={<Home />} />
]);