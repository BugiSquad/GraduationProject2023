import axios from "axios";
import {getApiURL} from "./Common";

export const getPopularMenuFromRemote = () => {
    return axios.get(`${getApiURL()}/menu/favor`)
}