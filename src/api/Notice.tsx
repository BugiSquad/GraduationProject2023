import axios from "axios";
import {getApiURL} from "./Common";

export interface NoticeInformation {
    informationId: number;
    title: string;
    text: string;
    modifiedAt: Date;
}

export const getNoticeFromRemote = () => {
    return axios.get(`${getApiURL()}/notice/list?page=0&size=5`)
}