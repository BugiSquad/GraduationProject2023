import axios from 'axios'
import {MenuCategory} from "../types/MenuCategory";
import {getApiURL, getMyToken} from "./Common";
import data from "../data/ServersMenu.json"
import {MenuItem} from "../types/MenuItem";

/**
 *
 * @param category 조회가 필요한 카테고리
 * @return
 */
export function getMenusByCategory(category: MenuCategory) {
    return axios.get(getApiURL() + `/menu/category?category=${category}`)
}

export function getMenuById(id: number) {
    return axios.get(getApiURL() + `/menu?id=${id}`)
}

/**
 * 더미 메뉴데이터들을 서버에 업로드합니다.
 */
export function addMenus() {
    let ary = JSON.parse(JSON.stringify(data));
    ary.forEach((item: MenuItem) => {
        item.imageUrl = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    })
    ary.forEach((item: any) => {
        axios.post(`${getApiURL()}/menu`, {...item}, {
            headers: {
                accessToken: getMyToken()
            }
        }).then(function (response) {
            console.log(`${item.name} ${response.status}`)

        }).catch((reason) => {
            console.warn(reason)
        })
    })
}

/**
 * 서버의 응답을 MenuItem[]로 변환합니다.
 * @param json
 */
export function toMenuArray(json: String): MenuItem[] {
    const objs = JSON.parse(JSON.stringify(json))
    let items = objs.map((e: any) => {
        return {
            id: e.menuId,
            name: e.name,
            price: e.price,
            imageUrl: e.imageUrl,
            category: e.category as MenuCategory
        }
    })
    return items
}

export function toMenuObject(json: String) {
    let item = JSON.parse(JSON.stringify(json))
    return {
        id: item.menuId,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        category: item.category as MenuCategory
    }
}