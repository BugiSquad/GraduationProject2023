import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {faker} from "@faker-js/faker";
import {PostItem} from "../../types/PostItem";

export const getPostsFromRemote = createAsyncThunk(
    'getPostsFromRemote', () => {
        const arr = []
        for (let i = 0; i < 100; i++) {
            arr.push({
                "postName": faker.name.fullName(),
                "avatarUrl": faker.image.avatar(),
                "postTime": Math.trunc(Math.random() * 60) + "분 전"
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
            postName: "",
            avatarUrl: "",
            postTime: ""
        },
    },
    reducers: {
        addPost(state, action: PayloadAction<PostItem>) {
            const payload = action.payload
            if (state.posts.filter((item) => (
                item.postName === payload.postName && item.postTime === payload.postTime)).length > 0) return;
            state.posts.push(action.payload);
        },
        removePost(state, action: PayloadAction<PostItem>) {
            const payload: PostItem = action.payload
            state.posts = state.posts.filter((item) => (
                item.postName !== payload.postName || item.postTime !== payload.postTime))
        },
        setSelected(state, action: PayloadAction<PostItem>) {
            state.selected = action.payload
        },
        setSelectedWith(state, action: PayloadAction<number>) {
            if (state.posts.length < action.payload) return;
            state.selected = state.posts[action.payload]
        },
        setSelectedToNone(state) {
            state.selected = {postName: "", postTime: "", avatarUrl: ""}
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
