import {createSlice} from "@reduxjs/toolkit";

export enum NavigationMenu {
    APP = 0, COMMUNITY = 1, CART = 2,  MENU = 3, MYPAGE = 4
}

export const navgroup = createSlice({
    name: "navgroup",
    //TODO
    initialState: {cur: NavigationMenu.APP},
    reducers: {
        toAPP(state) {
            state.cur = NavigationMenu.APP;
        },
        toCommunity(state) {
            state.cur = NavigationMenu.COMMUNITY;
        },
        toCart(state) {
            state.cur = NavigationMenu.CART;
        },
        toMenu(state) {
            state.cur = NavigationMenu.MENU;
        },
        toMyPage(state) {
            state.cur = NavigationMenu.MYPAGE;
        },
    }
})
export const {toCart, toCommunity, toMyPage, toAPP, toMenu} = navgroup.actions
export const navReducer = navgroup.reducer
