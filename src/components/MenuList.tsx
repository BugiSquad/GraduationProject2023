import data from "../data/SampleFood.json";
import {MenuItem} from "../types/MenuItem";
import {RadioBarItem} from "./RadioBar";
import React, {useEffect, useState} from "react";
import {MenuCategory, toLocalizedName} from "../types/MenuCategory";
import {useDispatch} from "react-redux";
import {getMenusByCategory, toMenuArray} from "../api/Menu";
import {addMenu} from "../store/menuRepository";
import FoodCard from "./FoodCard";


const foods: MenuItem[] = data


export const MenuList: React.FC = () => {
    const category = Object.values(MenuCategory)
    const [idx, setIdx] = useState<number>(0)
    const [menus, setMenus] = useState(Array.of<MenuItem>());
    const dispatch = useDispatch()
    const names = category.map((item) => toLocalizedName(item))

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
    })

    return (
        <>
            <RadioBarItem setIndex={setIdx} index={idx} names={names}/>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Component items={menus}></Component>
            </div>
        </>
    )
}
const Component: React.FC<{ items: MenuItem[] }> = (menus) => {
    return (
        <>
            {menus.items.map((item) => {
                return <FoodCard id={item.id} name={item.name}
                                 price={item.price} imageUrl={item.imageUrl}
                                 description={item.description}/>

            })}
        </>
    )
}

