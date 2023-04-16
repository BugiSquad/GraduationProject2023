import axios from 'axios'
import {MenuCategory} from "../types/MenuCategory";
import {getApiURL} from "./common";
import data from "../data/ServersMenu.json"

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

/*

    public ResponseEntity findMenuOrderItemListByMenu(Menu.tsx menu) {
    public ResponseEntity postMenu(MenuPostDto menuPostDto) {
    public ResponseEntity updateMenu(MenuDto menuDto) {
    public ResponseEntity updateTotalRating(MenuDto menuDto) {
    public ResponseEntity findMenu(Long id) {
    public ResponseEntity findMenusByCategory(MenuCategory category) {
    public ResponseEntity deleteMenu(Long id) {
 */