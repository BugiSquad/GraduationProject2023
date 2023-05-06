import {MemberDto} from "../types/MemberDto";
import axios from "axios";
import {getApiURL} from "./Common";

/**
 * 새로운 회원을 생성합니다.
 * @param member 회원에 대한 정보를 담은 객체
 */
export function requestMemberSignUp(member: MemberDto) {
    return axios.post(`${getApiURL()}/member`, member)
}