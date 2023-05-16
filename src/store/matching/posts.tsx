import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PostItem} from "../../types/PostItem";
import {getPosts} from "../../api/Post";

export const getPostsFromRemote = createAsyncThunk(
    'getPostsFromRemote', () => {
        return getPosts();
    }
)
export const matchPosts = createSlice({
    name: 'matchPosts',
    initialState: {
        posts: Array.of<PostItem>(),
        selected: {
            postId: -1,
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
        clearPosts(state) {
            state.posts = []
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
            state.selected = {
                postId: -1,
                title: "",
                minutesLeftUntilMeal: "",
                memberProfileUrl: "",
                interest: [],
                body: ""
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPostsFromRemote.fulfilled,
            (state, action) => {
                let res = action.payload
                res.data.data.content.forEach((item: any) => {
                    state.posts.push({
                        postId: item.postId,
                        title: item.title,
                        body: item.body,
                        interest: item.interest === undefined || item.interest.length === 0 ? ["배그"] : item.interest,
                        memberProfileUrl: item.memberProfileUrl,
                        minutesLeftUntilMeal: item.minutesLeftUntilMeal,
                    })
                })
            })
    }
})
export const {addPost, removePost, setSelected, setSelectedWith, setSelectedToNone, clearPosts} = matchPosts.actions
export const postReducer = matchPosts.reducer
