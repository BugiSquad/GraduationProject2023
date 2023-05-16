import {createSlice} from "@reduxjs/toolkit";
import {BottomNavigationTab} from "../types/PageHeaderParam";


export const navgroup = createSlice({
    name: "navgroup",
    //TODO
    initialState: {cur: BottomNavigationTab.APP},
    reducers: {
        toAPP(state) {
            state.cur = BottomNavigationTab.APP;
        },
        toMatching(state) {
            state.cur = BottomNavigationTab.MATCHING;
        },
        toMenu(state) {
            state.cur = BottomNavigationTab.MENU;
        }, toCommunity(state) {
            state.cur = BottomNavigationTab.COMMUNITY;
        },
        toMyPage(state) {
            state.cur = BottomNavigationTab.MYPAGE;
        },
    }
})
export const {toMatching, toCommunity, toMyPage, toAPP, toMenu} = navgroup.actions
export const navReducer = navgroup.reducer
