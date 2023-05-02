import React, {useState} from "react";
import {getMenusByCategory, toMenuArray} from "../api/Menu";
import {MenuCategory} from "../types/MenuCategory";
import {MenuItem} from "../types/MenuItem";
import {useDispatch} from "react-redux";
import {addMenu, removeMenu} from "../store/menuRepository";
import FoodCardSlider from "../components/FoodCardSlider";
import {MenuTabs} from "../components/MenuTabs";
import {SimpleTemplate} from "./PageTemplate";

export const Menus: React.FC = () => {
    return (<>
        <SimpleTemplate param={{pageHeaderName: "메뉴"}}>
            <MenuBody/>
        </SimpleTemplate>
    </>)
}
/**
 * 메뉴를 보여주는 페이지
 * TODO FoodCardSlider를 이용한 렌더링은 많이 어색해 보임 다른 방법을 찾을 것
 * @constructor
 */
const MenuBody: React.FC = () => {
    const [menuType, setMenuType] = useState(MenuCategory.rice);
    const [menus, setMenus] = useState(Array.of<MenuItem>());
    let dispatch = useDispatch();

    //해당 메뉴 카테고리에 속하는 모든 메뉴를 가져옴
    const getMenuItemsWith = (menuType: MenuCategory) => {
        let axios = getMenusByCategory(menuType)
        axios.then(function (response) {
            dispatch(removeMenu(menuType))      //기존의 상태를 제거
            const json = JSON.parse(JSON.stringify(response.data.data))
            let menuItems = toMenuArray(json)
            menuItems.forEach((item) => {
                    if (item.category === undefined) console.warn(`${item.category} is null`)
                    dispatch(addMenu(item))
                }
            );
            setMenus(menuItems)
        })
    }
    const onMenuTypeChanges = (event: React.SyntheticEvent, newValue: MenuCategory) => {
        setMenuType(newValue)
        getMenuItemsWith(newValue)
    }

    return (<div>
        <MenuTabs category={menuType} onMenuTypeChanges={onMenuTypeChanges}/>
        <FoodCardSlider foods={[...menus]}></FoodCardSlider>
    </div>)
}

