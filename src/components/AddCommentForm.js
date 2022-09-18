import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import CommentForPost from './CommentForPost';
import { MdSend } from "react-icons/md";

function AddCommentForm(props) {

    const [content, setContent] = useState('');

    const handleChange = (e) => {
        setContent(e.target.value)
    };

    const handleCreateComment = async (e) => {
        e.preventDefault();
        console.log(content);
        const newComment = {
            commentAuther: props.name,
            commentContent: content,
            postId: props.commentPost.id,
            autherCommentImage: props.picture
        }

        await axios.post(`https://message-postgres.herokuapp.com/comment`, newComment);
        props.getPostComment();
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
                                getPostComment={props.getPostComment}
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
