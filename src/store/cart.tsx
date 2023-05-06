import {createSlice} from "@reduxjs/toolkit";
import {MenuItem} from "../types/MenuItem";
import {CartItem} from "../types/CartItem";

export const CART = "Cart"

function saveCartToStorage(cart: CartItem[]) {
    localStorage.setItem(CART, JSON.stringify(cart))
}

function loadCartFromStorage() {
    const cart = localStorage.getItem(CART)
    const data = cart == null ? "[]" : cart;
    return JSON.parse(data).map((item: CartItem) => item)
}

export const Cart = createSlice(
    {
        name: "cart",
        initialState: {item: loadCartFromStorage() as CartItem[]}
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
                saveCartToStorage(state.item)
            }, update(state, action) {
                let flag = false
                state.item.forEach((e) => {
                    if (e.id === action.payload.id) {
                        e.quantity = action.payload.quantity
                        flag = true
                    }
                })
                if (!flag) state.item.push(action.payload)
                saveCartToStorage(state.item)
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
                saveCartToStorage(state.item)
            },
            /**
             * 장바구니를 비운다.
             */
            clear(state) {
                state.item = []
                saveCartToStorage(state.item)
            }
        }
    }
)
export const {add, update, remove, clear} = Cart.actions
export const menuReducer = Cart.reducer
