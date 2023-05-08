import {Member} from "../types/Member";
import axios from "axios";
import {getApiURL} from "./Common";

/**
 * 새로운 회원을 생성합니다.
 * @param member
 */
export function requestMemberRegister(member: Member) {
    return axios.post(`${getApiURL()}/member/signUp`, member)
}

interface SignInInfo {
    email: string;
    password: string;
}

export function requestMemberSignIn(info: SignInInfo) {
    return axios.post(`${getApiURL()}/member/signIn?email=${info.email}&password=${info.password}`)
}