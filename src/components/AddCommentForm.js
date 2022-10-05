import { React, useState, useContext } from 'react';
import axios from 'axios';
import CommentForPost from './CommentForPost';
import { MdSend } from "react-icons/md";
import cookies from "react-cookies";
import { postContext } from '../Context/PostContext'

function AddCommentForm(props) {

    const [content, setContent] = useState('');
    const { getPostComment } = useContext(postContext);

    const handleChange = (e) => {
        setContent(e.target.value)
    };

    const handleCreateComment = async (e) => {
        e.preventDefault();
        const id = cookies.load('userId');
        const token = cookies.load('token');

        const newComment = {
            commentAuther: props.name,
            commentContent: content,
            postId: props.commentPost.id,
            autherCommentImage: props.picture,
            userId: +id
        }

        let a = await axios.post(`https://post-my-auth.herokuapp.com/comment`, newComment, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(a);
        getPostComment();
        setContent('');
    };

    return (
        <div>
            {
                props.commentPost.comments.map((ele, index) => {
                    return (
                        <div key={index}>
                            < CommentForPost
                                comment={ele}
                            />
                        </div>
                    )
                })
            }
            <form onSubmit={handleCreateComment} className="formComent">
                <input type="text"
                    onChange={handleChange}
                    value={content}
                    placeholder='Add Comment'
                />
                <button onSubmit={handleCreateComment}>
                    <MdSend />
                </button>

            </form>
        </div>
    )
}

export default AddCommentForm;
