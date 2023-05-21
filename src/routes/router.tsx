import {createBrowserRouter} from "react-router-dom";
import {ErrorPage} from "../error-page";
import App from "../App";
import {Matching} from "../pages/Matching";
import {APITest} from "../pages/APITest";
import {MyPageRoutes} from "./myPageRoutes";
import {PostRoutes} from "./postRoutes";
import {OrderRoutes} from "./orderRoutes";
import {MenuRoutes} from "./menuRoutes";
import {MeetingRoutes} from "./meetingRoutes";
import {CommunityPage} from "../pages/CommunityPage";

const routes = [...MyPageRoutes, ...PostRoutes, ...OrderRoutes, ...MenuRoutes, ...MeetingRoutes]
export const router = createBrowserRouter([
    ...routes,
    {
        path: "/",
        element: <APITest/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/app",
        element: <App/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/community",
        element: <CommunityPage/>,
        errorElement: <ErrorPage/>,
    }
    , {
        path: "/matching",
        element: <Matching/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/apitest",
        element: <APITest/>,
        errorElement: <ErrorPage/>,
    }
]);

