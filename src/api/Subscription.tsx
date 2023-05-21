import axios from "axios";
import {getApiURL, getMyToken} from "./Common";

export interface SubscriptionPostDto {
    endpoint: string
    auth: string
    p256dh: string
    memberId: number

}

export const subscribeWith = (dto: SubscriptionPostDto) => {
    return axios.post(`${getApiURL()}/message/subscribe`, dto, {
        headers: {
            crossOrigin: true,
            accessToken: getMyToken()
        }
    })
}
