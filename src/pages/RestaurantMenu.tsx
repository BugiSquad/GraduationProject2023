import React, {useEffect, useState} from "react";
import {getMenusByCategory, toMenuArray} from "../api/Menu";
import {MenuCategory, toLocalizedName} from "../types/MenuCategory";
import {MenuItem} from "../types/MenuItem";
import {useDispatch} from "react-redux";
import {addMenu, removeMenu} from "../store/menuRepository";
import {SimpleTemplate} from "./PageTemplate";
import MenuCardSlider from "../components/MenuCardSlider";
import {BottomNavigationTab} from "../types/PageHeaderParam";
import {RadioBarItem} from "../components/RadioBar";

export const RestaurantMenu: React.FC = () => {
    return (<>
        <SimpleTemplate param={{pageHeaderName: "메뉴", tab: BottomNavigationTab.MENU}}>
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
    const [menuType, setMenuType] = useState(MenuCategory.RICE);
    const [menus, setMenus] = useState(Array.of<MenuItem>());
    const [idx, setIdx] = useState<number>(0)
    const category = Object.values(MenuCategory)
    const names = category.map((item) => toLocalizedName(item))
    let dispatch = useDispatch();

    useEffect(() => {
        async function getMenus() {
            const response = await getMenusByCategory(category[idx])
            //dispatch(removeMenu(category[idx]))      //기존의 상태를 제거
            const json = JSON.parse(JSON.stringify(response.data.data))
            let menuItems = toMenuArray(json)
            menuItems.forEach((item) => {
                    if (item.category === undefined) console.warn(`${item.category} is null`)
                    dispatch(addMenu(item))
                }
            );
            setMenus(menuItems)
        }

        getMenus();
    }, [idx])
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
        }).catch(function (error) {
            setMenus(Array.of<MenuItem>())
        })
    }

    return (<div>
        <RadioBarItem setIndex={setIdx} index={idx} names={names}/>
        <MenuCardSlider foods={[...menus]}></MenuCardSlider>
    </div>)
}

