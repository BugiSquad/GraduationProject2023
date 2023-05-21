import {getApiURL, getHeader} from "./Common";
import axios from "axios";
import {GroupType, PostDto} from "../types/PostDto";
import {Gender} from "../types/MemberDto";


interface PostCondition {
    interest: string[]; // 관심사
    department: string[]; // 전공
    grade: number[]; // 학년
    priorityTime: number; // 우선시간, ex: 30 -> 30분 뒤 까지 조회
    gender: Gender[]; // 성별
    groupType: GroupType;
}

/**
 * API 서버에서 게시글 목록을 가져옵니다
 */
export function getPosts() {
    return axios.get(getApiURL() + `/match/post`, getHeader())
}

/**
 * 새로운 게시글을 생성합니다.
 * @param post
 */
export function createNewPost(post: PostDto) {
    return axios.post(`${getApiURL()}/match/post`, post, getHeader())
}