import {RestaurantMenu} from "../pages/RestaurantMenu";
import {ErrorPage} from "../error-page";
import {WeekPopMenu} from "../pages/WeekPopMenu";
import {RecentMenu} from "../pages/RecentMenu";

export const MenuRoutes = [
    {
        path: "/menu/",
        element: <RestaurantMenu/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/menu/:category",
        element: <RestaurantMenu/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/thisweekpopular/",
        element: <WeekPopMenu/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/recentmenu",
        element: <RecentMenu/>,
        errorElement: <ErrorPage/>,
    },
]