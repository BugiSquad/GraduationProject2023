import {getMyInfo} from "./Member";

/**
 * 사용환경에 따라 API URL을 반환합니다.
 */
export const getApiURL = () => {
    return `https://api.bugisquad.link/api`;
    // return true ? `https://api.bugisquad.link/api` : "http://localhost:8080/api";
    // return process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_API_ENDPOINT}/api` : "http://localhost:8080/api";
}
export const getMyToken = () => getMyInfo().accessToken

export const getHeader = () => {
    return {
        headers: {
            withCredentials: true,
            accessToken: getMyToken()
        }
    }
}
