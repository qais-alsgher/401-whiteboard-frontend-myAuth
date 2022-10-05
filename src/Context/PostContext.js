import { createContext, useState } from 'react';
import axios from 'axios';

export const postContext = createContext();


const PostContextProvider = (props) => {

    const [postsAndComment, setPostsAndComment] = useState([]);




    const getPostComment = async () => {
        const allPostsAndComment = await axios.get(`https://post-my-auth.herokuapp.com/PostComment`);
        setPostsAndComment(allPostsAndComment.data);
    };



    const value = { getPostComment, postsAndComment };


    return (
        <postContext.Provider value={value}>
            {props.children}
        </postContext.Provider>
    );
}

export default PostContextProvider;
