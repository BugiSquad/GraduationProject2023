import {getApiURL, getMyToken} from "./Common";
import axios from "axios";
import {PostDto} from "../types/PostDto";


/**
 * API 서버에서 게시글 목록을 가져옵니다
 */
export function getPosts() {
    return axios.get(getApiURL() + `/match/post`, {headers: {accessToken: getMyToken()}})
}

/**
 * 새로운 게시글을 생성합니다.
 * @param post
 */
export function createNewPost(post: PostDto) {
    return axios.post(`${getApiURL()}/match/post`, post, {headers: {accessToken: getMyToken()}})
}