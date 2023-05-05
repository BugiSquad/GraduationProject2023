import {getApiURL} from "./Common";
import axios from "axios";


/**
 * subjectId에 해당하는 채팅방에 참여합니다.
 * @param subjectId
 * @param userId
 */
export const joinChat = (subjectId: number, userId: number) => {
    console.log(subjectId)
    return axios.post(`${getApiURL()}/match/participation`, {postId: subjectId, memberId: userId})
}

export const getChat = (noteRoomId: number, userId: number) => {
    return axios.get(`${getApiURL()}/note?noteRoomId=${noteRoomId}&memberId=${userId}`)
}
export const sendChat = (noteRoomId: number, userId: number, message: string) => {
    return axios.post(`${getApiURL()}/note`, {noteRoomId: noteRoomId, senderId: userId, message: message})
}