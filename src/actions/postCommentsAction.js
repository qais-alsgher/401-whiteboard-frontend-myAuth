import axios from "axios";
import { getPostAndCommentsStart, getPostAndCommentsSuccess, getPostAndCommentsFailed } from "../Slicer/postSlicer";

export const getPostAndComments = (dispatch) => {

    dispatch(getPostAndCommentsStart());

    axios.get('https://post-my-auth.herokuapp.com/PostComment')
        .then(res => {
            dispatch(getPostAndCommentsSuccess(res.data));
        })
        .catch(err => {
            dispatch(getPostAndCommentsFailed(err.message));
        })
}