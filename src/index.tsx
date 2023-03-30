import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './index.css';
import App from './App';
import { action as rootAction, loader as rootLoader, Root } from "./pages/root";
import Contact, { loader as contactLoader, } from "./pages/contact";
import reportWebVitals from './reportWebVitals';
import { ErrorPage } from "./error-page";
import EditContact, { action as editAction, } from "./routes/edit";
import { Matching } from "./pages/Matching";
import { NavBarTest } from "./pages/NavBarTest";
import { Cart } from "./pages/Cart";
import { Mypage } from "./pages/Mypage";
import { RecentOrderDetail } from './pages/Detail/RecentOrderDetail';
import { RecentMeetDetail } from './pages/Detail/RecentMeetDetail';
import { MyMeetingsDetail } from './pages/Detail/MyMeetingsDetail';
import { MyMessageDetail } from './pages/Detail/MyMessageDetail';



const router = createBrowserRouter([
    //이하의 객체는 개별의 Route임
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
                action: editAction,
            },
        ]
    },
    {
        path: "/app",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/mypage",
        element: <Mypage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/navbartest",
        element: <NavBarTest />,
        errorElement: <ErrorPage />,
    }
    , {
        path: "/community",
        element: <Matching />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/mypage/recentorderdetail",
        element: <RecentOrderDetail />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/mypage/recentmeetdetail",
        element: <RecentMeetDetail />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/mypage/mymeetingsdetail",
        element: <MyMeetingsDetail />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/mypage/mymessagedetail",
        element: <MyMessageDetail />,
        errorElement: <ErrorPage />,
    },
    //<Route path="/" element={<Home />} />
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
