import {EditMyInfo} from "../pages/EditMyInfo";
import {ErrorPage} from "../error-page";
import {Signup} from "../pages/Signup";
import {Mypage} from "../pages/Mypage";
import {Login} from "../pages/Login";

export const MyPageRoutes = [
    {
        path: "/mypage/editmyinfo",
        element: <EditMyInfo/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/signup",
        element: <Signup/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/login",
        element: <Login/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/mypage",
        element: <Mypage/>,
        errorElement: <ErrorPage/>,
    },
]