import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PostItem} from "../../types/PostItem";
import {getPosts} from "../../api/Post";

export const getPostsFromRemote = createAsyncThunk(
    'getPostsFromRemote', () => {
        return getPosts();
        //still need to be async and return arr when its done
        // for (let i = 0; i < 30; i++) {
        //     arr.push({
        //         "title": faker.name.fullName(),
        //         "body": faker.lorem.paragraph(),
        //         "interest": [],
        //         "memberProfileUrl": faker.image.avatar(),
        //         "minutesLeftUntilMeal": Math.trunc(Math.random() * 60) + "분 전",
        //     })
        // }
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
        builder.addCase(getPostsFromRemote.fulfilled,
            (state, action) => {
                let res = action.payload
                res.data.data.content.forEach((item: any) => {
                    state.posts.push({
                        "title": item.title,
                        "body": item.body,
                        "interest": item.interest,
                        "memberProfileUrl": item.memberProfileUrl,
                        "minutesLeftUntilMeal": item.minutesLeftUntilMeal,
                    })
                })
            })
    }
})
export const {addPost, removePost, setSelected, setSelectedWith, setSelectedToNone} = matchPosts.actions
export const postReducer = matchPosts.reducer
