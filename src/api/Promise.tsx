import axios from "axios";
import {getApiURL} from "./Common";
import {PromiseInfo} from "../types/PromiseInfo";

/**
 * 식사 약속을 생성합니다
 * @param promise 약속에 대한 정보를 담은 객체
 */
export const makePromise = (promise: PromiseInfo) => {
    return axios.post(`${getApiURL()}/promise`, promise)
}