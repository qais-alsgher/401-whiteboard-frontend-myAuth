import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slicer/authSlicer";
export default configureStore({
    reducer: {
        auth: authReducer,
        // post: postReducer,
    },
});

