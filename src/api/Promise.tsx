import axios from "axios";
import {getApiURL} from "./Common";
import {PromiseInfo} from "../types/PromiseInfo";

export const makePromise = (promise: PromiseInfo) => {
    return axios.post(`${getApiURL()}/promise`, promise)
}