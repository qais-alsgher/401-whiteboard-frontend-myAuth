import { React, useState } from 'react';
import { BsArrowReturnRight } from "react-icons/bs";
import { MdEdit, MdDelete, MdSend } from "react-icons/md";
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import NotAutToDelete from './NotAutToDelete';

function CommentForPost(props) {
    const { user } = useAuth0();
    const [showNotAD, setShowNotAD] = useState(false);
    const [owner, setOwner] = useState("");
    const [showUpdate, setShowUpdate] = useState(false);
    const [updateValue, setUpdateValue] = useState(props.comment.commentContent);
    const [uptateId, setUpdateId] = useState("");

    // to delte comment
    const handleDlete = async (id, commentAuther) => {
        if (user.name === commentAuther) {
            await axios.delete(`https://message-postgres.herokuapp.com/comment/${id}`);
            props.getPostComment();
        } else {
            setOwner(commentAuther);
            setShowNotAD(true);
        }
    };

    const handleClose = () => {
        setShowNotAD(false);
    }
    // to update coment 
    const handleChange = (e) => {
        setUpdateValue(e.target.value);
    };


    const handleShowUpdate = (id, commentAuther) => {
        if (user.name === commentAuther) {
            setShowUpdate(true);
            setUpdateId(id);
        } else {
            setOwner(commentAuther);
            setShowNotAD(true);
        }
    };


    const handleUpdate = async (e) => {
        e.preventDefault();

        const changeComment = {
            commentContent: updateValue
        };

        await axios.put(`https://message-postgres.herokuapp.com/comment/${uptateId}`, changeComment);
        props.getPostComment();
        setShowUpdate(false);
    }


    return (
        <div className='coment-post'>
            <div className='comment-owner' >
                <img className='imge-comment' src={props.comment.autherCommentImage} alt="imge owner comment" />
                <h6>{props.comment.commentAuther}</h6>
                <MdEdit className='edit-comment' onClick={() => { handleShowUpdate(props.comment.id, props.comment.commentAuther) }} />
                <MdDelete className='delete-comment' onClick={() => { handleDlete(props.comment.id, props.comment.commentAuther) }} />
            </div>
            {!showUpdate &&
                <div className='comment-row'>
                    <BsArrowReturnRight className='row-poenter-comment' />
                    <p>{props.comment.commentContent}</p>
                </div>
            }
            {showUpdate &&
                <form onSubmit={handleUpdate} className="formComent">
                    <BsArrowReturnRight className='row-poenter-comment' />
                    <input type="text"
                        onChange={handleChange}
                        value={updateValue}
                        placeholder='Edit Comment'
                    />
                    <button onSubmit={handleUpdate}>
                        <MdSend />
                    </button>

                </form>

            }

            <NotAutToDelete
                show={showNotAD}
                handleClose={handleClose}
                owner={owner} />
        </div >
    )
}


export default CommentForPost;
