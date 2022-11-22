import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postAndCommentsData: [],
    postAndCommentsLoading: false,
    postAndCommentsError: null,
};

const postAndCommentsSlice = createSlice({
    name: 'postData',
    initialState,
    reducers: {
        getPostAndCommentsStart(state) {
            state.postAndCommentsLoading = true;
        },
        getPostAndCommentsSuccess(state, action) {
            state.postAndCommentsLoading = false;
            state.postAndCommentsData = action.payload;
            // console.log(action.payload);
            console.log(state.postAndCommentsData);
        },
        getPostAndCommentsFailed(state, action) {
            state.postAndCommentsLoading = false;
            state.postAndCommentsError = action.payload;
        }
    }
});
export const { getPostAndCommentsStart, getPostAndCommentsSuccess, getPostAndCommentsFailed } = postAndCommentsSlice.actions;
export default postAndCommentsSlice.reducer;
