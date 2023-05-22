import {RestaurantMenu} from "../pages/RestaurantMenu";
import {ErrorPage} from "../error-page";
import {WeekPopMenu} from "../pages/WeekPopMenu";
import {RecentMenu} from "../pages/RecentMenu";
import { LikedMenu } from "../pages/LikedMenu";

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
    {
        path: "/likedmenu",
        element: <LikedMenu/>,
        errorElement: <ErrorPage/>,
    },
]