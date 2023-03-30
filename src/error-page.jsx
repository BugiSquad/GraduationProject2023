import {useRouteError} from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <>
            <div id="error-page">
                <h1>이런!</h1>
                <p>알 수 없는 오류가 발생했습니다.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    );
}