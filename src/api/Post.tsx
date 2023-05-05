import {getApiURL} from "./Common";
import axios from "axios";
import {Post} from "../types/Post";


/**
 * API 서버에서 게시글 목록을 가져옵니다
 */
export function getPosts() {
    return axios.get(getApiURL() + `/match/post`)
}

/**
 * 새로운 게시글을 생성합니다.
 * @param post
 */
export function createNewPost(post: Post) {
    return axios.post(`${getApiURL()}/match/post`, post)
}