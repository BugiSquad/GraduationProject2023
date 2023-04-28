import {getApiURL} from "./common";
import axios from "axios";
import {Member} from "../types/Member";
import {Post} from "../types/Post";


export function getPosts() {
    return axios.get(getApiURL() + `/group`)
}

export function requestMemberRegister(member: Member) {
    return axios.post(`${getApiURL()}/member`, member)
}

export function createNewPost(post: Post) {
    return axios.post(`${getApiURL()}/group`, post)
}