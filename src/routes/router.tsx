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

const routes = [...MyPageRoutes, ...PostRoutes, ...OrderRoutes, ...MenuRoutes, ...MeetingRoutes]
export const router = createBrowserRouter([
    ...routes,
    {
        path: "/app",
        element: <App/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/community",
        element: <Matching/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/apitest",
        element: <APITest/>,
        errorElement: <ErrorPage/>,
    }
]);

