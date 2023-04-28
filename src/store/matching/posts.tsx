import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {faker} from "@faker-js/faker";
import {PostItem} from "../../types/PostItem";

export const getPostsFromRemote = createAsyncThunk(
    'getPostsFromRemote', () => {
        const arr = []
        for (let i = 0; i < 30; i++) {
            arr.push({
                "title": faker.name.fullName(),
                "body": faker.lorem.paragraph(),
                "interest": [],
                "memberProfileUrl": faker.image.avatar(),
                "minutesLeftUntilMeal": Math.trunc(Math.random() * 60) + "분 전",

            })
        }
        return arr;
    }
)
export const matchPosts = createSlice({
    name: 'matchPosts',
    initialState: {
        posts: Array.of<PostItem>(),
        selected: {
            title: "",
            body: "",
            interest: [],
            memberProfileUrl: "",
            minutesLeftUntilMeal: "",
        },
    },
    reducers: {
        addPost(state, action: PayloadAction<PostItem>) {
            const payload = action.payload
            if (state.posts.filter((item) => (
                item.title === payload.title && item.minutesLeftUntilMeal === payload.minutesLeftUntilMeal)).length > 0) return;
            state.posts.push(action.payload);
        },
        removePost(state, action: PayloadAction<PostItem>) {
            const payload: PostItem = action.payload
            state.posts = state.posts.filter((item) => (
                item.title !== payload.title || item.minutesLeftUntilMeal !== payload.minutesLeftUntilMeal))
        },
        setSelected(state, action: PayloadAction<PostItem>) {
            // @ts-ignore
            state.selected = {...action.payload}
        },
        setSelectedWith(state, action: PayloadAction<number>) {
            if (state.posts.length < action.payload) return;
            // @ts-ignore
            state.selected = state.posts[action.payload]
        },
        setSelectedToNone(state) {
            state.selected = {title: "", minutesLeftUntilMeal: "", memberProfileUrl: "", interest: [], body: ""}
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPostsFromRemote.fulfilled, (state, action) => {
            action.payload.map((item) => state.posts.push(item));
        })
    }
})
export const {addPost, removePost, setSelected, setSelectedWith, setSelectedToNone} = matchPosts.actions
export const postReducer = matchPosts.reducer
