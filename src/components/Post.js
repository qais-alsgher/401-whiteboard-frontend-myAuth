import { React, useState, useContext } from 'react';
import CaedPost from './CaedPost';
import axios from 'axios';
import { UserNameContext } from '../Helper/Context';
import NotAutToDelete from './NotAutToDelete';

function Post(props) {
    const { userName, setUserName } = useContext(UserNameContext);
    const [showNotAD, setShowNotAD] = useState(false);
    const [owner, setOwner] = useState("")
    const handledelete = async (postAouthr, id) => {
        if (userName === postAouthr) {
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
