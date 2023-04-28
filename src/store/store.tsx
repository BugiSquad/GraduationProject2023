import {configureStore} from "@reduxjs/toolkit";
import {matchOption,} from "./matching/drawer";
import {matchPosts} from "./matching/posts";
import {navgroup} from "./navgroup";
import {MenuRepository} from "./menuRepository";

export const store = configureStore({
    reducer: {
        matchOptions: matchOption.reducer,
        postItems: matchPosts.reducer,
        navIdx: navgroup.reducer,
        menu: MenuRepository.reducer,
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
