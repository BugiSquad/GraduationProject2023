import {createSlice} from "@reduxjs/toolkit";
import {MenuItem} from "../types/MenuItem";
import {CartItem} from "../types/CartItem";

export const Cart = createSlice(
    {
        name: "cart",
        initialState: {item: [] as CartItem[]}
        // initialState: {item:data.map((item:MenuItem)=>{
        //     return {...item, quantity:0}
        // })}
        ,
        reducers: {
            /**
             * 장바구니에 메뉴를 추가한다.
             * @param state
             * @param action
             */
            add(state, action) {
                let flag = false
                state.item.forEach((e) => {
                    if (e.id === action.payload.id) {
                        e.quantity++
                        flag = true
                    }
                })
                if (!flag) state.item.push(action.payload)
            },
            /**
             * 장바구니에서 메뉴를 삭제한다.
             * @param state
             * @param action
             */
            remove(state, action) {
                let item = action.payload
                state.item = state.item.filter((e: MenuItem) => {
                    return e.id !== item.id
                })
            },
            /**
             * 장바구니를 비운다.
             */
            clear(state) {
                state.item = []
            }
        }
    }
)
export const {add, remove, clear} = Cart.actions
export const menuReducer = Cart.reducer
