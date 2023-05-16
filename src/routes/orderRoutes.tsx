//주문과 관련된 라우팅정보
import {ErrorPage} from "../error-page";
import {FoodDetail, menuLoader} from "../pages/FoodDetail";
import {Order} from "../pages/Order";
import {RecentOrderDetail} from "../pages/Detail/RecentOrderDetail";
import {Community} from "../pages/Community";

export const OrderRoutes = [
    {
        path: "/cart",
        element: <Community/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/fooddetail/:id",
        element: <FoodDetail/>,
        loader: menuLoader,
        errorElement: <ErrorPage/>,
    }, {
        path: "/order",
        element: <Order/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/mypage/recentorderdetail",
        element: <RecentOrderDetail/>,
        errorElement: <ErrorPage/>,
    },
]