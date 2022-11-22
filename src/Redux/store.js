import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slicer/authSlicer";
import postAndCommentsReducer from "../Slicer/postSlicer";
export default configureStore({
    reducer: {
        auth: authReducer,
        post: postAndCommentsReducer,
    },
});

