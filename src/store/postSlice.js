import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    selectedPost: null,
    loading: true,
    error: null
}

const postSlice = createSlice({
    name: "post",
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
        }
    }
});

export const {setPosts, setPost, addPost, removePost} = postSlice.actions;

export default postSlice.reducer;

