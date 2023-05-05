import {getApiURL} from "./Common";
import axios from "axios";


/**
 * subjectId에 해당하는 채팅방에 참여합니다.
 * @param subjectId
 * @param userId
 */
export const joinChat = (subjectId: number, userId: number) => {
    console.log(subjectId)
    return axios.post(`${getApiURL()}/group/participation`, {groupId: subjectId, memberId: userId})
}

export const getChat = (roomId: number, userId: number) => {
    return axios.get(`${getApiURL()}/note?groupId=${roomId}&memberId=${userId}`)
}
export const sendChat = (roomId: number, userId: number, message: string) => {
    return axios.post(`${getApiURL()}/note`, {groupId: roomId, senderId: userId, message: message})
}