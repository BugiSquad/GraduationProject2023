import React, {useState} from "react";
import {Autocomplete, Button, TextField, Typography} from "@mui/material";
import {addMenus, getMenusByCategory, toMenuItemArray} from "../api/Menu";
import {MenuCategory} from "../types/MenuCategory";
import {MenuItem} from "../types/MenuItem";
import {useDispatch} from "react-redux";
import {addMenu} from "../store/menuRepository";
import {useAppSelector} from "../store/hooks";
import FoodCardSlider from "../components/FoodCardSlider";

export const APITest: React.FC = () => {
    const [menuType, setMenuType] = useState(MenuCategory.rice);
    const [menus, setMenus] = useState(Array.of<MenuItem>());
    let dispatch = useDispatch();
    let state = useAppSelector(state => state.menu)
    const get = (menuType: MenuCategory) => {
        let axios = getMenusByCategory(menuType)
        axios.then(function (response) {
            const json = JSON.parse(JSON.stringify(response.data.data))
            let menuItems = toMenuItemArray(json)
            menuItems.forEach((item) => {
                    if (item.category === undefined) console.warn(`${item.category} is null`)
                    dispatch(addMenu(item))
                    console.log(item)
                }
            );
            set()
        })
    }
    const set = () => {
        setMenus(state[menuType])
    }

    return (
        <>
            <div>
                <Typography variant={"h2"}>API 테스트 페이지</Typography>
                <br/>
                <Typography variant={"subtitle1"}>현재 메뉴 유형 {menuType}</Typography>
                <br/>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Object.values(MenuCategory)}
                    sx={{width: 300}}
                    onChange={
                        (o1, o2, o3, details) => {
                            setMenuType(details!.option)
                            if (menus.length === 0) {
                                get(details!.option)
                            }
                            setMenus([...state[details!.option]])
                            console.log()
                        }
                    }
                    renderInput={(params) => <TextField {...params} label="카테고리"/>}
                />
                <Button onClick={() => {
                    get(menuType)
                }
                }>메뉴 가져오기
                </Button>
                <Button onClick={() => {
                    console.log("이미 받은 메뉴를 출력 : ")
                    let category = Object.values(MenuCategory)
                    category.forEach((category) => {
                        state[category].forEach((item) => console.log(item))
                    })
                }}>모든 목록 가져오기</Button>
                <Button onClick={() => {
                    addMenus()
                }}>메뉴 등록하기 </Button>
                <FoodCardSlider foods={[...menus]}></FoodCardSlider>
            </div>

        </>
    )
}
