import {MakeAppointment} from "../pages/MakeAppointment";
import {ErrorPage} from "../error-page";
import {RecentMeetDetail} from "../pages/Detail/RecentMeetDetail";
import {MyMeetingsDetail} from "../pages/Detail/MyMeetingsDetail";

export const MeetingRoutes = [
    {
        path: "/mypage/message/makeappointment/:noteRoomId",
        element: <MakeAppointment/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/mypage/recentmeetdetail",
        element: <RecentMeetDetail/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/mypage/mymeetingsdetail",
        element: <MyMeetingsDetail/>,
        errorElement: <ErrorPage/>,
    },
]