import {MyMessageDetail, PersonalMessageDetail} from "../pages/Detail/MyMessageDetail";
import {ErrorPage} from "../error-page";
import {Message} from "../pages/Message";

export const PostRoutes = [
    {
        path: "/mypage/personalmessage/:postId",
        element: <PersonalMessageDetail/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/mypage/message/:id",
        element: <Message/>,
        errorElement: <ErrorPage/>,
    }, {
        path: "/mypage/mymessagedetail",
        element: <MyMessageDetail/>,
        errorElement: <ErrorPage/>,
    },

]