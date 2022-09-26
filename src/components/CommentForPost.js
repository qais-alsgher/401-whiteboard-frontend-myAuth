import { React, useState, useContext } from 'react';
import { BsArrowReturnRight } from "react-icons/bs";
import { MdEdit, MdDelete, MdSend } from "react-icons/md";
import axios from 'axios';
import { UserNameContext } from '../Helper/Context';
import NotAutToDelete from './NotAutToDelete';
import cookies from 'react-cookies';

function CommentForPost(props) {
    const { userName } = useContext(UserNameContext);
    const [showNotAD, setShowNotAD] = useState(false);
    const [owner, setOwner] = useState("");
    const [showUpdate, setShowUpdate] = useState(false);
    const [updateValue, setUpdateValue] = useState(props.comment.commentContent);
    const [uptateId, setUpdateId] = useState("");

    // to delte comment
    const handleDlete = async (id, commentAuther) => {
        if (userName === commentAuther) {
            const token = cookies.load('token');

            await axios.delete(`https://post-my-auth.herokuapp.com/comment/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
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
        if (userName === commentAuther) {
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
        const token = cookies.load('token');

        await axios.put(`https://post-my-auth.herokuapp.com/comment/${uptateId}`, changeComment, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
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
