import {createSlice} from "@reduxjs/toolkit";

export const matchPosts = createSlice({
    name: 'matchPosts',
    initialState: {posts: []},
    reducers: {}
})
export const matchOption = createSlice({
    name: 'matchUI',
    initialState: {filter: false, add: false},
    reducers: {
        openFilter(state) {
            console.log("Open Filter")
            state.filter = true;
            return state
        },
        closeFilter(state) {
            console.log("Close Filter")
            state.filter = false;
            return state
        },
        openDrawer(state) {
            console.log("Open Write")
            state.add = true;
            return state
        }, closeDrawer(state) {
            console.log("Close Write")
            state.add = false;
            return state
        }
    },
})
export const {openFilter, closeFilter, openDrawer, closeDrawer} = matchOption.actions
export const drawerReducer = matchOption.reducer
