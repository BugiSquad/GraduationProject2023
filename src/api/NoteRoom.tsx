import {getApiURL} from "./Common";
import axios from "axios";


/**
 * subjectId에 해당하는 채팅방에 참여합니다.
 * @param subjectId
 * @param userId
 */
export const joinNoteRoom = (subjectId: number, userId: number) => {
    console.log(subjectId)
    return axios.post(`${getApiURL()}/match/participation`, {postId: subjectId, memberId: userId})
}

export const getNotesWith = (noteRoomId: number, userId: number) => {
    return axios.get(`${getApiURL()}/note?noteRoomId=${noteRoomId}&memberId=${userId}`)
}
export const sendNoteToRoom = (noteRoomId: number, userId: number, message: string) => {
    return axios.post(`${getApiURL()}/note`, {noteRoomId: noteRoomId, senderId: userId, message: message})
}

export const getNoteRoomMembers = (noteRoomId: number) => {
    return axios.get(`${getApiURL()}/note/room/members?noteRoomId=${noteRoomId}`)
}

export const getNoteRoomsWith = (memberId: number) => {
    return axios.get(`${getApiURL()}/note/rooms`, {
        params: {
            memberId: memberId
        }
    });
};
export const getIndividualRoom = (postId: string) => {
    return axios.get(`${getApiURL()}/note/rooms/individual?postId=${postId}`)
};