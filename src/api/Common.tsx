import {getMyInfo} from "./Member";

/**
 * 사용환경에 따라 API URL을 반환합니다.
 */
export const getApiURL = () => {
    return process.env.NODE_ENV === 'production' ? process.env.API_ENDPOINT : "http://192.168.1.117:8080/api";
}
export const getMyID = () => Number(getMyInfo().memberId)
export const getMyToken = () => getMyInfo().accessToken
