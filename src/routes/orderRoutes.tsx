//주문과 관련된 라우팅정보
import {ErrorPage} from "../error-page";
import {FoodDetail, menuLoader} from "../pages/FoodDetail";
import {Order} from "../pages/Order";
import {RecentOrderDetail} from "../pages/Detail/RecentOrderDetail";
import {Cart} from "../pages/Cart";

export const OrderRoutes = [
    {
        path: "/cart",
        element: <Cart/>,
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
    }
]