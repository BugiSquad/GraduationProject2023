import axios from 'axios'
import {MenuCategory} from "../types/MenuCategory";
import {getApiURL} from "./common";
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

export function addMenus() {
    let ary = JSON.parse(JSON.stringify(data));
    ary.forEach((item: any) => {
        axios.post(`${getApiURL()}/menu`, {...item}).then(function (response) {
            console.log(`${item.name} ${response.status}`)

        }).catch((reason) => {
            console.warn(reason)
        })
    })
}

export function toMenuItemArray(json: String): MenuItem[] {

    const objs = JSON.parse(JSON.stringify(json))
    let items = objs.map((item: any) => {
        return {
            id: item.menuId,
            name: item.name,
            price: item.price,
            imageUrl: item.imageUrl,
            category: item.category as MenuCategory
        }
    })
    return items
}