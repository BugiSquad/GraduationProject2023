import {getApiURL, getMyToken} from "./Common";
import axios from "axios";


/**
 * subjectId에 해당하는 채팅방에 참여합니다.
 * @param subjectId
 * @param userId
 */
export const joinNoteRoom = (subjectId: number, userId: number) => {
    console.log(subjectId)
    return axios.post(`${getApiURL()}/match/participation`, {
        postId: subjectId,
        memberId: userId
    }, {headers: {accessToken: getMyToken()}})
}

/**
 * 채팅방에 있는 쪽지를 모두 확인합니다
 * @param noteRoomId 채팅방의 ID
 * @param userId 사용자의 ID
 */
export const getNotesWith = (noteRoomId: number, userId: number) => {
    if (userId === -1) new Error('로그인이 필요합니다');
    return axios.get(`${getApiURL()}/note?noteRoomId=${noteRoomId}&memberId=${userId}`, {headers: {accessToken: getMyToken()}})
}

/**
 * 해당하는 채팅방에 쪽지를 보냅니다.
 * @param noteRoomId 채팅방의 ID
 * @param userId 사용자의 ID
 * @param message 전송하고자 하는 메시지
 */
export const sendNoteToRoom = (noteRoomId: number, userId: number, message: string) => {
    if (userId === -1) new Error('로그인이 필요합니다');
    return axios.post(`${getApiURL()}/note`, {
        noteRoomId: noteRoomId,
        senderId: userId,
        message: message
    }, {headers: {accessToken: getMyToken()}})
}

/**
 * 현재 채팅방에 참여중인 멤버들에 대한 정보를 요청합니다.
 * @param noteRoomId 채팅방의 ID
 */
export const getNoteRoomMembers = (noteRoomId: number) => {
    return axios.get(`${getApiURL()}/note/room/members?noteRoomId=${noteRoomId}`, {headers: {accessToken: getMyToken()}})
}

/**
 * 사용자가 참여하고 있는 채팅의 목록을 반환합니다.
 * @param memberId 사용자의 ID
 */
export const getNoteRoomsWith = (memberId: number) => {
    if (memberId === -1) new Error('로그인이 필요합니다');
    return axios.get(`${getApiURL()}/note/rooms`, {
        params: {
            memberId: memberId
        },
        headers: {
            accessToken: getMyToken()
        }
    });
};
/**
 * 개인 채팅에 해당하는 채팅방을 반환 받습니다.
 * @param postId 개인 채팅방의 ID
 */
export const getIndividualRoom = (postId: string) => {
    return axios.get(`${getApiURL()}/note/rooms/individual?postId=${postId}`)
};