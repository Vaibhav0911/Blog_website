import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    selectedPost: null,
    loading: true,
    error: null
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action) => {
           state.posts = action.payload;
        },
        setPost: (state, action) => {
           state.selectedPost = action.payload; 
        },
        addPost: (state, action) => {
           state.posts.push(action.payload); 
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.$id !== action.payload );
        },
        isLoading: (state, action) => {
            state.loading = action.payload;
        },
        isError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {setPosts, setPost, addPost, removePost, isLoading, isError} = postSlice.actions;

export default postSlice.reducer;

