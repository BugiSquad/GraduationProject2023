import axios from "axios";
import {getApiURL, getHeader} from "./Common";

export interface VoteItem {
    newMenuId: number;
    name: string;
    detail: string | null;
    url: string;
    votes: number;
    category: string;
    modifiedAt: Date;
}

/**
 * 투표 후보를 불러옴
 */
export const getVoteItemsFromRemote = () => {
    return axios.get(`${getApiURL()}/community/wish/list`, getHeader())
}

/**
 * 원하는 메뉴에 대한 투표
 * @param menuId 투표하고자 하는 메뉴의 ID
 */
export const takeANewMenuVote = (menuId: number) => {
    return axios.post(`${getApiURL()}/community/wish/votes?menuId=${menuId}`, {}, getHeader())
}
