import {configureStore} from "@reduxjs/toolkit";
import {matchOption,} from "./matching/drawer";
import {navgroup} from "./navgroup";
import {MenuRepository} from "./menuRepository";
import {Cart} from "./cart";

export const store = configureStore({
    reducer: {
        matchOptions: matchOption.reducer,
        navIdx: navgroup.reducer,
        menu: MenuRepository.reducer,
        cart: Cart.reducer,
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
