import axios from "axios";
import {getApiURL, getMyID, getMyToken} from "./Common";
import {CreateOrderDto} from "../types/Order";

export const createOrder = (order: CreateOrderDto) => {
    return axios.post(`${getApiURL()}/order`, order as CreateOrderDto,
        {headers: {accessToken: getMyToken()}})
}
export const getOrderList = () => {
    return axios.get(`${getApiURL()}/order/member?id=${getMyID()}`, {headers: {accessToken: getMyToken()}})
}