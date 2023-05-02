import {Member} from "../types/Member";
import axios from "axios";
import {getApiURL} from "./Common";

/**
 * 새로운 회원을 생성합니다.
 * @param member
 */
export function requestMemberRegister(member: Member) {
    return axios.post(`${getApiURL()}/member`, member)
}