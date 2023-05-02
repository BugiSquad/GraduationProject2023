import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MenuItem} from "../types/MenuItem";
import {MenuCategory} from "../types/MenuCategory";

const getAllMenus = createAsyncThunk(
    "getAllMenus", () => {
        //a
        return Array.of<MenuItem>()
    }
)
/***
 * 서버와 통신으로 비동기로 가져온 메뉴들을 저장하는 장소
 * @author hoyeon(MenaceOneFive)
 */
export const MenuRepository = createSlice({
    name: 'menu',
    initialState: {
        [MenuCategory.stew]: Array.of<MenuItem>(),
        [MenuCategory.rice]: Array.of<MenuItem>(),
        [MenuCategory.noodle]: Array.of<MenuItem>(),
        [MenuCategory.chinaFood]: Array.of<MenuItem>(),
        [MenuCategory.japanFood]: Array.of<MenuItem>(),
        [MenuCategory.koreanFood]: Array.of<MenuItem>(),
        [MenuCategory.westernFood]: Array.of<MenuItem>(),
    },
    reducers: {
        /***
         * 메뉴를 추가 또는 업데이트 하는 리듀서
         * @param state 기존의 상태
         * @param action 추가할 MenuItem
         */
        addMenu(state, action) {
            let item: MenuItem = action.payload;
            let category = item.category

            if (category === undefined) {
                console.error(`${item} 해당 메뉴의 카테고리 분류가 누락되었습니다.`)
                return;
            }

            let find = state[category].findIndex(e => e.id === item.id)
            if (find === -1) state[category] = [...state[category], item];

            else state[category][find] = item;
        },
        updateMenu(state, action) {
            let item: MenuItem = action.payload;
            let category = item.category

            if (category === undefined) {
                console.error(`${item} 해당 메뉴의 카테고리 분류가 누락되었습니다.`)
                return;
            }

            let find = state[category].findIndex(e => e.id === item.id)
            if (find !== -1) state[category][find] = item;
        },
        removeMenu(state, action) {
            let category: MenuCategory = action.payload;
            if (category === undefined) {
                console.error(`${action.payload} 해당 메뉴의 카테고리 분류가 누락되었습니다.`)
                return;
            }
            state[category] = Array.of<MenuItem>();
        },
    }, extraReducers: (builder) => {
        builder.addCase(getAllMenus.fulfilled, (state, action) => {
            //

        })
    }
})
export const {addMenu, updateMenu, removeMenu} = MenuRepository.actions
export const menuReducer = MenuRepository.reducer