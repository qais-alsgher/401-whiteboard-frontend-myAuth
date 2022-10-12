import { React, useContext } from 'react';
import CaedPost from './CaedPost';
import { postContext } from '../Context/PostContext';


function Post() {
    const { postsAndComment } = useContext(postContext);


    return (
        <div>
            {
                postsAndComment.map((ele, indxe) => {
                    return (
                        <div key={indxe}>
                            <CaedPost post={ele} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Post;
