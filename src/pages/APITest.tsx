import React, {useState} from "react";
import {Autocomplete, Button, TextField, Typography} from "@mui/material";
import {addMenus, getMenusByCategory} from "../api/Menu";
import {MenuCategory} from "../types/MenuCategory";
import {MenuItem} from "../types/MenuItem";
import {useDispatch} from "react-redux";
import {addMenu} from "../store/menu";
import {useAppSelector} from "../store/hooks";
import FoodCardSlider from "../components/FoodCardSlider";

export const APITest: React.FC = () => {
    const [menuType, setMenuType] = useState(MenuCategory.rice);
    let dispatch = useDispatch();
    let state = useAppSelector(state => state.menu)
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
                    onChange={(o1, o2, o3, details) => setMenuType(details!.option)}
                    renderInput={(params) => <TextField {...params} label="카테고리"/>}
                />
                <Button onClick={() => {
                    let axios = getMenusByCategory(menuType)
                    axios.then(function (response) {
                        // console.log(`response is ${response.data.data}`)
                        const json = JSON.parse(JSON.stringify(response.data.data))
                        const menuItem: MenuItem[] = json.map((item: any) => {
                            return {
                                id: item.menuId,
                                name: item.name,
                                price: item.price,
                                imageUrl: item.imageUrl,
                                category: item.category as MenuCategory
                            }
                        })
                        menuItem.forEach((item) => {
                                if (item.category === undefined) console.warn(`${item.category} is null`)
                                dispatch(addMenu(item))
                                console.log(item)
                            }
                        );
                        //개개별의 객체를 출력
                    })

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
                <FoodCardSlider foods={state[menuType]}></FoodCardSlider>
            </div>

        </>
    )
}
