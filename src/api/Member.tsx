import {MemberDto} from "../types/MemberDto";
import axios from "axios";
import {getApiURL} from "./Common";
import {MyInfo} from "../types/MyInfo";

/**
 * 새로운 회원을 생성합니다.
 * @param member 회원에 대한 정보를 담은 객체
 */
export function requestMemberSignUp(member: MemberDto) {
    return axios.post(`${getApiURL()}/member/signUp`, member)
}

interface SignInInfo {
    email: string;
    password: string;
}

export function requestMemberSignIn(info: SignInInfo) {
    return axios.post(`${getApiURL()}/member/signIn?email=${info.email}&password=${info.password}`)
}

/**
 * 로컬 스토리지에 사용자 정보를 저장합니다.
 * @param info 사용자 정보
 */
export function setMyInfo(info: MyInfo) {
    localStorage.setItem("myInfo", JSON.stringify(info))
}

/**
 * 현재 로그인 정보를 반환합니다.
 * @return 로그인 되어 있다면 정상적으로 초기화 된 MyInfo 객체 초기화되어 있지 않다면 비어있는 객체
 */
export function getMyInfo(): MyInfo {
    let store = localStorage.getItem("myInfo")
    if (store == null)
        return {memberId: "-1", accessToken: ""}
    return JSON.parse(store)
}

export function signOut(): void {
    let emptyInfo: MyInfo = {memberId: '-1', accessToken: ''}
    setMyInfo(emptyInfo)
}