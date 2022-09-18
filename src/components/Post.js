import { React, useState } from 'react';
import CaedPost from './CaedPost';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import NotAutToDelete from './NotAutToDelete';

function Post(props) {
    const { user } = useAuth0();
    const [showNotAD, setShowNotAD] = useState(false);
    const [owner, setOwner] = useState("")
    const handledelete = async (postAouthr, id) => {
        if (user.name === postAouthr) {
            await axios.delete(`https://message-postgres.herokuapp.com/post/${id}`);
            props.getPostComment();
        } else {
            setOwner(postAouthr);
            setShowNotAD(true);
        }
    }
    const handleClose = () => {
        setShowNotAD(false);
    }
    return (
        <div>
            {
                props.posts.map((ele, indxe) => {
                    return (
                        <div key={indxe}>
                            <CaedPost
                                post={ele}
                                getPostComment={props.getPostComment}
                                handleDelete={handledelete} />
                        </div>
                    )
                })
            }
            <NotAutToDelete
                show={showNotAD}
                handleClose={handleClose}
                owner={owner} />
        </div>
    )
}

export default Post;
